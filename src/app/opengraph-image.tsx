import { ImageResponse } from "next/og";

export const alt = "NetWave Studio — Sites web et logiciels qui restent rapides, même en 3G";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#140B26",
          padding: "64px 72px",
          color: "#FFFFFF",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Bandes obliques du monogramme */}
        <div style={{ position: "absolute", top: -60, right: 260, width: 90, height: 800, background: "#281450", transform: "skewX(-22deg)" }} />
        <div style={{ position: "absolute", top: -60, right: 120, width: 90, height: 800, background: "#0A9678", transform: "skewX(22deg)" }} />
        <div style={{ position: "absolute", top: -60, right: -20, width: 90, height: 800, background: "#3B2370", transform: "skewX(-22deg)" }} />

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <svg width="66" height="36" viewBox="0 20 230 125">
            <polygon points="10,140 40,140 85,25 55,25" fill="#8E65D8" />
            <polygon points="55,25 85,25 130,140 100,140" fill="#3DDBB0" />
            <polygon points="100,140 130,140 175,25 145,25" fill="#3DDBB0" />
            <polygon points="115,25 145,25 100,140 70,140" fill="#8E65D8" />
            <polygon points="145,25 175,25 220,140 190,140" fill="#8E65D8" />
          </svg>
          <span style={{ fontSize: 32, fontWeight: 700 }}>NetWave Studio</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 820 }}>
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em" }}>
            Des sites et des logiciels qui font tourner votre activité.
          </div>
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.05, color: "#3DDBB0", letterSpacing: "-0.03em" }}>
            Même en 3G.
          </div>
        </div>

        <div style={{ display: "flex", gap: 32, fontSize: 24, color: "#CFC9DC" }}>
          <span>Partout dans le monde</span>
          <span>·</span>
          <span>Site web en 10 jours, dès 149 €</span>
          <span>·</span>
          <span>netwave-studio.company</span>
        </div>
      </div>
    ),
    size
  );
}
