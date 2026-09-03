import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, TrendingDown, Zap, Clock, ShieldCheck, ExternalLink } from "lucide-react";
import AlkareemMockup from "@/components/AlkareemMockup";

export const metadata = {
  title: "Réalisations & Cas Clients — NetWave Studio",
  description: "Découvrez comment NetWave Studio conçoit et optimise des plateformes web performantes, illustrées par le cas Alkareem Parfumerie.",
};

export default function RealisationsPage() {
  return (
    <div className="w-full bg-white">
      {/* En-tête */}
      <section className="bg-[#F5F5F7] py-16 md:py-24 border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold text-[#0A9678] tracking-widest uppercase font-mono">
            PORTFOLIO &amp; IMPACT
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#281450] font-poppins">
            Nos Réalisations Clients
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-inter">
            Des études de cas concrètes où chaque ligne de code est pensée pour la vitesse, la fiabilité et le retour sur investissement.
          </p>
        </div>
      </section>

      {/* Étude de cas détaillée : Alkareem Parfumerie */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#281450] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#462882]/50 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-12">
            
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-8">
              <div>
                <span className="text-xs font-mono font-semibold text-[#0A9678] uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full">
                  ÉTUDE DE CAS EN VEDETTE
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white mt-3">
                  Alkareem Parfumerie
                </h2>
                <p className="text-sm text-gray-300 font-mono mt-1">
                  E-Commerce Haute Parfumerie &amp; Parfums de Niche
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold px-3 py-1.5 rounded-md bg-[#0A9678]/20 text-[#0fb894] border border-[#0A9678]/40">
                  En production
                </span>
              </div>
            </div>

            {/* Visualisation Mockup */}
            <div className="w-full max-w-4xl mx-auto">
              <AlkareemMockup />
            </div>

            {/* Détails techniques du projet */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8 border-t border-white/10">
              
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white font-poppins">
                  Le Défi Initial
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Une boutique en ligne subissant des lenteurs de chargement critiques (&gt; 2.8s) et un TTFB dégradé en période de forte affluence, impactant le taux de conversion et l&apos;image de marque luxueuse.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white font-poppins">
                  L&apos;Intervention NetWave
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Refonte complète du frontend sous Next.js App Router, mise en place d&apos;un CDN mondial avec stratégie de cache invalidé à la seconde, et optimisation des ressources visuelles riches.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white font-poppins">
                  Résultat Mesuré
                </h3>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-start gap-2.5 text-sm text-gray-200">
                    <TrendingDown className="w-4 h-4 text-[#0A9678] mt-0.5 flex-shrink-0" />
                    <span>TTFB réduit de 3-6s à ~1s sur réseau 3G (-75%)</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Projets à venir / Cadre d'accompagnement */}
      <section className="py-12 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border-2 border-dashed border-[#E5E7EB] p-12 text-center space-y-4 bg-[#F5F5F7]/50">
          <div className="w-12 h-12 rounded-full bg-white border border-[#E5E7EB] flex items-center justify-center text-[#281450] mx-auto">
            <ShieldCheck className="w-6 h-6 text-[#0A9678]" />
          </div>
          <h3 className="text-2xl font-bold text-[#281450] font-poppins">
            Votre projet sera notre prochaine réussite
          </h3>
          <p className="text-sm text-gray-600 max-w-xl mx-auto font-inter">
            Nous sélectionnons un nombre restreint de projets par trimestre pour garantir une disponibilité technique totale et une qualité irréprochable.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-[8px] bg-[#281450] hover:bg-[#462882] text-white text-sm font-semibold transition-colors"
            >
              Soumettre votre projet à l&apos;équipe
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
