import React from "react";

interface LogoNetWaveProps {
  className?: string;
  variant?: "dark" | "light";
  showText?: boolean;
}

export default function LogoNetWave({
  className = "",
  variant = "dark",
  showText = true,
}: LogoNetWaveProps) {
  const isLight = variant === "light";

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      {isLight ? (
        // Mode Fond Sombre (Footer) : Rendu Vectoriel Adapté Haute Lisibilité
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 shrink-0 flex items-center justify-center">
            <svg
              viewBox="0 0 240 180"
              className="w-full h-full drop-shadow-sm"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                {/* Branche N Gauche (Violet Clarté) */}
                <polygon points="10,140 40,140 85,25 55,25" fill="#A78BFA" />
                {/* Ruban N Diagonal (Émeraude Vivante) */}
                <polygon points="55,25 85,25 130,140 100,140" fill="#00E5A3" />
                <polygon points="100,140 130,140 175,25 145,25" fill="#00E5A3" />
                {/* Interlock N/W (Violet Accent) */}
                <polygon points="115,25 145,25 100,140 70,140" fill="#C084FC" />
                {/* Branche W Droite V (Émeraude) */}
                <polygon points="140,65 165,130 190,65 172,65 165,95 152,65" fill="#00E5A3" />
                {/* Branche W Externe (Violet Clarté) */}
                <polygon points="145,25 175,25 220,140 190,140" fill="#A78BFA" />
              </g>
            </svg>
          </div>
          {showText && (
            <div className="flex flex-col leading-none font-poppins font-extrabold tracking-tight text-left">
              <span className="text-[19px] sm:text-[22px] tracking-tight text-white">
                NetWave
              </span>
              <span className="text-[11px] sm:text-[13px] font-semibold text-[#00E5A3] tracking-[0.18em] uppercase -mt-0.5">
                Studio
              </span>
            </div>
          )}
        </div>
      ) : (
        // Mode Fond Clair (Navbar / Header) : Image Officielle HD Identique
        <img
          src="/logo.jpg"
          alt="NetWave Studio — Logo Officiel"
          className="h-9 sm:h-10 md:h-11 w-auto object-contain transition-opacity hover:opacity-95"
        />
      )}
    </div>
  );
}
