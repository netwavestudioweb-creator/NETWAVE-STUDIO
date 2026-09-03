import React from "react";

export default function LogoGeometricWave() {
  return (
    <div className="relative w-full max-w-[540px] aspect-[5/4] flex items-center justify-center select-none">
      {/* Glow d'ambiance très subtil */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#281450]/10 via-[#462882]/8 to-[#0A9678]/12 rounded-3xl blur-2xl -z-10" />

      {/* Cadre architectural en verre & géométrie vectorielle */}
      <div className="relative w-full h-full rounded-2xl border border-[#281450]/10 bg-white/70 backdrop-blur-sm p-6 shadow-xl shadow-[#281450]/5 flex flex-col justify-between overflow-hidden">
        
        {/* Header technique du visualiseur */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0A9678]" />
            <span className="text-xs font-mono font-medium text-gray-500 uppercase tracking-widest">
              NW_ARCH_SYSTEM // V3.2
            </span>
          </div>
          <div className="text-[11px] font-mono text-[#0A9678] bg-[#0A9678]/10 px-2.5 py-1 rounded-full font-semibold">
            STATUS: HIGH PERF
          </div>
        </div>

        {/* Cœur Graphique Vectoriel : Tracé géométrique reprenant le zigzag & les rubans du logo */}
        <div className="relative my-auto py-2 flex items-center justify-center">
          <svg
            className="w-full h-56 max-h-[260px] drop-shadow-sm"
            viewBox="0 0 600 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Grille technique de fond en traits ultra-fins */}
            <defs>
              <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#281450" strokeWidth="0.5" strokeOpacity="0.06" />
              </pattern>
              <linearGradient id="gradViolet" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#462882" />
                <stop offset="100%" stopColor="#281450" />
              </linearGradient>
              <linearGradient id="gradTeal" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#0A9678" />
                <stop offset="100%" stopColor="#0fb894" />
              </linearGradient>
              <linearGradient id="gradIndigo" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#281450" />
                <stop offset="100%" stopColor="#462882" />
              </linearGradient>
            </defs>

            <rect width="600" height="320" fill="url(#grid)" />

            {/* Faisceaux d'ondes géométriques */}
            <path
              d="M 50 260 L 150 80 L 220 200 L 290 80 L 360 200 L 430 80 L 530 260"
              stroke="#0A9678"
              strokeWidth="2"
              strokeDasharray="6 6"
              strokeOpacity="0.4"
            />
            <path
              d="M 70 270 L 170 90 L 240 210 L 310 90 L 380 210 L 450 90 L 550 270"
              stroke="#462882"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              strokeOpacity="0.3"
            />

            {/* Ruban 1 : Motif N gauche en Violet dynamique */}
            <polygon
              points="100,250 60,250 140,50 180,50 135,160 185,160 220,95 245,95 190,250 150,250"
              fill="url(#gradViolet)"
              fillOpacity="0.85"
            />

            {/* Ruban 2 : Pliure centrale entrelacée en Teal signature */}
            <polygon
              points="155,250 120,250 200,50 240,50 195,165 245,165 295,75 320,75 250,250 210,250"
              fill="url(#gradTeal)"
              fillOpacity="0.95"
            />

            {/* Ruban 3 : Motif W droit en Indigo architectural */}
            <polygon
              points="270,250 235,250 295,110 325,110 300,175 335,175 370,110 395,110 340,250 305,250"
              fill="url(#gradIndigo)"
              fillOpacity="0.9"
            />

            {/* Lignes de repères isométriques et vecteurs de précision */}
            <line x1="60" y1="250" x2="340" y2="250" stroke="#281450" strokeWidth="1.5" strokeOpacity="0.2" />
            <line x1="140" y1="50" x2="395" y2="110" stroke="#0A9678" strokeWidth="1" strokeOpacity="0.4" />

            {/* Points nodaux interactifs */}
            <circle cx="140" cy="50" r="4" fill="#0A9678" />
            <circle cx="240" cy="50" r="4" fill="#462882" />
            <circle cx="295" cy="75" r="4" fill="#0A9678" />
            <circle cx="190" cy="250" r="4" fill="#281450" />
            <circle cx="250" cy="250" r="4" fill="#0A9678" />
            <circle cx="340" cy="250" r="4" fill="#462882" />
          </svg>
        </div>

        {/* Données d'ingénierie en bas du visualiseur */}
        <div className="grid grid-cols-3 gap-2 pt-3 border-t border-gray-100 text-center">
          <div className="p-2 rounded-lg bg-[#F5F5F7]">
            <p className="text-[10px] text-gray-500 font-medium">ARCHITECTURE</p>
            <p className="text-xs font-bold text-[#281450] font-poppins">Zero-Bloat</p>
          </div>
          <div className="p-2 rounded-lg bg-[#F5F5F7]">
            <p className="text-[10px] text-gray-500 font-medium">CORE WEB VITALS</p>
            <p className="text-xs font-bold text-[#0A9678] font-poppins">Score 100/100</p>
          </div>
          <div className="p-2 rounded-lg bg-[#F5F5F7]">
            <p className="text-[10px] text-gray-500 font-medium">INFRASTRUCTURE</p>
            <p className="text-xs font-bold text-[#462882] font-poppins">Edge Global</p>
          </div>
        </div>

      </div>
    </div>
  );
}
