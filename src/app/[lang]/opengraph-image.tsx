import { ImageResponse } from "next/og";
import { hasLocale, locales } from "@/i18n/config";
import { getDictionary, profile } from "@/i18n/dictionaries";

export const alt = "Felipe Saito";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(hasLocale(lang) ? lang : "pt");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 80,
          background:
            "radial-gradient(circle at 85% 15%, #5b21b6 0%, #0d0916 55%)",
          color: "#ede9f6",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 72,
            height: 72,
            borderRadius: 18,
            background: "#7c3aed",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 34,
            fontWeight: 700,
            color: "#fff",
            marginBottom: 40,
          }}
        >
          fs
        </div>
        <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -3 }}>
          {profile.name}
        </div>
        <div style={{ fontSize: 36, color: "#c4b5fd", marginTop: 12 }}>
          {dict.meta.title.split("·")[1]?.trim()}
        </div>
      </div>
    ),
    size,
  );
}
