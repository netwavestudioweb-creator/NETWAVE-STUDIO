import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, TrendingDown, Zap, Clock, ShieldCheck, ExternalLink, Sparkles } from "lucide-react";
import AlkareemMockup from "@/components/AlkareemMockup";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Réalisations & Cas Clients",
  description:
    "Découvrez les projets réels déployés par NetWave Studio, illustrés par l'étude de cas e-commerce Alkareem Parfumerie.",
  alternates: {
    canonical: "/realisations",
  },
  openGraph: {
    title: "Réalisations & Cas Clients — NetWave Studio",
    description:
      "Études de cas réelles et projets web déployés avec succès par NetWave Studio.",
    url: "https://www.netwave-studio.company/realisations",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Réalisations NetWave Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Réalisations & Cas Clients — NetWave Studio",
    description: "Projets web et logiciels déployés avec impact mesurable.",
    images: ["/twitter-image"],
  },
};

export default function RealisationsPage() {
  return (
    <div className="w-full bg-white font-inter">
      {/* En-tête */}
      <section className="bg-[#F5F5F7] py-16 md:py-24 border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold text-[#0A9678] tracking-widest uppercase font-mono">
            PORTFOLIO &amp; IMPACT RÉEL
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#281450] font-poppins">
            Nos Réalisations Clients
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-inter leading-relaxed">
            Des études de cas concrètes où chaque ligne de code est pensée pour la vitesse, la
            fiabilité et le retour sur investissement de nos clients.
          </p>
        </div>
      </section>

      {/* Étude de cas détaillée : Alkareem Parfumerie */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#1E0F3D] text-white p-6 sm:p-10 lg:p-14 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#462882]/50 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0A9678]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-10">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <span className="text-xs font-mono font-semibold text-[#0fb894] uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full">
                  ÉTUDE DE CAS EN VEDETTE
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white mt-3">
                  Alkareem Parfumerie
                </h2>
                <p className="text-sm text-gray-300 font-mono mt-1">
                  E-Commerce Haute Parfumerie &amp; Parfums de Niche — Cotonou, Bénin
                </p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://al-kareem-parfurmerie.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0A9678] hover:bg-[#0fb894] text-white text-xs font-semibold font-mono tracking-wide transition-all shadow-md active:scale-[0.98]"
                >
                  <span>Voir le site en direct</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Visualisation Mockup Interactive avec vraies photos */}
            <div className="w-full">
              <AlkareemMockup />
            </div>

            {/* Détails techniques du projet */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8 border-t border-white/10">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#0fb894] uppercase">
                  <span className="w-2 h-2 rounded-full bg-[#0A9678]" />
                  Contexte
                </div>
                <h3 className="text-lg font-bold text-white font-poppins">
                  Le Défi Initial
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Une boutique physique renommée à Cotonou disposant de plus de 500 références, mais
                  sans canal de commande en ligne réactif. Les clients perdaient du temps en
                  échanges de messages non structurés et le taux d'abandon était élevé.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#0fb894] uppercase">
                  <span className="w-2 h-2 rounded-full bg-[#0A9678]" />
                  Solution
                </div>
                <h3 className="text-lg font-bold text-white font-poppins">
                  L&apos;Ingénierie NetWave
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Création d'une application web ultra-légère (SSR + Edge Caching), grille mobile
                  tactile 2 colonnes adaptée à tous les smartphones (iPhone et Android), et panier
                  intelligent convertissant la commande en message WhatsApp pré-formaté en 2 clics.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#0fb894] uppercase">
                  <span className="w-2 h-2 rounded-full bg-[#0A9678]" />
                  Résultats
                </div>
                <h3 className="text-lg font-bold text-white font-poppins">
                  Impact Mesuré
                </h3>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <div className="flex items-start gap-2.5 text-sm text-gray-200">
                    <TrendingDown className="w-4 h-4 text-[#0fb894] mt-0.5 shrink-0" />
                    <span>TTFB réduit de 3-6s à ~1s sur réseau 3G (-75%).</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-[#0fb894] mt-0.5 shrink-0" />
                    <span>Catalogue tactile 2 colonnes fluide et commande WhatsApp directe.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cadre d'accompagnement */}
      <section className="py-12 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#E5E7EB] p-10 sm:p-14 text-center space-y-5 bg-[#F5F5F7]/70 shadow-xs">
          <div className="w-12 h-12 rounded-2xl bg-white border border-[#E5E7EB] flex items-center justify-center text-[#281450] mx-auto shadow-xs">
            <ShieldCheck className="w-6 h-6 text-[#0A9678]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#281450] font-poppins">
            Votre projet sera notre prochaine réussite
          </h3>
          <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
            Nous sélectionnons un nombre restreint de projets par trimestre pour garantir une
            disponibilité technique totale et une qualité architecturale irréprochable.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#281450] hover:bg-[#3A1F6E] text-white text-sm font-semibold transition-all active:scale-[0.98] shadow-sm"
            >
              <span>Soumettre votre projet au studio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
