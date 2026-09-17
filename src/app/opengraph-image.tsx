import { ImageResponse } from "next/og";

export const alt = "NetWave Studio — Studio d'Ingénierie Web & Logicielle d'Élite";
export const size = {
  width: 1200,
  height: 630,
};
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
          alignItems: "flex-start",
          background: "linear-gradient(135deg, #1E0F3D 0%, #0F0726 60%, #050210 100%)",
          padding: "60px 80px",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow Effects */}
        <div
          style={{
            position: "absolute",
            top: "-150px",
            right: "-150px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(10,150,120,0.25) 0%, rgba(0,0,0,0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(142,101,216,0.25) 0%, rgba(0,0,0,0) 70%)",
          }}
        />

        {/* Header / Brand Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          {/* Logo Mark Icon */}
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "14px",
              background: "linear-gradient(135deg, #0A9678 0%, #8E65D8 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 24px rgba(10,150,120,0.4)",
            }}
          >
            <div
              style={{
                width: "22px",
                height: "22px",
                borderTop: "4px solid #FFFFFF",
                borderRight: "4px solid #FFFFFF",
                transform: "rotate(45deg)",
              }}
            />
          </div>
          <span
            style={{
              fontSize: "32px",
              fontWeight: 800,
              letterSpacing: "-0.5px",
              color: "#FFFFFF",
            }}
          >
            NetWave<span style={{ color: "#0A9678" }}>Studio</span>
          </span>
          <span
            style={{
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "1px",
              textTransform: "uppercase",
              padding: "6px 14px",
              borderRadius: "20px",
              background: "rgba(10, 150, 120, 0.15)",
              color: "#0A9678",
              border: "1px solid rgba(10, 150, 120, 0.3)",
              marginLeft: "12px",
            }}
          >
            Officiel
          </span>
        </div>

        {/* Main Title & Subtitle */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            maxWidth: "960px",
          }}
        >
          <div
            style={{
              fontSize: "52px",
              fontWeight: 900,
              lineHeight: 1.15,
              letterSpacing: "-1.5px",
              background: "linear-gradient(180deg, #FFFFFF 0%, #E2E8F0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Studio d'Ingénierie Web & Logicielle d'Élite
          </div>

          <div
            style={{
              fontSize: "24px",
              color: "#94A3B8",
              lineHeight: 1.4,
              fontWeight: 400,
            }}
          >
            Conception sur-mesure de plateformes web ultra-performantes, logiciels métiers résilients &amp; formation d'excellence.
          </div>
        </div>

        {/* Footer Bar */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "24px",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              fontSize: "16px",
              fontWeight: 600,
              color: "#CBD5E1",
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#0A9678" }} />
              Web &amp; E-commerce
            </span>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>•</span>
            <span>Logiciels Sur-mesure</span>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>•</span>
            <span>Réseaux &amp; Télécoms</span>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>•</span>
            <span>IA &amp; Automatisation</span>
          </div>

          <div
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#0A9678",
              fontFamily: "monospace",
              background: "rgba(10, 150, 120, 0.1)",
              padding: "8px 16px",
              borderRadius: "8px",
              border: "1px solid rgba(10, 150, 120, 0.2)",
            }}
          >
            netwave-studio.company
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
