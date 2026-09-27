import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import AlkareemMockup from "@/components/AlkareemMockup";
import InteractiveBrochure from "@/components/InteractiveBrochure";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Réalisations & Cas Clients — NetWave Studio",
  description:
    "Découvrez les projets réels déployés par NetWave Studio, illustrés par l'étude de cas e-commerce Alkareem Parfumerie et notre catalogue interactif.",
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

      {/* Section Dépliant Portfolio Interactif */}
      <section className="py-12 border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#0A9678] font-mono">
              Catalogue de projets interactif
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-poppins text-[#281450]">
              Dépliez le portfolio pour explorer nos créations
            </h2>
          </div>

          <InteractiveBrochure />
        </div>
      </section>

      {/* Étude de cas détaillée : Alkareem Parfumerie */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2 mb-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#0A9678] font-mono">
            Étude de cas en vedette
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold font-poppins text-[#281450]">
            Al Kareem Parfumerie — Présence E-Commerce &amp; WhatsApp
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Focus sur le périmètre livré, l&apos;intégration WhatsApp et la vitesse d&apos;exécution technique.
          </p>
        </div>

        <AlkareemMockup />
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
