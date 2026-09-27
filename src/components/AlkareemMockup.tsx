"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  Smartphone,
  ShoppingBag,
  CheckCircle2,
  Gauge,
  Globe,
  Store,
  Layers,
} from "lucide-react";

export default function AlkareemMockup() {
  const [activeTab, setActiveTab] = useState<"hero" | "produit" | "categorie">("hero");

  return (
    <div className="relative group flex flex-col justify-between p-6 sm:p-8 md:p-10 rounded-3xl bg-white border border-[#E5E7EB] hover:border-[#0A9678]/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-[#281450]/5 overflow-hidden text-[#281450]">
      {/* Overlay de dégradé au survol */}
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 bg-gradient-to-b from-white via-transparent to-[#0A9678]/5 pointer-events-none" />

      <div className="relative z-10 space-y-6">
        {/* Entête de carte : Nom du projet + Categorie */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 pb-5">
          <div>
            <span className="text-xs font-semibold font-mono text-[#0A9678] uppercase tracking-wider">
              Étude de cas · E-Commerce Haute Parfumerie
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#281450] font-poppins mt-0.5">
              Al Kareem Parfumerie
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 font-inter mt-1">
              Boutique physique à Cotonou (Bénin) &amp; Plateforme e-commerce mobile
            </p>
          </div>

          <a
            href="https://www.al-kareemparfurmerie.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-[#0A9678] text-xs font-semibold hover:bg-emerald-100 transition-colors self-start sm:self-auto"
          >
            <span className="w-2 h-2 rounded-full bg-[#0A9678] animate-pulse" />
            <span>Projet en ligne</span>
            <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
          </a>
        </div>

        {/* 1 & 2. Bandeaux "Avant" et "Après" */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Bandeau Avant */}
          <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-900 uppercase">
              <Store className="w-4 h-4 text-amber-700 shrink-0" />
              <span>Situation Avant</span>
            </div>
            <p className="text-xs sm:text-sm text-amber-950 font-inter leading-relaxed">
              Aucune présence en ligne — ventes uniquement en boutique physique à Cotonou et via WhatsApp.
            </p>
          </div>

          {/* Bandeau Après */}
          <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0A9678] uppercase">
              <CheckCircle2 className="w-4 h-4 text-[#0A9678] shrink-0" />
              <span>Situation Après</span>
            </div>
            <p className="text-xs sm:text-sm text-emerald-950 font-inter leading-relaxed">
              Site e-commerce complet en ligne, catalogue produits, commande directe via WhatsApp intégrée, score de performance vérifiable.
            </p>
          </div>
        </div>

        {/* 4. Visuel : Captures du site actuel (Hero, Page Produit, Page Catégorie) */}
        <div className="space-y-4 pt-2">
          {/* Sélecteur d'onglets pour les captures d'écran */}
          <div className="flex items-center justify-between flex-wrap gap-2 p-1.5 rounded-2xl bg-[#F5F5F7] border border-[#E5E7EB]">
            <div className="flex items-center gap-1 overflow-x-auto no-scrollbar w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setActiveTab("hero")}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 shrink-0 ${
                  activeTab === "hero"
                    ? "bg-[#281450] text-white shadow-sm"
                    : "text-gray-600 hover:text-[#281450] hover:bg-white/60"
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>1. Page d&apos;Accueil / Hero</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("produit")}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 shrink-0 ${
                  activeTab === "produit"
                    ? "bg-[#281450] text-white shadow-sm"
                    : "text-gray-600 hover:text-[#281450] hover:bg-white/60"
                }`}
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>2. Page Produit &amp; Panier</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("categorie")}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 shrink-0 ${
                  activeTab === "categorie"
                    ? "bg-[#281450] text-white shadow-sm"
                    : "text-gray-600 hover:text-[#281450] hover:bg-white/60"
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>3. Catalogue &amp; Catégorie</span>
              </button>
            </div>
          </div>

          {/* Zone d'affichage des captures d'écran */}
          <div className="rounded-2xl overflow-hidden bg-gradient-to-b from-[#1E0F3D] to-[#16082F] p-6 sm:p-8 text-white border border-[#E5E7EB]">
            {activeTab === "hero" && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-5 flex justify-center">
                  <div className="relative w-[240px] sm:w-[260px] rounded-[40px] p-2.5 bg-neutral-900 border-[3px] border-neutral-700 shadow-2xl">
                    <div className="relative rounded-[32px] overflow-hidden bg-white aspect-[9/19.5]">
                      <Image
                        src="/assets/alkareem/mobile-boutique-iphone16.png"
                        alt="Capture Page d'Accueil Mobile Al Kareem Parfumerie"
                        fill
                        sizes="260px"
                        className="object-cover object-top"
                        priority
                      />
                    </div>
                  </div>
                </div>
                <div className="md:col-span-7 space-y-3">
                  <span className="text-xs font-mono text-[#0fb894] uppercase tracking-wider font-semibold">
                    Visuel 1 — Page d&apos;Accueil &amp; Hero Mobile
                  </span>
                  <h4 className="text-xl font-bold font-poppins text-white">
                    Interface d&apos;accueil mobile épurée &amp; immersive
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-inter">
                    Présentation élégante de l&apos;univers de marque dès l&apos;ouverture, avec accès instantané aux collections de parfums et chargement rapide même sur connexion mobile.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "produit" && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-5 flex justify-center">
                  <div className="relative w-[240px] sm:w-[260px] rounded-[40px] p-2.5 bg-neutral-900 border-[3px] border-neutral-700 shadow-2xl">
                    <div className="relative rounded-[32px] overflow-hidden bg-white aspect-[9/19.5]">
                      <Image
                        src="/assets/alkareem/mobile-produit-sticky.jpg"
                        alt="Capture Fiche Produit Al Kareem Parfumerie"
                        fill
                        sizes="260px"
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
                <div className="md:col-span-7 space-y-3">
                  <span className="text-xs font-mono text-[#0fb894] uppercase tracking-wider font-semibold">
                    Visuel 2 — Page Produit &amp; Sticky Action Bar
                  </span>
                  <h4 className="text-xl font-bold font-poppins text-white">
                    Fiche produit claire &amp; validation de commande directe
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-inter">
                    Fiche détaillée avec visuel haute définition, sélecteur de quantité tactile et barre d&apos;action fixe en bas d&apos;écran pour commander directement vers WhatsApp.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "categorie" && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-5 flex justify-center">
                  <div className="relative w-[240px] sm:w-[260px] rounded-[40px] p-2.5 bg-neutral-900 border-[3px] border-neutral-700 shadow-2xl">
                    <div className="relative rounded-[32px] overflow-hidden bg-white aspect-[9/19.5]">
                      <Image
                        src="/assets/alkareem/catalogue.png"
                        alt="Capture Page Catégorie & Catalogue Al Kareem"
                        fill
                        sizes="260px"
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
                <div className="md:col-span-7 space-y-3">
                  <span className="text-xs font-mono text-[#0fb894] uppercase tracking-wider font-semibold">
                    Visuel 3 — Page Catégorie &amp; Grille Catalogue
                  </span>
                  <h4 className="text-xl font-bold font-poppins text-white">
                    Grille catalogue 2 colonnes ergonomique
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-inter">
                    Navigation fluide dans le catalogue multi-références avec filtres par famille olfactive et affichage responsive 2 colonnes sur smartphone.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 3. Liste du périmètre livré (Faits vérifiables uniquement) */}
        <div className="space-y-4 pt-2">
          <h4 className="text-base sm:text-lg font-bold text-[#281450] font-poppins flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#0A9678]" />
            <span>Périmètre technique &amp; fonctionnel livré</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Point 1 */}
            <div className="p-4 rounded-2xl bg-[#F5F5F7] border border-[#E5E7EB] flex items-start gap-3">
              <div className="w-7 h-7 rounded-lg bg-[#0A9678]/10 text-[#0A9678] flex items-center justify-center shrink-0 mt-0.5">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h5 className="text-xs sm:text-sm font-bold text-[#281450] font-poppins">
                  Site e-commerce complet
                </h5>
                <p className="text-xs text-gray-600 font-inter leading-relaxed">
                  Catalogue structuré, fiches produits détaillées avec visuels HD et gestion du panier d&apos;achat.
                </p>
              </div>
            </div>

            {/* Point 2 */}
            <div className="p-4 rounded-2xl bg-[#F5F5F7] border border-[#E5E7EB] flex items-start gap-3">
              <div className="w-7 h-7 rounded-lg bg-[#0A9678]/10 text-[#0A9678] flex items-center justify-center shrink-0 mt-0.5">
                <Smartphone className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h5 className="text-xs sm:text-sm font-bold text-[#281450] font-poppins">
                  Intégration commande WhatsApp en 1 clic
                </h5>
                <p className="text-xs text-gray-600 font-inter leading-relaxed">
                  Transformation automatique du panier en message pré-formaté prêt à envoyer au vendeur.
                </p>
              </div>
            </div>

            {/* Point 3 */}
            <div className="p-4 rounded-2xl bg-[#F5F5F7] border border-[#E5E7EB] flex items-start gap-3">
              <div className="w-7 h-7 rounded-lg bg-[#0A9678]/10 text-[#0A9678] flex items-center justify-center shrink-0 mt-0.5">
                <Gauge className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h5 className="text-xs sm:text-sm font-bold text-[#281450] font-poppins">
                  Score PageSpeed : 68 → 90+ mobile
                </h5>
                <p className="text-xs text-gray-600 font-inter leading-relaxed">
                  Gain de vitesse mesuré sur Google PageSpeed Insights.{" "}
                  <a
                    href="https://pagespeed.web.dev/analysis/?url=https://www.al-kareemparfurmerie.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0A9678] font-semibold underline underline-offset-2 hover:text-[#0fb894] inline-flex items-center gap-1"
                  >
                    Lien vers le rapport
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </p>
              </div>
            </div>

            {/* Point 4 */}
            <div className="p-4 rounded-2xl bg-[#F5F5F7] border border-[#E5E7EB] flex items-start gap-3">
              <div className="w-7 h-7 rounded-lg bg-[#0A9678]/10 text-[#0A9678] flex items-center justify-center shrink-0 mt-0.5">
                <Globe className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h5 className="text-xs sm:text-sm font-bold text-[#281450] font-poppins">
                  Design responsive optimisé mobile
                </h5>
                <p className="text-xs text-gray-600 font-inter leading-relaxed">
                  Ergonomie mobile-first pensée pour le réseau et les smartphones utilisés en Afrique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Boutons d'action en bas de carte */}
      <div className="relative z-10 pt-6 mt-6 border-t border-gray-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <a
          href="https://www.al-kareemparfurmerie.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0A9678] hover:bg-[#0fb894] text-white text-xs sm:text-sm font-bold transition-all duration-200 shadow-md shadow-[#0A9678]/20 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98]"
        >
          <Globe className="w-4 h-4" />
          <span>Voir le site en direct</span>
          <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
        </a>

        <a
          href="https://pagespeed.web.dev/analysis/?url=https://www.al-kareemparfurmerie.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#F5F5F7] hover:bg-[#E5E7EB] text-[#281450] text-xs sm:text-sm font-semibold transition-all duration-200 border border-[#E5E7EB]"
        >
          <Gauge className="w-4 h-4 text-[#0A9678]" />
          <span>Vérifier le rapport Google PageSpeed</span>
          <ExternalLink className="w-3.5 h-3.5 ml-0.5 opacity-70" />
        </a>
      </div>
    </div>
  );
}
