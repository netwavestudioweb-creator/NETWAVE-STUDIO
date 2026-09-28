"use client";

import React from "react";
import { Gauge, ExternalLink, Globe, Smartphone, CheckCircle2, Info, ArrowRight } from "lucide-react";

export interface PageSpeedMetric {
  label: string;
  score: string;
  percentage: number;
}

export interface PerformanceCase {
  id: string;
  projectName: string;
  category: string;
  beforeScoreText: string;
  afterScoreText: string;
  beforeAfterNotice: string;
  metrics: PageSpeedMetric[];
  disclaimer: string;
  pagespeedUrl: string;
  liveUrl: string;
}

// Tableau extensible de cas d'études. Pour ajouter de futures réalisations,
// il suffit d'ajouter un nouvel objet dans ce tableau.
const PERFORMANCE_CASES: PerformanceCase[] = [
  {
    id: "al-kareem-parfumerie",
    projectName: "Al Kareem Parfumerie",
    category: "E-Commerce & Luxe",
    beforeScoreText: "68/100",
    afterScoreText: "90+/100",
    beforeAfterNotice: "Avant optimisation : 68/100 en performance mobile. Après optimisation : 90+/100.",
    metrics: [
      { label: "Performance", score: "90+", percentage: 92 },
      { label: "Accessibilité", score: "90+", percentage: 95 },
      { label: "Bonnes Pratiques", score: "90+", percentage: 96 },
      { label: "SEO", score: "100", percentage: 100 },
    ],
    disclaimer:
      "Score PageSpeed Insights, mesuré sur plusieurs runs. Les résultats varient légèrement selon les conditions réseau au moment du test — c'est pour ça qu'on affiche une fourchette honnête plutôt qu'un chiffre isolé.",
    pagespeedUrl: "https://pagespeed.web.dev/analysis/?url=https://www.al-kareemparfurmerie.com",
    liveUrl: "https://www.al-kareemparfurmerie.com",
  },
];

/**
 * Composant Cercle de score style Google PageSpeed Insights
 */
function PageSpeedCircle({ label, score, percentage }: PageSpeedMetric) {
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center text-center group/circle">
      <div className="relative w-22 h-22 sm:w-24 sm:h-24 flex items-center justify-center">
        <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
          {/* Cercle d'arrière-plan */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="#0A9678"
            strokeOpacity="0.12"
            strokeWidth="7"
            fill="transparent"
          />
          {/* Cercle de progression vert PageSpeed / NetWave */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="#0A9678"
            strokeWidth="7"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
            className="transition-all duration-1000 ease-out group-hover/circle:stroke-[#0fb894]"
          />
        </svg>
        {/* Valeur du score au centre */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl sm:text-2xl font-bold font-mono text-[#0A9678] tracking-tight group-hover/circle:scale-105 transition-transform">
            {score}
          </span>
        </div>
      </div>
      {/* Intitulé de la métrique */}
      <span className="mt-2.5 text-xs sm:text-sm font-semibold text-[#281450] font-poppins">
        {label}
      </span>
    </div>
  );
}

export default function MeasuredPerformance() {
  return (
    <section className="w-full bg-white py-20 md:py-28 border-b border-[#E5E7EB] relative overflow-hidden">
      {/* Halo d'ambiance d'arrière-plan */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0A9678]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* En-tête de section */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A9678]/10 border border-[#0A9678]/20 text-[#0A9678] text-xs font-mono font-semibold uppercase tracking-wider">
            <Gauge className="w-4 h-4" />
            <span>Performance Mesurée</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#281450] font-poppins leading-tight">
            Nos réalisations passées au crible de Google PageSpeed
          </h2>
          <p className="text-base text-gray-600 font-inter max-w-2xl mx-auto">
            Pas de promesse marketing. Des scores vérifiables, en 10 secondes.
          </p>
        </div>

        {/* Grille de cartes de performance */}
        <div className="max-w-4xl mx-auto space-y-8">
          {PERFORMANCE_CASES.map((item) => (
            <div
              key={item.id}
              className="relative group flex flex-col justify-between p-6 sm:p-8 md:p-10 rounded-3xl bg-white border border-[#E5E7EB] hover:border-[#0A9678]/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-[#281450]/5 overflow-hidden"
            >
              {/* Overlay de dégradé au survol */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 bg-gradient-to-b from-white via-transparent to-[#0A9678]/5 pointer-events-none" />

              <div className="relative z-10 space-y-6">
                {/* Entête de carte : Nom du projet + Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 pb-5">
                  <div>
                    <span className="text-xs font-semibold font-mono text-[#0A9678] uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#281450] font-poppins mt-0.5">
                      {item.projectName}
                    </h3>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#0A9678] text-xs font-medium self-start sm:self-auto">
                    <span className="w-2 h-2 rounded-full bg-[#0A9678] animate-pulse" />
                    <span className="font-semibold">Score Google Vérifié</span>
                  </div>
                </div>

                {/* Bannière "Avant / Après" */}
                <div className="bg-[#F5F5F7] border border-[#E5E7EB] rounded-2xl p-4 sm:p-4 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center text-[#281450] shrink-0 shadow-xs">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <p className="text-xs sm:text-sm text-gray-700 font-inter">
                      {item.beforeAfterNotice}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono shrink-0">
                    <span className="px-2.5 py-1 rounded-lg bg-amber-100 text-amber-800 font-bold border border-amber-200">
                      Avant: {item.beforeScoreText}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span className="px-2.5 py-1 rounded-lg bg-[#0A9678]/15 text-[#0A9678] font-bold border border-[#0A9678]/30">
                      Après: {item.afterScoreText}
                    </span>
                  </div>
                </div>

                {/* Grille des 4 cercles de scores PageSpeed */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 py-6 px-4 sm:px-8 rounded-2xl bg-gradient-to-b from-[#F5F5F7]/90 to-white border border-[#E5E7EB]">
                  {item.metrics.map((metric, idx) => (
                    <PageSpeedCircle key={idx} {...metric} />
                  ))}
                </div>

                {/* Note explicative (disclaimer) */}
                <div className="flex items-start gap-2.5 text-xs text-gray-500 italic font-inter leading-relaxed bg-gray-50/80 p-3.5 rounded-xl border border-gray-100">
                  <Info className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                  <p>{item.disclaimer}</p>
                </div>
              </div>

              {/* Boutons / Liens externes */}
              <div className="relative z-10 pt-6 mt-6 border-t border-gray-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <a
                  href={item.pagespeedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#281450] hover:bg-[#3A1F6E] text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <Gauge className="w-4 h-4 text-[#0fb894]" />
                  <span>Vérifier ce score vous-même sur PageSpeed Insights</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-0.5 opacity-80" />
                </a>

                <a
                  href={item.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#F5F5F7] hover:bg-[#E5E7EB] text-[#281450] text-xs sm:text-sm font-semibold transition-all duration-200 border border-[#E5E7EB]"
                >
                  <Globe className="w-4 h-4 text-[#0A9678]" />
                  <span>Voir le site en direct</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-0.5 opacity-70" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
