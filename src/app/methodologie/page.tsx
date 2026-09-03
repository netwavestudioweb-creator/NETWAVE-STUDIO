import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, FileCode, GitBranch, Cpu, Rocket } from "lucide-react";

export const metadata = {
  title: "Méthodologie d'Ingénierie — NetWave Studio",
  description: "Notre processus de développement en 4 étapes pour délivrer des applications web ultra-performantes, sans dette technique.",
};

export default function MethodologiePage() {
  const steps = [
    {
      num: "01",
      icon: FileCode,
      title: "Découverte & Cadrage",
      summary: "Comprendre les objectifs stratégiques et fixer les critères de succès.",
      details: [
        "Audit des besoins métier et contraintes d'utilisabilité",
        "Cartographie des dépendances et flux de données",
        "Cahier des charges technique et définition du scope MVP/V1",
        "Calendrier de livraison avec jalons stricts",
      ],
    },
    {
      num: "02",
      icon: Cpu,
      title: "Architecture Technique",
      summary: "Bâtir des fondations inébranlables avant d'écrire la première ligne de code.",
      details: [
        "Sélection rigoureuse des technologies et bibliothèques (zero-bloat)",
        "Modélisation des schémas de bases de données et interfaces d'API",
        "Définition de la stratégie de rendu (SSR, SSG, ISR, Edge)",
        "Plan de sécurité, gestion des identités et conformité",
      ],
    },
    {
      num: "03",
      icon: GitBranch,
      title: "Développement & Intégration",
      summary: "Une exécution rythmée avec intégration continue et revue de code rigoureuse.",
      details: [
        "Développement avec typage TypeScript strict",
        "Mise en place d'un environnement de staging accessible au client",
        "Revue systématique des pull requests et linting automatisé",
        "Tests unitaires, tests d'intégration et profiling des performances",
      ],
    },
    {
      num: "04",
      icon: Rocket,
      title: "Mise en Ligne & Suivi",
      summary: "Déploiement serein et accompagnement technique dans la durée.",
      details: [
        "Déploiement zéro-downtime sur infrastructure CDN mondiale",
        "Monitoring télémétrique et alertes de latence en temps réel",
        "Passation technique complète et documentation de l'architecture",
        "Accompagnement post-lancement et maintenance évolutive",
      ],
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* En-tête */}
      <section className="bg-[#F5F5F7] py-16 md:py-24 border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold text-[#0A9678] tracking-widest uppercase font-mono">
            PROCESSUS &amp; RIGUEUR
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#281450] font-poppins">
            Notre Méthodologie
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-inter">
            Une approche d&apos;ingénierie prévisible et transparente, pensée pour supprimer les imprévus et maximiser la qualité finale.
          </p>
        </div>
      </section>

      {/* Détail des 4 étapes */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative rounded-2xl border border-[#E5E7EB] bg-white p-8 sm:p-10 card-elevation-hover flex flex-col md:flex-row gap-8 items-start"
              >
                <div className="flex-shrink-0 flex items-center md:flex-col gap-4">
                  <span className="text-4xl sm:text-5xl font-extrabold text-[#462882] font-poppins bg-[#462882]/10 px-4 py-2 rounded-xl">
                    {step.num}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-[#F5F5F7] border border-[#E5E7EB] flex items-center justify-center text-[#0A9678]">
                    <Icon className="w-6 h-6 stroke-[1.75]" />
                  </div>
                </div>

                <div className="space-y-4 flex-1">
                  <div>
                    <h2 className="text-2xl font-bold text-[#281450] font-poppins">
                      {step.title}
                    </h2>
                    <p className="text-sm font-semibold text-[#0A9678] mt-1">
                      {step.summary}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-gray-100">
                    {step.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-[#0A9678] mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-[8px] bg-[#0A9678] hover:bg-[#0fb894] text-white font-semibold transition-all shadow-md"
          >
            Lancer un projet avec notre méthodologie
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
