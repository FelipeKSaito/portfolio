"use client";

import { useEffect } from "react";

const STORAGE_KEY = "lang-switch-position";

type Position = { section: number; offset: number };

function sections() {
  const main = document.querySelector("main");
  return main
    ? Array.from(main.querySelectorAll<HTMLElement>(":scope > section"))
    : [];
}

/** Remembers which section is at the top of the screen and how far into it. */
function readPosition(): Position {
  const all = sections();
  let section = 0;
  all.forEach((element, index) => {
    if (element.getBoundingClientRect().top <= 1) section = index;
  });
  const top = all[section]?.getBoundingClientRect().top ?? 0;
  return { section, offset: -top };
}

/** Scrolls back to the saved spot. Returns true once it is actually there. */
function restorePosition(position: Position): boolean {
  const target = sections()[position.section];
  if (!target) return true;
  const y = target.getBoundingClientRect().top + window.scrollY + position.offset;
  const root = document.documentElement;
  const previous = root.style.scrollBehavior;
  root.style.scrollBehavior = "auto";
  window.scrollTo(0, Math.max(0, y));
  root.style.scrollBehavior = previous;
  return Math.abs(target.getBoundingClientRect().top + position.offset) < 2;
}

type Props = {
  href: string;
  hrefLang: string;
  label: string;
  short: string;
};

/**
 * Switches language with a regular page load (both versions are static, so
 * it is instant) and keeps the reader at the same spot. A client-side
 * navigation would keep the previous language hidden in the document,
 * duplicating every section id.
 */
export function LanguageSwitch({ href, hrefLang, label, short }: Props) {
  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = sessionStorage.getItem(STORAGE_KEY);
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      return;
    }
    if (!saved) return;

    const position = JSON.parse(saved) as Position;

    // Fonts and images can still shift the layout for a few frames.
    // Keep re-applying until the position holds steady.
    let frame = 0;
    let attempts = 0;
    let steady = 0;
    const stop = () => cancelAnimationFrame(frame);
    const settle = () => {
      steady = restorePosition(position) ? steady + 1 : 0;
      attempts += 1;
      if (steady < 3 && attempts < 60) frame = requestAnimationFrame(settle);
    };
    settle();

    // If the reader starts scrolling, let go immediately.
    window.addEventListener("wheel", stop, { once: true, passive: true });
    window.addEventListener("touchstart", stop, { once: true, passive: true });
    window.addEventListener("keydown", stop, { once: true });
    return () => {
      stop();
      window.removeEventListener("wheel", stop);
      window.removeEventListener("touchstart", stop);
      window.removeEventListener("keydown", stop);
    };
  }, []);

  function handleClick() {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(readPosition()));
    } catch {
      // Without storage the switch still works; it just starts at the top.
    }
  }

  return (
    <a
      href={href}
      hrefLang={hrefLang}
      onClick={handleClick}
      className="lang-switch"
      aria-label={label}
      title={label}
    >
      {short}
    </a>
  );
}
