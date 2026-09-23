"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles, ExternalLink } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  imageSrc: string;
  link: string;
  isExternal?: boolean;
  metrics?: string;
  tags: string[];
}

const PROJECTS: ProjectItem[] = [
  {
    id: "alkareem",
    title: "Alkareem Parfumerie",
    client: "Alkareem Luxe Cotonou",
    category: "E-Commerce Haute Parfumerie",
    description:
      "Plateforme web e-commerce ultra-rapide optimisée pour les réseaux 3G/4G, avec catalogue dynamique et intégration des paiements Mobile Money.",
    imageSrc: "/assets/alkareem/vitrine.png",
    link: "/realisations",
    isExternal: false,
    metrics: "-75% TTFB • 500+ Parfums",
    tags: ["Web Sur-Mesure", "Mobile Money", "3G/4G Fast"],
  },
  {
    id: "alkareem-catalogue",
    title: "Catalogue & Fiche Produit Alkareem",
    client: "Alkareem Parfumerie",
    category: "Expérience Client & Recherche",
    description:
      "Interface de recherche instantanée sans rechargement de page, filtres avancés par notes olfactives et panier express Mobile Money.",
    imageSrc: "/assets/alkareem/catalogue.png",
    link: "/realisations",
    isExternal: false,
    metrics: "Recherche < 50ms",
    tags: ["Algolia", "Tailwind CSS", "Zero-Bloat"],
  },
  {
    id: "alkareem-mobile",
    title: "Optimisation Mobile & Checkout",
    client: "Alkareem Parfumerie",
    category: "Paiement Local & PWA",
    description:
      "Tunnel de commande réduit à 2 étapes avec confirmation automatique WhatsApp et reçu digital instantané pour la clientèle locale.",
    imageSrc: "/assets/alkareem/mobile.png",
    link: "/realisations",
    isExternal: false,
    metrics: "100% Mobile Ready",
    tags: ["WhatsApp API", "MTN Momo", "Moov"],
  },
];

export default function ProjectDeckShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = PROJECTS[activeIndex];

  return (
    <div className="w-full relative flex flex-col items-center">
      {/* Sélecteur d'onglets pour le contrôle manuel sur mobile/desktop */}
      <div className="flex items-center gap-2 p-1.5 rounded-full bg-[#F5F5F7] border border-[#E5E7EB] mb-8 md:mb-12 shadow-inner">
        {PROJECTS.map((project, idx) => (
          <button
            key={project.id}
            onClick={() => setActiveIndex(idx)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
              activeIndex === idx
                ? "bg-[#281450] text-white shadow-md scale-[1.02]"
                : "text-gray-600 hover:text-[#281450] hover:bg-white/60"
            }`}
          >
            {project.title.split(" ")[0]} {project.title.split(" ")[1] || ""}
          </button>
        ))}
      </div>

      {/* Conteneur principal de la pile 3D */}
      <div className="relative w-full max-w-[640px] h-[340px] sm:h-[420px] md:h-[480px] flex items-center justify-center my-4">
        {/* L'éventail de cartes 3D */}
        <div className="relative w-[280px] sm:w-[380px] md:w-[460px] h-[220px] sm:h-[290px] md:h-[340px]">
          {PROJECTS.map((project, idx) => {
            const isCurrent = idx === activeIndex;
            const offset = idx - activeIndex;

            // Calculs de rotation et décalage 3D dynamique
            let rotation = offset * 4;
            let translateY = Math.abs(offset) * 12;
            let translateX = offset * 24;
            let zIndex = 30 - Math.abs(offset) * 10;
            let opacity = 1 - Math.abs(offset) * 0.25;

            if (isCurrent) {
              rotation = 0;
              translateY = -8;
              translateX = 0;
              zIndex = 40;
              opacity = 1;
            }

            return (
              <div
                key={project.id}
                onClick={() => setActiveIndex(idx)}
                style={{
                  transform: `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotation}deg) scale(${
                    isCurrent ? 1 : 0.92
                  })`,
                  zIndex: zIndex,
                  opacity: opacity,
                }}
                className={`absolute inset-0 rounded-2xl md:rounded-3xl overflow-hidden border-2 md:border-[3px] transition-all duration-500 ease-out cursor-pointer shadow-2xl ${
                  isCurrent
                    ? "border-[#0A9678] shadow-[#281450]/20"
                    : "border-white/80 hover:border-[#0A9678]/50"
                }`}
              >
                {/* Visuel du projet */}
                <div className="relative w-full h-full bg-[#1F2937] group">
                  <Image
                    src={project.imageSrc}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 380px, 460px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#281450]/90 via-[#281450]/20 to-transparent" />

                  {/* Badge de métrique sur la carte active */}
                  {project.metrics && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-white/50 text-[11px] font-bold text-[#281450] shadow-sm flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#0A9678]" />
                      <span>{project.metrics}</span>
                    </div>
                  )}

                  {/* Infos rapides sur la carte */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#0fb894] font-mono font-semibold">
                      {project.category}
                    </p>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold font-poppins text-white leading-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating Cartouche Glassmorphism au bas de la pile */}
        <div className="absolute -bottom-10 sm:-bottom-12 left-1/2 -translate-x-1/2 w-[90%] max-w-[480px] p-4 sm:p-5 rounded-2xl bg-white/90 backdrop-blur-xl border border-white/80 shadow-[0_12px_40px_rgba(40,20,80,0.12)] z-50 flex items-center justify-between gap-4 transition-all duration-300">
          <div className="flex flex-col text-left overflow-hidden">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0A9678] animate-pulse" />
              <span className="text-xs font-bold text-[#281450] font-poppins truncate">
                {activeProject.client}
              </span>
            </div>
            <p className="text-xs text-gray-500 line-clamp-1 mt-0.5 font-inter">
              {activeProject.description}
            </p>
          </div>

          {activeProject.isExternal ? (
            <a
              href={activeProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 w-11 h-11 rounded-full bg-[#281450] hover:bg-[#0A9678] text-white flex items-center justify-center transition-all duration-200 shadow-md hover:scale-105"
              aria-label={`Visiter ${activeProject.title}`}
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          ) : (
            <Link
              href={activeProject.link}
              className="shrink-0 w-11 h-11 rounded-full bg-[#281450] hover:bg-[#0A9678] text-white flex items-center justify-center transition-all duration-200 shadow-md hover:scale-105"
              aria-label={`Découvrir ${activeProject.title}`}
            >
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          )}
        </div>
      </div>

      {/* Tags de compétences associés au projet actif */}
      <div className="mt-14 flex flex-wrap items-center justify-center gap-2">
        {activeProject.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full bg-[#F5F5F7] border border-[#E5E7EB] text-xs font-medium text-gray-600 font-mono"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}
