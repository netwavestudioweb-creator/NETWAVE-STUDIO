import React from "react";
import { Sparkles, Gauge, ArrowDownRight, ShieldCheck, Zap } from "lucide-react";

export default function AlkareemMockup() {
  return (
    <div className="w-full rounded-xl overflow-hidden bg-white shadow-2xl shadow-black/40 border border-white/20">
      {/* Barre supérieure style navigateur (Chrome / Safari) */}
      <div className="bg-[#F5F5F7] px-4 py-3 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
        </div>
        
        {/* URL Bar */}
        <div className="bg-white px-4 py-1 rounded-md text-[11px] text-gray-600 font-mono flex items-center gap-2 border border-gray-200 w-1/2 justify-center shadow-xs">
          <span className="text-[#0A9678]">🔒</span>
          <span className="truncate">https://alkareem-parfumerie.com</span>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-[#0A9678] bg-[#0A9678]/10 px-2.5 py-0.5 rounded">
          <Zap className="w-3 h-3" />
          <span>Production</span>
        </div>
      </div>

      {/* Vue intérieure du site Alkareem Parfumerie */}
      <div className="p-6 bg-[#FAF9F6] text-gray-800 space-y-5">
        
        {/* Header fictif de la boutique */}
        <div className="flex items-center justify-between border-b border-gray-200 pb-3">
          <div className="flex items-center gap-2">
            <span className="font-serif tracking-widest text-lg font-bold text-[#281450]">
              AL-KAREEM
            </span>
            <span className="text-[10px] tracking-widest uppercase text-[#0A9678] font-mono">
              HAUTE PARFUMERIE
            </span>
          </div>
          <div className="hidden sm:flex items-center space-x-4 text-xs font-medium text-gray-600">
            <span>Extraits de Parfum</span>
            <span>Ouds Rares</span>
            <span>Collections Privées</span>
          </div>
          <div className="text-xs font-semibold px-2.5 py-1 rounded bg-[#281450] text-white">
            Panier (0)
          </div>
        </div>

        {/* Hero Banner de la boutique */}
        <div className="rounded-lg bg-gradient-to-r from-[#281450] to-[#462882] p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-2 max-w-sm">
            <span className="inline-block text-[11px] font-semibold text-[#0A9678] uppercase tracking-wider bg-black/30 px-2 py-0.5 rounded">
              Nouvelle Collection Orientale
            </span>
            <h4 className="text-xl font-serif font-bold text-white leading-tight">
              L&apos;Élixir d&apos;Ambre Impérial
            </h4>
            <p className="text-xs text-gray-200">
              Architecture Next.js App Router ultra-rapide garantissant un parcours d&apos;achat fluide sans friction.
            </p>
          </div>
          <div className="w-24 h-24 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 flex flex-col items-center justify-center text-center p-2">
            <span className="text-2xl font-serif font-bold text-[#0A9678]">50ml</span>
            <span className="text-[10px] text-gray-200">Extrait Pur</span>
          </div>
        </div>

        {/* Mini-catalogue produits */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { name: "Santal Royal", tag: "Boisé & Cuiré", price: "185 €" },
            { name: "Rose de Taif", tag: "Floral Intense", price: "210 €" },
            { name: "Musc Blanc", tag: "Velouté & Pur", price: "160 €" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-3 border border-gray-200 flex flex-col justify-between shadow-xs"
            >
              <div className="w-full h-14 rounded bg-[#F5F5F7] flex items-center justify-center text-gray-400 text-xs font-mono">
                [Flacon 3D]
              </div>
              <div className="mt-2">
                <p className="text-xs font-bold text-[#281450] truncate">{item.name}</p>
                <p className="text-[10px] text-gray-500">{item.tag}</p>
              </div>
              <div className="mt-2 pt-2 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs font-bold text-[#0A9678]">{item.price}</span>
                <span className="text-[10px] text-white bg-[#281450] px-1.5 py-0.5 rounded">
                  +
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Bandeau technique d'optimisation NetWave */}
      <div className="bg-[#1F2937] px-4 py-2.5 text-white flex flex-wrap items-center justify-between text-xs gap-2">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#0A9678]" />
          <span className="text-gray-300 font-mono text-[11px]">Next.js 15 + Edge CDN + Tailored Cache</span>
        </div>
        <div className="flex items-center gap-4 text-[11px] font-mono">
          <span className="text-[#0A9678] font-bold">TTFB réduit de 3-6s à ~1s sur réseau 3G (-75%)</span>
        </div>
      </div>
    </div>
  );
}
