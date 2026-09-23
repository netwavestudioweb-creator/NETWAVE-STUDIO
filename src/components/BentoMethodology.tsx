"use client";

import React from "react";
import { Search, Palette, Code2, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";

interface StepItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
}

const STEPS: StepItem[] = [
  {
    number: "01",
    title: "Cadrage & Immersion",
    subtitle: "Comprendre vos cibles & vos enjeux",
    description:
      "Nous analysons votre secteur, vos concurrents et vos contraintes réseau réelles. Chaque objectif business est transformé en exigence technique.",
    icon: Search,
  },
  {
    number: "02",
    title: "Architecture & Design UI/UX",
    subtitle: "Conception orientée conversion",
    description:
      "Design System sur-mesure, prototypes interactifs et ergonomie fluide. Chaque écran est pensé pour capter et convertir vos visiteurs.",
    icon: Palette,
  },
  {
    number: "03",
    title: "Développement Zero-Bloat",
    subtitle: "Code propre & performances extrêmes",
    description:
      "Architecture logicielle moderne & stack adaptée à vos besoins. Zéro dépendance superflue. Vos plateformes chargent en moins de 1.5s, même sur réseau 3G/4G.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Déploiement & Suivi",
    subtitle: "Mise en ligne & Garantie intégrée",
    description:
      "Tests intensifs en pré-production, sécurisation des serveurs Edge et accompagnement sur le long terme sans mauvaise surprise.",
    icon: Rocket,
  },
];

export default function BentoMethodology() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {STEPS.map((step) => {
          const Icon = step.icon;

          return (
            <div
              key={step.number}
              className="relative group flex flex-col justify-between p-8 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#0A9678]/50 transition-all duration-300 shadow-xs hover:shadow-xl hover:shadow-[#281450]/5 overflow-hidden"
            >
              {/* Overlay de dégradé au survol */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 bg-gradient-to-b from-white via-transparent to-[#0A9678]/5 pointer-events-none" />

              {/* Contenu supérieur */}
              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#F5F5F7] border border-[#E5E7EB] flex items-center justify-center text-[#281450] group-hover:bg-[#0A9678] group-hover:text-white group-hover:border-[#0A9678] transition-all duration-300">
                    <Icon className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <span className="text-2xl font-extrabold text-gray-300 font-mono group-hover:text-[#0A9678] transition-colors">
                    {step.number}
                  </span>
                </div>

                <div className="pt-2">
                  <div className="relative">
                    {/* Ligne verticale d'accentuation glissante au survol */}
                    <div className="absolute -left-8 top-1 bottom-1 w-1 rounded-r-full bg-[#E5E7EB] group-hover:bg-[#0A9678] group-hover:h-full transition-all duration-300" />
                    
                    <h3 className="text-lg font-bold text-[#281450] font-poppins group-hover:translate-x-1 transition-transform duration-300">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-xs font-semibold text-[#0A9678] font-mono mt-1">
                    {step.subtitle}
                  </p>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed font-inter pt-1">
                  {step.description}
                </p>
              </div>

              {/* Indicateur inférieur */}
              <div className="relative z-10 pt-6 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-gray-400 group-hover:text-[#0A9678] transition-colors">
                <span>Étape {step.number} sur 04</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/methodologie"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F5F5F7] border border-[#E5E7EB] text-xs font-semibold text-[#281450] hover:bg-[#281450] hover:text-white transition-all duration-300"
        >
          <span>Découvrir notre méthodologie détaillée</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
