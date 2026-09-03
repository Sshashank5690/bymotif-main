import { ImageResponse } from "next/og";

import { site } from "@/content/site";

export const alt = `${site.name} — Bespoke websites for wedding photographers and creative brands`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Built from the same tokens as the site so a shared link already looks like
 * byMotif before anyone clicks it. ImageResponse supports only flexbox and a
 * subset of CSS, so this is laid out by hand rather than with utilities.
 */
export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#F7F2EA",
          backgroundImage:
            "radial-gradient(circle at 78% 12%, #E8CCC7 0%, rgba(232,204,199,0) 55%), radial-gradient(circle at 10% 88%, #D7C6A5 0%, rgba(215,198,165,0) 52%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
          <span style={{ fontSize: 34, color: "#2C2723", fontStyle: "italic" }}>
            by
          </span>
          <span style={{ fontSize: 34, color: "#2C2723" }}>Motif</span>
          <span
            style={{
              fontSize: 14,
              color: "#777069",
              letterSpacing: 4,
              marginLeft: 12,
            }}
          >
            STUDIOS
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 82,
              lineHeight: 1.04,
              color: "#2C2723",
              letterSpacing: -1.5,
              maxWidth: 900,
            }}
          >
            Digital experiences built around your brand.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 34,
              fontSize: 25,
              color: "#777069",
              maxWidth: 760,
            }}
          >
            Bespoke websites for photographers, creative studios and brands that
            care how their work is experienced.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 16,
            color: "#9A938A",
            letterSpacing: 3,
            borderTop: "1px solid rgba(44,39,35,0.12)",
            paddingTop: 24,
          }}
        >
          <span>STRATEGY · DESIGN · DEVELOPMENT</span>
          <span>{site.location.toUpperCase()}</span>
        </div>
      </div>
    ),
    size,
  );
}
