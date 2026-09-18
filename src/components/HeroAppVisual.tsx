import React from "react";
import Image from "next/image";
import { Sparkles, Smartphone, Zap, Cpu } from "lucide-react";

export default function HeroAppVisual() {
  return (
    <div className="relative w-full max-w-[480px] lg:max-w-[560px] select-none mx-auto py-4">
      {/* 1. Halo d'ambiance lumineux & fluide en arrière-plan (sans cadre carte) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[125%] h-[125%] bg-gradient-to-tr from-[#281450]/20 via-[#462882]/15 to-[#0A9678]/25 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-[#0A9678]/20 rounded-full blur-2xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-[#281450]/20 rounded-full blur-2xl -z-10 pointer-events-none" />

      {/* 2. Composition d'image immersive fondu dans le background */}
      <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-[#281450]/20 group">
        <Image
          src="/hero-visual.jpg"
          alt="Applications Web & Écosystème Mobile NetWave Studio"
          fill
          sizes="(max-width: 640px) 360px, (max-width: 1024px) 480px, 560px"
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          priority
        />

        {/* Overlay dégradé pour fondre l'image dans l'atmosphère du site */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E0F3D]/85 via-transparent to-[#1E0F3D]/25 mix-blend-multiply" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-3xl" />

        {/* Badge supérieur en verre dépoli */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <div className="px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-xs font-mono font-medium flex items-center gap-2 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#0fb894] animate-pulse" />
            <span className="tracking-wide">ÉCOSYSTÈME CONNECTÉ</span>
          </div>
        </div>

        {/* Panneau inférieur immergé dans l'image */}
        <div className="absolute bottom-4 left-4 right-4 p-3.5 sm:p-4 rounded-2xl bg-[#1E0F3D]/80 backdrop-blur-xl border border-white/15 text-white flex items-center justify-between shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0A9678] flex items-center justify-center text-white shrink-0 shadow-md">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-semibold tracking-wide text-gray-300 uppercase font-mono">
                Applications Web &amp; Mobiles
              </p>
              <p className="text-xs sm:text-sm font-bold text-white font-poppins">
                Haute Disponibilité &amp; Vitesse
              </p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/10 text-[11px] font-mono font-semibold text-[#0fb894] border border-[#0fb894]/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Opti 3G/4G</span>
          </div>
        </div>
      </div>

      {/* 3. Badges flottants en 3D autour de l'image (effet d'intégration naturelle) */}
      <div className="absolute -top-3 -right-2 sm:-right-4 bg-white/95 backdrop-blur-xl text-[#281450] px-4 py-2.5 rounded-2xl border border-gray-100 shadow-xl flex items-center gap-2.5 text-xs font-bold font-poppins transition-transform duration-300 hover:scale-105">
        <div className="w-7 h-7 rounded-lg bg-[#0A9678]/15 text-[#0A9678] flex items-center justify-center">
          <Zap className="w-4 h-4" />
        </div>
        <div>
          <span className="block text-[10px] text-gray-400 font-normal uppercase font-mono">Vitesse Réseau</span>
          <span>Ultra Réactive</span>
        </div>
      </div>

      <div className="absolute -bottom-3 -left-2 sm:-left-4 bg-[#1E0F3D]/95 backdrop-blur-xl text-white px-4 py-2.5 rounded-2xl border border-white/20 shadow-2xl flex items-center gap-2.5 text-xs font-bold font-poppins transition-transform duration-300 hover:scale-105">
        <div className="w-7 h-7 rounded-lg bg-[#462882] text-white flex items-center justify-center">
          <Cpu className="w-4 h-4 text-[#0fb894]" />
        </div>
        <div>
          <span className="block text-[10px] text-gray-400 font-normal uppercase font-mono">Architecture</span>
          <span>Sur-Mesure</span>
        </div>
      </div>
    </div>
  );
}
