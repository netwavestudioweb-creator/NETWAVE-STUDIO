"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FolderOpen,
  FolderClosed,
  ChevronDown,
  ChevronUp,
  ArrowUpRight,
  ExternalLink,
  Sparkles,
  Layers,
  CheckCircle2,
} from "lucide-react";

interface BrochureProject {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  imageSrc: string;
  link: string;
  isExternal?: boolean;
  metric: string;
  tags: string[];
}

const BROCHURE_PROJECTS: BrochureProject[] = [
  {
    id: "alkareem",
    title: "Alkareem Parfumerie",
    client: "Alkareem Luxe Cotonou",
    category: "E-Commerce Haute Parfumerie",
    description:
      "Boutique e-commerce ultra-rapide optimisée pour réseaux 3G/4G avec catalogue 500+ parfums et commande WhatsApp instantanée.",
    imageSrc: "/assets/alkareem/vitrine.png",
    link: "/realisations",
    isExternal: false,
    metric: "-75% Temps de chargement (TTFB)",
    tags: ["Web Sur-Mesure", "Mobile Money", "WhatsApp"],
  },
  {
    id: "homme-sauvage",
    title: "L'Homme Sauvage",
    client: "Restaurant Gastronomique",
    category: "Restauration & Expérience",
    description:
      "Vitrine immersive avec menu interactif tactile, galerie haute résolution et réservation en 1 clic pour la clientèle exigeante.",
    imageSrc: "/projects/homme-sauvage.png",
    link: "https://homme-sauvage.vercel.app/",
    isExternal: true,
    metric: "Menu Tactile < 1s",
    tags: ["UI/UX Luxe", "Menu Tactile", "Réservation"],
  },
  {
    id: "bistrot-republique",
    title: "Bistrot Le République",
    client: "Brasserie & Bar",
    category: "Brasserie d'Élite",
    description:
      "Plateforme web dynamique pour brasserie, carte des boissons en temps réel et intégration Google Maps instantanée.",
    imageSrc: "/projects/bistrot-republique.png",
    link: "https://brasserie-le-republique.vercel.app/",
    isExternal: true,
    metric: "100% Mobile Optimized",
    tags: ["Fast Load", "Maps Integration", "Design"],
  },
  {
    id: "osthof",
    title: "L'Osthof",
    client: "Restaurant Traditionnel",
    category: "Gastronomie Alsacienne",
    description:
      "Site vitrine gourmand avec module d'événements, carte de saison et optimisation SEO locale à fort trafic.",
    imageSrc: "/projects/osthof.png",
    link: "https://osthof2.vercel.app/",
    isExternal: true,
    metric: "SEO Local n°1",
    tags: ["SEO Local", "Événements", "Responsive"],
  },
];

export default function InteractiveBrochure() {
  const [isUnfolded, setIsUnfolded] = useState(false);

  return (
    <div className="w-full max-w-6xl mx-auto my-8">
      {/* ============================================================
          ÉTAT FERMÉ : LE DÉPLIANT PLIÉ (Pochette 3D avec invitation au clic)
         ============================================================ */}
      {!isUnfolded ? (
        <div
          onClick={() => setIsUnfolded(true)}
          className="group relative w-full cursor-pointer rounded-3xl bg-[#1E0F3D] text-white p-8 sm:p-12 md:p-16 border-2 border-[#0A9678]/50 hover:border-[#0A9678] shadow-2xl transition-all duration-500 hover:shadow-[#0A9678]/20 hover:-translate-y-1 overflow-hidden"
        >
          {/* Effets lumineux de fond */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#462882]/50 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0A9678]/20 rounded-full blur-3xl pointer-events-none" />

          {/* Lignes de pliure visuelles 3D */}
          <div className="absolute inset-y-0 left-1/3 w-px bg-white/10 hidden md:block" />
          <div className="absolute inset-y-0 left-2/3 w-px bg-white/10 hidden md:block" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 text-center md:text-left">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0fb894] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0fb894]" />
                </span>
                <span className="text-xs font-mono font-bold text-[#0fb894] uppercase tracking-wider">
                  Dépliant Portfolio • 4 Projets en mémoire
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-poppins text-white leading-tight">
                Dépliez le catalogue de nos réalisations.
              </h2>

              <p className="text-sm sm:text-base text-gray-300 font-inter max-w-xl leading-relaxed">
                Cliquez sur ce dépliant interactif pour l&apos;ouvrir et explorer les projets réels
                déployés par NetWave Studio (Alkareem, Gastronomie, Brasserie &amp; E-Commerce).
              </p>
            </div>

            {/* Bouton d'ouverture du dépliant (Centré sur mobile & bureau) */}
            <div className="w-full md:w-auto shrink-0 flex flex-col items-center justify-center text-center gap-3 mt-4 md:mt-0">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-[#0A9678] group-hover:bg-[#0fb894] text-white flex flex-col items-center justify-center gap-1.5 shadow-xl shadow-[#0A9678]/40 group-hover:scale-110 icon-breathe transition-all duration-300">
                <FolderOpen className="w-10 h-10 sm:w-12 sm:h-12 animate-bounce" />
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase">
                  DÉPLIER
                </span>
              </div>
              <span className="text-xs font-mono font-semibold text-gray-300 group-hover:text-white transition-colors">
                Cliquez pour ouvrir le catalogue
              </span>
            </div>
          </div>
        </div>
      ) : (
        /* ============================================================
            ÉTAT DÉPLIÉ : LE DÉPLIANT OUVERT (4 Volets Projets)
           ============================================================ */
        <div className="w-full space-y-6 animate-in fade-in zoom-in-95 duration-500">
          {/* Barre de contrôle du dépliant ouvert */}
          <div className="flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-[#1E0F3D] text-white border border-[#0A9678]/50 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#0A9678] text-white flex items-center justify-center font-bold">
                <FolderOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold font-poppins text-white">
                  Dépliant Portfolio Déplié
                </h3>
                <p className="text-xs text-gray-300 font-mono">
                  4 Projets chargés • Cliquez sur n&apos;importe quel projet pour ouvrir ses détails
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsUnfolded(false)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold font-mono transition-colors"
            >
              <span>Replier le dépliant</span>
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>

          {/* Grille des 4 volets du dépliant */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BROCHURE_PROJECTS.map((project) => {
              return (
                <div
                  key={project.id}
                  className="group relative rounded-3xl bg-white border border-[#E5E7EB] hover:border-[#0A9678] overflow-hidden shadow-md hover:shadow-2xl hover:shadow-[#281450]/10 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Image du projet */}
                  <div className="relative w-full h-[220px] sm:h-[260px] bg-[#1F2937] overflow-hidden">
                    <Image
                      src={project.imageSrc}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#281450]/90 via-transparent to-transparent" />

                    {/* Badge Catégorie */}
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#1E0F3D]/90 backdrop-blur-md border border-white/20 text-[11px] font-bold text-[#0fb894] font-mono">
                      {project.category}
                    </div>

                    {/* Badge Métrique */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                      <div>
                        <span className="text-xs text-gray-300 font-mono block">
                          {project.client}
                        </span>
                        <h4 className="text-xl font-bold font-poppins text-white leading-tight">
                          {project.title}
                        </h4>
                      </div>
                    </div>
                  </div>

                  {/* Contenu et description */}
                  <div className="p-6 space-y-4 text-left flex-1 flex flex-col justify-between bg-white">
                    <p className="text-sm text-gray-600 leading-relaxed font-inter">
                      {project.description}
                    </p>

                    <div className="space-y-3 pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-xs font-semibold text-[#0A9678] font-mono">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{project.metric}</span>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-0.5 rounded-full bg-[#F5F5F7] text-[11px] font-medium text-gray-600 font-mono"
                          >
                            #{t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bouton d'action pour ouvrir les détails du projet */}
                    <div className="pt-4">
                      {project.isExternal ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#281450] hover:bg-[#0A9678] text-white font-bold text-xs transition-all duration-200 shadow-sm"
                        >
                          <span>Ouvrir la démo du projet</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ) : (
                        <Link
                          href={project.link}
                          className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#0A9678] hover:bg-[#0fb894] text-white font-bold text-xs transition-all duration-200 shadow-sm"
                        >
                          <span>Voir tous les détails du projet</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
