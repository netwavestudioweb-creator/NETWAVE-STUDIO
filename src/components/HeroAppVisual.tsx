import React from "react";
import Image from "next/image";
import { Sparkles, Smartphone, Layers, Zap } from "lucide-react";

export default function HeroAppVisual() {
  return (
    <div className="relative w-full max-w-[360px] sm:max-w-[480px] lg:max-w-[540px] select-none mx-auto">
      {/* Halo d'ambiance lévitant */}
      <div className="absolute -inset-3 bg-gradient-to-tr from-[#281450]/15 via-[#462882]/10 to-[#0A9678]/20 rounded-3xl blur-2xl -z-10" />

      {/* Cadre architectural principal */}
      <div className="relative w-full rounded-2xl sm:rounded-3xl border border-[#281450]/12 bg-white/90 backdrop-blur-md p-3.5 sm:p-5 shadow-2xl shadow-[#281450]/10 flex flex-col justify-between overflow-hidden gap-3 sm:gap-4">
        
        {/* Header technique du visualiseur */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-2.5 sm:pb-3">
          <div className="flex items-center space-x-2">
            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#0A9678] animate-pulse" />
            <span className="text-[10px] sm:text-xs font-mono font-medium text-gray-500 uppercase tracking-wider">
              NETWAVE // APPS &amp; ECOSYSTEM
            </span>
          </div>
          <div className="text-[9px] sm:text-[11px] font-mono text-[#0A9678] bg-[#0A9678]/10 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full font-semibold flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            <span>ECOSYSTÈME CONNECTÉ</span>
          </div>
        </div>

        {/* Visuel principal : Illustration 3D Smartphone & Apps Web / Réseaux */}
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-inner border border-gray-200/60 group">
          <Image
            src="/hero-visual.jpg"
            alt="Applications Web, Réseaux Sociaux & IA — NetWave Studio"
            fill
            sizes="(max-width: 640px) 340px, (max-width: 1024px) 480px, 540px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />

          {/* Badges flottants immersifs */}
          <div className="absolute top-3 left-3 bg-[#1E0F3D]/80 backdrop-blur-md text-white px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-medium border border-white/20 flex items-center gap-1.5 shadow-md">
            <Smartphone className="w-3 h-3 text-[#0fb894]" />
            <span>Apps Web &amp; Mobiles</span>
          </div>

          <div className="absolute bottom-3 right-3 bg-[#0A9678]/90 backdrop-blur-md text-white px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-semibold border border-white/20 flex items-center gap-1.5 shadow-md">
            <Zap className="w-3 h-3 text-white" />
            <span>IA &amp; Automatisation</span>
          </div>
        </div>

        {/* Métriques adaptatives sous le visuel (ne coupent jamais) */}
        <div className="grid grid-cols-3 gap-1.5 sm:gap-2 pt-1 border-t border-gray-100 text-center">
          <div className="p-1.5 sm:p-2 rounded-xl bg-[#F5F5F7]">
            <p className="text-[9px] sm:text-[10px] text-gray-500 font-medium truncate uppercase font-mono">
              APPLICATIONS
            </p>
            <p className="text-[11px] sm:text-xs font-bold text-[#281450] font-poppins truncate">
              Web &amp; Mobile
            </p>
          </div>
          <div className="p-1.5 sm:p-2 rounded-xl bg-[#F5F5F7]">
            <p className="text-[9px] sm:text-[10px] text-gray-500 font-medium truncate uppercase font-mono">
              RESEAUX
            </p>
            <p className="text-[11px] sm:text-xs font-bold text-[#0A9678] font-poppins truncate">
              Social &amp; API
            </p>
          </div>
          <div className="p-1.5 sm:p-2 rounded-xl bg-[#F5F5F7]">
            <p className="text-[9px] sm:text-[10px] text-gray-500 font-medium truncate uppercase font-mono">
              LOGICIELS
            </p>
            <p className="text-[11px] sm:text-xs font-bold text-[#462882] font-poppins truncate">
              Sur-Mesure
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
