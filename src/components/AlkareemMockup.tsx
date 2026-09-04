"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  Smartphone,
  Store,
  Zap,
  ShoppingBag,
  ShieldCheck,
  CheckCircle2,
  Lock,
} from "lucide-react";

export default function AlkareemMockup() {
  const [activeTab, setActiveTab] = useState<"boutique" | "produit" | "physique">("boutique");

  return (
    <div className="w-full space-y-6">
      {/* Sélecteur d'angle de vue immersif */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white/5 p-2 rounded-2xl border border-white/10 backdrop-blur-md">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={() => setActiveTab("boutique")}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
              activeTab === "boutique"
                ? "bg-[#0A9678] text-white shadow-md shadow-[#0A9678]/30 font-semibold"
                : "text-gray-300 hover:text-white hover:bg-white/5"
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span>Catalogue Mobile 2 colonnes</span>
          </button>

          <button
            onClick={() => setActiveTab("produit")}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
              activeTab === "produit"
                ? "bg-[#0A9678] text-white shadow-md shadow-[#0A9678]/30 font-semibold"
                : "text-gray-300 hover:text-white hover:bg-white/5"
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Fiche Produit & Sticky CTA</span>
          </button>

          <button
            onClick={() => setActiveTab("physique")}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
              activeTab === "physique"
                ? "bg-[#0A9678] text-white shadow-md shadow-[#0A9678]/30 font-semibold"
                : "text-gray-300 hover:text-white hover:bg-white/5"
            }`}
          >
            <Store className="w-4 h-4" />
            <span>Boutique Physique Cotonou</span>
          </button>
        </div>

        <a
          href="https://al-kareem-parfurmerie.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/15 text-white transition-all border border-white/15 group"
        >
          <span>Visiter le site en production</span>
          <ExternalLink className="w-3.5 h-3.5 text-[#0fb894] group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>

      {/* Cadre de présentation principal avec simulation d'appareil réel */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#1E0F3D] to-[#16082F] border border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] p-4 sm:p-8 lg:p-10">
        
        {/* Vue 1 : Catalogue Mobile iPhone 16 Pro */}
        {activeTab === "boutique" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Mockup iPhone physique */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-[280px] sm:w-[320px] rounded-[48px] p-3 bg-neutral-900 shadow-[0_0_50px_rgba(10,150,120,0.25)] border-[4px] border-neutral-700/80">
                {/* Dynamic Island */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30 flex items-center justify-end px-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#111] border border-neutral-800" />
                </div>

                {/* Écran avec capture réelle */}
                <div className="relative rounded-[38px] overflow-hidden bg-white aspect-[9/19.5] border border-neutral-800">
                  <Image
                    src="/assets/alkareem/mobile-boutique-iphone16.png"
                    alt="Catalogue Mobile Al Kareem Parfumerie"
                    fill
                    sizes="(max-width: 768px) 280px, 320px"
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Explications techniques et KPI */}
            <div className="lg:col-span-6 space-y-6 text-white">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A9678]/20 text-[#0fb894] text-xs font-mono font-medium border border-[#0A9678]/40">
                <Zap className="w-3.5 h-3.5" />
                <span>Responsive Haute Définition</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-poppins text-white leading-tight">
                Catalogue e-commerce 2 colonnes ultra-optimisé
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed font-inter">
                Conception sur-mesure d’une grille tactile fluide pour smartphones. Élimination des
                pages à défilement infini lourd au profit d’un affichage double colonne compact,
                permettant d’explorer plus de 500 références sans latence sur réseaux mobiles 3G/4G.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-2xl font-extrabold text-[#0fb894] font-poppins">-75%</div>
                  <div className="text-xs text-gray-300 mt-0.5">TTFB réduit de 3-6s à ~1s sur réseau 3G</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-2xl font-extrabold text-white font-poppins">2 Colonnes</div>
                  <div className="text-xs text-gray-300 mt-0.5">Densité d'information optimisée</div>
                </div>
              </div>

              <ul className="space-y-2.5 text-xs text-gray-300 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0A9678] shrink-0" />
                  <span>Prise en charge native de la Dynamic Island et des zones sécurisées iOS</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0A9678] shrink-0" />
                  <span>Ruban de filtres par fragrance scrollable au doigt sans rechargement</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Vue 2 : Fiche Produit & Sticky Action Bar */}
        {activeTab === "produit" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Mockup iPhone physique */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-[280px] sm:w-[320px] rounded-[48px] p-3 bg-neutral-900 shadow-[0_0_50px_rgba(10,150,120,0.25)] border-[4px] border-neutral-700/80">
                {/* Dynamic Island */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30 flex items-center justify-end px-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#111] border border-neutral-800" />
                </div>

                {/* Écran avec capture réelle */}
                <div className="relative rounded-[38px] overflow-hidden bg-white aspect-[9/19.5] border border-neutral-800">
                  <Image
                    src="/assets/alkareem/mobile-produit-sticky.jpg"
                    alt="Fiche Produit Mobile Al Kareem Parfumerie"
                    fill
                    sizes="(max-width: 768px) 280px, 320px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* Explications techniques et KPI */}
            <div className="lg:col-span-6 space-y-6 text-white">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A9678]/20 text-[#0fb894] text-xs font-mono font-medium border border-[#0A9678]/40">
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Conversion Maximale</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-poppins text-white leading-tight">
                Fiche produit avec Sticky Action Bar
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed font-inter">
                Cadrage chirurgical de l’image pour remonter le titre et le tarif au-dessus de la
                ligne de flottaison. Barre fixe en bas d'écran avec total dynamique et bouton
                direct de commande WhatsApp pré-remplie.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-2xl font-extrabold text-[#0fb894] font-poppins">-42%</div>
                  <div className="text-xs text-gray-300 mt-0.5">Taux de rebond immédiat</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-2xl font-extrabold text-white font-poppins">2 Clics</div>
                  <div className="text-xs text-gray-300 mt-0.5">Parcours d’achat WhatsApp</div>
                </div>
              </div>

              <ul className="space-y-2.5 text-xs text-gray-300 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0A9678] shrink-0" />
                  <span>Calculateur de quantité réactif en millisecondes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0A9678] shrink-0" />
                  <span>Génération de message formaté pour le vendeur WhatsApp</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Vue 3 : Boutique Physique & Identité */}
        {activeTab === "physique" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Mockup fenêtre navigateur Mac OS avec la photo réelle */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl overflow-hidden bg-neutral-900 border border-white/20 shadow-2xl">
                {/* Barre Mac OS */}
                <div className="px-4 py-3 bg-neutral-800/90 border-b border-white/10 flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="flex-1 max-w-sm mx-auto bg-neutral-900/90 px-3 py-1 rounded-md text-[11px] text-gray-300 font-mono flex items-center justify-center gap-1.5 border border-white/10">
                    <Lock className="w-3 h-3 text-[#0fb894]" />
                    <span>al-kareem-parfurmerie.vercel.app/a-propos</span>
                  </div>
                </div>

                {/* Vraie photo boutique */}
                <div className="relative aspect-[16/10] w-full bg-neutral-950">
                  <Image
                    src="/assets/alkareem/boutique-physique.jpg"
                    alt="Boutique Physique Al Kareem Parfumerie Cotonou"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                    <div className="text-white space-y-1">
                      <div className="text-xs font-mono uppercase tracking-widest text-[#0fb894]">
                        Point de vente officiel
                      </div>
                      <div className="text-lg font-bold font-poppins">
                        Boutique Al Kareem — Cotonou, Bénin
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Explications */}
            <div className="lg:col-span-5 space-y-6 text-white">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A9678]/20 text-[#0fb894] text-xs font-mono font-medium border border-[#0A9678]/40">
                <Store className="w-3.5 h-3.5" />
                <span>Commerce Phygital</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-poppins text-white leading-tight">
                Une transition digitale fidèle au prestige du lieu
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed font-inter">
                La plateforme numérique ne remplace pas l'expérience sensorielle de la boutique de
                Cotonou : elle la prolonge en permettant aux clients réguliers de renouveler leurs
                parfums en quelques secondes depuis leur smartphone.
              </p>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="text-xs text-gray-400 uppercase font-mono">Architecture technique</div>
                <div className="text-sm text-white font-semibold">
                  TanStack Start • React 19 • Tailwind CSS • Supabase • Cloudflare CDN
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Barre de badges de réassurance et métriques réelles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
          <div className="text-xl sm:text-2xl font-extrabold text-[#0fb894] font-poppins">-75%</div>
          <div className="text-xs text-gray-300 mt-1">TTFB réduit de 3-6s à ~1s sur réseau 3G</div>
        </div>
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
          <div className="text-xl sm:text-2xl font-extrabold text-white font-poppins">500+</div>
          <div className="text-xs text-gray-300 mt-1">Parfums gérés en temps réel</div>
        </div>
      </div>
    </div>
  );
}
