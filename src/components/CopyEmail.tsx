"use client";

import { useState } from "react";

type Props = {
  email: string;
  label: string;
  copiedLabel: string;
};

export function CopyEmail({ email, label, copiedLabel }: Props) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked; the mailto link remains available.
    }
  }

  return (
    <button
      type="button"
      className="button button--ghost"
      onClick={handleCopy}
      aria-live="polite"
    >
      {copied ? copiedLabel : label}
    </button>
  );
}
