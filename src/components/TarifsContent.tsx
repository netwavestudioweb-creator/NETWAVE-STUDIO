"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Zap,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Euro,
  TrendingUp,
  Crown,
  Flame,
  Check,
  RefreshCw,
  Gift,
  Clock,
  CheckCircle,
  Rocket,
} from "lucide-react";
import ComparisonMatrix from "@/components/ComparisonMatrix";

export default function TarifsContent() {
  const [selectedPack, setSelectedPack] = useState<"starter" | "scale" | "enterprise">("scale");

  const PACKS = {
    starter: {
      name: "Kickstart Essential",
      badge: "ENTRÉE DE GAMME — DÉMARRAGE RAPIDE",
      tagline: "L'essentiel professionnel pour poser votre présence numérique au tarif le plus accessible.",
      anchorEur: 320,
      priceEur: 149,
      installmentEur: "49 € / mois x 3",
      icon: Zap,
      features: [
        "Site Vitrine Ultra-Rapide (1 à 3 pages optimisées)",
        "Design Responsive Mobile First & UX Soignée",
        "Formulaire de Contact & Intégration WhatsApp Direct",
        "Hébergement Haute Vitesse & SSL Sécurisé inclus (1 an)",
        "Référencement Google SEO de base (méta-tags & indexation)",
        "Conformité Accessibilité WCAG & Temps de charge < 1.2s",
      ],
      bonuses: [
        "Hébergement & Certificat SSL Sécurisé (Valeur 60 €)",
        "Guide vidéo d'optimisation de visibilité locale",
      ],
    },
    scale: {
      name: "Business Scale & Automation",
      badge: "FORMULE LA PLUS POPULAIRE (84% DES CLIENTS)",
      tagline: "L'architecture complète pour automatiser votre activité : site complet, Mobile Money et Assistant IA.",
      anchorEur: 1150,
      priceEur: 449,
      installmentEur: "149 € / mois x 3 sans frais",
      icon: Flame,
      features: [
        "Tout le périmètre du Pack Kickstart Essential inclus",
        "Site Web complet Multi-pages OU Boutique E-Commerce",
        "Paiement Mobile Money automatique & Carte Bancaire",
        "Assistant IA WhatsApp / Bot Commercial 24/7 (RDV & FAQ)",
        "Tableau de bord Admin complet (gestion stock, commandes & leads)",
        "SEO Avancé & Indexation accélérée sur les moteurs de recherche",
        "Intégration d'outils marketing & relance prospects automatique",
      ],
      bonuses: [
        "Bonus 1 : Branding Kit Express (Logo & Charte graphique - Valeur 70 €)",
        "Bonus 2 : Formation vidéo complète à la prise en main (Valeur 80 €)",
        "Bonus 3 : 30 jours de Maintenance & Assistance Prioritaire (Valeur 90 €)",
      ],
    },
    enterprise: {
      name: "Enterprise Domination 360°",
      badge: "OFFRE SUR-MESURE & HAUTE PERFORMANCE",
      tagline: "Une infrastructure numérique d'élite conçue sur-mesure pour les entreprises exigeantes.",
      anchorEur: 2700,
      priceEur: 990,
      installmentEur: "330 € / mois x 3",
      icon: Crown,
      features: [
        "Tout le périmètre du Pack Business Scale inclus",
        "Application Métier Sur-Mesure OU E-Commerce Illimité",
        "Infrastructure Réseau & Sécurité Télécoms (Audit, Câblage & VoIP)",
        "Agent IA Custom Fine-Tuné sur vos documents d'entreprise",
        "Design UI/UX 100% Sur-Mesure avec prototypes interactifs",
        "Chef de Projet Dédié & Suivi d'avancement hebdomadaire",
        "1 An complet de Maintenance VIP H24/7j avec SLA garanti < 2h",
      ],
      bonuses: [
        "Bonus 1 : Audit complet de Cybersécurité & Réseau (Valeur 230 €)",
        "Bonus 2 : Configuration campagnes Ads Google & Meta (Valeur 120 €)",
        "Bonus 3 : Ligne directe prioritaire avec l'ingénieur référent",
      ],
    },
  };

  const formatPriceDisplay = (eur: number) => {
    return `${eur.toLocaleString("fr-FR")} €`;
  };

  return (
    <div className="w-full bg-white font-inter text-[#281450]">
      {/* 1. HERO SECTION AVEC TARIFS STRICTEMENT EN EURO € */}
      <section className="bg-gradient-to-b from-[#1E0F3D] via-[#281450] to-[#170933] text-white py-16 md:py-24 border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#0A9678]/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs font-mono font-bold text-[#0fb894] uppercase tracking-wider shadow-inner">
            <Sparkles className="w-4 h-4 text-[#0fb894]" />
            <span>TRANSPARENCE TARIFAIRE &amp; INGÉNIERIE SUR-MESURE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-poppins tracking-tight text-white leading-tight max-w-4xl mx-auto">
            Des Formules Transparentes Conçues Pour <span className="text-[#0fb894] underline decoration-[#0fb894]/40 underline-offset-8">Accélérer Vos Ventes</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-inter">
            Choisissez l&apos;offre adaptée à vos objectifs. Tous nos tarifs sont présentés exclusivement en <strong className="text-white">Euro (€)</strong>, sans aucun coût masqué.
          </p>

          {/* Badge Devise Euro Fixe */}
          <div className="pt-2 flex items-center justify-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md text-xs font-mono font-bold text-[#0fb894]">
              <Euro className="w-4 h-4 text-[#0fb894]" />
              <span>Facturation &amp; Tarifs en Euro (€)</span>
            </div>
          </div>

          {/* Badges de Garanties & Paiement en 3X */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-gray-300">
            <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10">
              <ShieldCheck className="w-4 h-4 text-[#0fb894]" />
              <span>Garantie Satisfait ou Ajusté 30j</span>
            </span>
            <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10">
              <RefreshCw className="w-4 h-4 text-[#0fb894]" />
              <span>Paiement en 3 mensualités sans frais (dès 49 € / mois)</span>
            </span>
            <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10">
              <Zap className="w-4 h-4 text-[#0fb894]" />
              <span>Devis net &amp; Facturation en Euro (€)</span>
            </span>
          </div>
        </div>
      </section>

      {/* 2. SECTION RECOMMANDATION STRATÉGIQUE DU STUDIO */}
      <section className="bg-[#F5F5F7] border-b border-[#E5E7EB] py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 rounded-2xl border border-[#0A9678]/30 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#0A9678]/10 text-[#0A9678] flex items-center justify-center shrink-0">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div className="space-y-1 text-left">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0A9678] bg-[#0A9678]/10 px-2.5 py-0.5 rounded-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#0A9678]" />
                    <span>RECOMMANDATION DU STUDIO</span>
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#281450] font-poppins">
                  Pourquoi la formule Business Scale &amp; Automation est la plus sollicitée ?
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 font-inter max-w-2xl leading-relaxed">
                  Elle intègre l&apos;ensemble des composants essentiels pour automatiser vos ventes : <strong className="text-[#281450]">site complet, paiement automatisé, assistant IA WhatsApp 24/7</strong> et un accompagnement technique dédié pour <strong className="text-[#0A9678]">449 €</strong>.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setSelectedPack("scale")}
              className="px-6 py-3 rounded-xl bg-[#0A9678] hover:bg-[#0fb894] text-white font-bold text-xs uppercase tracking-wider font-mono shadow-md transition-all shrink-0 active:scale-95 flex items-center gap-2"
            >
              <CheckCircle className="w-4 h-4" />
              <span>Sélectionner la Formule Principale (449 €)</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. LES 3 PACKS PRINCIPAUX EN EURO (€) */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0A9678]">
            GRILLE TARIFAIRE OFFICIELLE (EN EURO €)
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-[#281450]">
            Sélectionnez la Formule Adaptée à Votre Entreprise
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
            Des livrables clairs, aucun coût caché et un accompagnement personnalisé.
          </p>
        </div>

        {/* Grille des 3 Cartes de Tarif */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* PACK 1: KICKSTART ESSENTIAL */}
          <div
            onClick={() => setSelectedPack("starter")}
            className={`rounded-3xl p-6 sm:p-8 bg-white border transition-all duration-300 flex flex-col justify-between cursor-pointer relative ${
              selectedPack === "starter"
                ? "border-[#0A9678] ring-4 ring-[#0A9678]/15 shadow-xl scale-[1.01]"
                : "border-[#E5E7EB] shadow-sm hover:border-gray-300 hover:shadow-md"
            }`}
          >
            <div className="space-y-6 text-left">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-[#0A9678] bg-[#0A9678]/10 px-3 py-1 rounded-full">
                  <Zap className="w-3.5 h-3.5 text-[#0A9678]" />
                  <span>{PACKS.starter.badge}</span>
                </span>
                <h3 className="text-2xl font-bold font-poppins text-[#281450]">
                  {PACKS.starter.name}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-inter">
                  {PACKS.starter.tagline}
                </p>
              </div>

              {/* Prix & Ancrage Tarifaire */}
              <div className="p-4 rounded-2xl bg-[#F5F5F7] border border-[#E5E7EB] space-y-1">
                <div className="flex items-center justify-between text-xs text-gray-500 font-mono">
                  <span>Tarif de référence :</span>
                  <span className="line-through text-red-400 font-bold">
                    {formatPriceDisplay(PACKS.starter.anchorEur)}
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#281450] font-poppins">
                    {formatPriceDisplay(PACKS.starter.priceEur)}
                  </span>
                  <span className="text-xs text-[#0A9678] font-bold font-mono uppercase bg-[#0A9678]/10 px-2 py-0.5 rounded">
                    -55% REMISE
                  </span>
                </div>
                <div className="text-[11px] font-mono text-[#0A9678] font-semibold pt-1 border-t border-gray-200">
                  Option échelonnée : {PACKS.starter.installmentEur}
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-500 block">
                  Éléments inclus dans le livrable :
                </span>
                <ul className="space-y-2.5 text-xs text-gray-700 font-inter">
                  {PACKS.starter.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0A9678] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bonus List Vectorielle */}
              <div className="p-3.5 rounded-xl bg-[#0A9678]/5 border border-[#0A9678]/20 space-y-2">
                <span className="text-[11px] font-mono font-bold text-[#0A9678] uppercase flex items-center gap-1.5">
                  <Gift className="w-3.5 h-3.5 text-[#0A9678]" />
                  <span>Bonus Inclus</span>
                </span>
                <ul className="space-y-1.5 text-[11px] text-gray-600 font-inter">
                  {PACKS.starter.bonuses.map((b, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <Check className="w-3 h-3 text-[#0A9678] shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6 border-t border-gray-100 mt-6">
              <a
                href={`https://wa.me/2290150884670?text=${encodeURIComponent(
                  `Bonjour NetWave Studio ! Je souhaite commander la formule ${PACKS.starter.name} (${formatPriceDisplay(
                    PACKS.starter.priceEur
                  )}).`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl font-bold text-xs font-mono uppercase tracking-wider transition-all shadow-sm ${
                  selectedPack === "starter"
                    ? "bg-[#281450] text-white hover:bg-[#0A9678]"
                    : "bg-gray-100 text-[#281450] hover:bg-[#281450] hover:text-white"
                }`}
              >
                <span>Choisir cette formule</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* PACK 2: BUSINESS SCALE & AUTOMATION (FORMULE POPULAIRE) */}
          <div
            onClick={() => setSelectedPack("scale")}
            className={`rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-white via-emerald-50/20 to-white border-2 transition-all duration-300 flex flex-col justify-between cursor-pointer relative ${
              selectedPack === "scale"
                ? "border-[#0A9678] ring-4 ring-[#0A9678]/25 shadow-2xl scale-[1.03] z-20"
                : "border-[#0A9678]/50 shadow-lg hover:border-[#0A9678]"
            }`}
          >
            {/* Top Ribbon Badge Vectoriel */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0A9678] text-white text-[11px] font-mono font-extrabold uppercase px-4 py-1 rounded-full shadow-md tracking-wider flex items-center gap-1.5 whitespace-nowrap">
              <Flame className="w-3.5 h-3.5 text-amber-300" />
              <span>CHOIX RECOMMANDÉ (84% DES PROJETS)</span>
            </div>

            <div className="space-y-6 text-left pt-2">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-[#0A9678] bg-[#0A9678]/15 px-3 py-1 rounded-full border border-[#0A9678]/30">
                  <Sparkles className="w-3.5 h-3.5 text-[#0A9678]" />
                  <span>{PACKS.scale.badge}</span>
                </span>
                <h3 className="text-2xl font-bold font-poppins text-[#281450]">
                  {PACKS.scale.name}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-inter">
                  {PACKS.scale.tagline}
                </p>
              </div>

              {/* Prix & Ancrage Tarifaire */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-[#281450] to-[#1E0F3D] text-white space-y-1 shadow-md">
                <div className="flex items-center justify-between text-xs text-gray-300 font-mono">
                  <span>Valeur estimée des modules :</span>
                  <span className="line-through text-red-300 font-bold">
                    {formatPriceDisplay(PACKS.scale.anchorEur)}
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#0fb894] font-poppins">
                    {formatPriceDisplay(PACKS.scale.priceEur)}
                  </span>
                  <span className="text-xs text-amber-300 font-bold font-mono uppercase bg-amber-400/20 px-2 py-0.5 rounded border border-amber-300/30">
                    -60% REMISE
                  </span>
                </div>
                <div className="text-[11px] font-mono text-gray-200 font-semibold pt-1 border-t border-white/10">
                  Ou paiement échelonné : <strong className="text-[#0fb894]">{PACKS.scale.installmentEur}</strong>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A9678] block">
                  Tout du Pack Essential + ces fonctionnalités :
                </span>
                <ul className="space-y-2.5 text-xs text-gray-800 font-inter font-medium">
                  {PACKS.scale.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0A9678] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bonus Stacking Vectoriel */}
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-2">
                <span className="text-xs font-mono font-bold text-amber-800 uppercase flex items-center gap-1.5">
                  <Gift className="w-4 h-4 text-amber-600" />
                  <span>3 BONUS AVANTAGES INCLUS</span>
                </span>
                <ul className="space-y-1.5 text-xs text-amber-900 font-inter font-medium">
                  {PACKS.scale.bonuses.map((b, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6 border-t border-gray-100 mt-6">
              <a
                href={`https://wa.me/2290150884670?text=${encodeURIComponent(
                  `Bonjour NetWave Studio ! Je choisis la formule principale ${PACKS.scale.name} (${formatPriceDisplay(
                    PACKS.scale.priceEur
                  )}).`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-4 rounded-2xl bg-[#0A9678] hover:bg-[#0fb894] text-white font-extrabold text-xs font-mono uppercase tracking-wider transition-all shadow-lg shadow-[#0A9678]/30 active:scale-95"
              >
                <Rocket className="w-4 h-4 text-white shrink-0" />
                <span>Choisir la Formule Principale</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* PACK 3: ENTERPRISE DOMINATION 360° */}
          <div
            onClick={() => setSelectedPack("enterprise")}
            className={`rounded-3xl p-6 sm:p-8 bg-white border transition-all duration-300 flex flex-col justify-between cursor-pointer relative ${
              selectedPack === "enterprise"
                ? "border-[#281450] ring-4 ring-[#281450]/20 shadow-xl scale-[1.01]"
                : "border-[#E5E7EB] shadow-sm hover:border-gray-300 hover:shadow-md"
            }`}
          >
            <div className="space-y-6 text-left">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-[#281450] bg-[#281450]/10 px-3 py-1 rounded-full">
                  <Crown className="w-3.5 h-3.5 text-[#281450]" />
                  <span>{PACKS.enterprise.badge}</span>
                </span>
                <h3 className="text-2xl font-bold font-poppins text-[#281450]">
                  {PACKS.enterprise.name}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-inter">
                  {PACKS.enterprise.tagline}
                </p>
              </div>

              {/* Prix & Ancrage Tarifaire */}
              <div className="p-4 rounded-2xl bg-[#F5F5F7] border border-[#E5E7EB] space-y-1">
                <div className="flex items-center justify-between text-xs text-gray-500 font-mono">
                  <span>Valeur Ingénierie Globale :</span>
                  <span className="line-through text-red-400 font-bold">
                    {formatPriceDisplay(PACKS.enterprise.anchorEur)}
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#281450] font-poppins">
                    {formatPriceDisplay(PACKS.enterprise.priceEur)}
                  </span>
                  <span className="text-xs text-[#281450] font-bold font-mono uppercase bg-[#281450]/10 px-2 py-0.5 rounded">
                    SUR-MESURE
                  </span>
                </div>
                <div className="text-[11px] font-mono text-[#281450] font-semibold pt-1 border-t border-gray-200">
                  Option échelonnée : {PACKS.enterprise.installmentEur}
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-500 block">
                  Périmètre d&apos;ingénierie intégrale :
                </span>
                <ul className="space-y-2.5 text-xs text-gray-700 font-inter">
                  {PACKS.enterprise.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#281450] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bonus Vectoriel */}
              <div className="p-3.5 rounded-xl bg-[#281450]/5 border border-[#281450]/20 space-y-2">
                <span className="text-[11px] font-mono font-bold text-[#281450] uppercase flex items-center gap-1.5">
                  <Gift className="w-3.5 h-3.5 text-[#281450]" />
                  <span>Accompagnement VIP Inclus</span>
                </span>
                <ul className="space-y-1.5 text-[11px] text-gray-600 font-inter">
                  {PACKS.enterprise.bonuses.map((b, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <Check className="w-3 h-3 text-[#281450] shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6 border-t border-gray-100 mt-6">
              <a
                href={`https://wa.me/2290150884670?text=${encodeURIComponent(
                  `Bonjour NetWave Studio ! Je souhaite échanger sur la formule ${PACKS.enterprise.name} (${formatPriceDisplay(
                    PACKS.enterprise.priceEur
                  )}).`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl font-bold text-xs font-mono uppercase tracking-wider transition-all shadow-sm ${
                  selectedPack === "enterprise"
                    ? "bg-[#281450] text-white hover:bg-[#0A9678]"
                    : "bg-gray-100 text-[#281450] hover:bg-[#281450] hover:text-white"
                }`}
              >
                <span>Démarrer l&apos;Offre Enterprise</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION PROTOTYPAGE & FLEXIBILITÉ DE PAIEMENT */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-emerald-900/10 via-[#0A9678]/10 to-emerald-900/10 p-6 sm:p-10 border border-[#0A9678]/30 space-y-6 text-left">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#0A9678] bg-white px-3 py-1 rounded-full border border-[#0A9678]/30">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0A9678]" />
                <span>FORMULE D&apos;ÉVALUATION &amp; FLEXIBILITÉ</span>
              </span>
              <h3 className="text-xl sm:text-3xl font-extrabold font-poppins text-[#281450]">
                Besoin de valider un prototype ou d&apos;un paiement échelonné ?
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-inter">
                Nous proposons le <strong className="text-[#281450]">Paiement Échelonné en 3 mensualités sans aucun frais</strong> sur l&apos;ensemble de nos packs, ainsi qu&apos;une formule d&apos;évaluation <strong className="text-[#281450]">Audit UX/SEO &amp; Prototype Landing MVP</strong>.
              </p>
            </div>

            {/* Carte Formule d'évaluation */}
            <div className="bg-white p-5 rounded-2xl border border-[#0A9678]/40 shadow-md shrink-0 sm:min-w-[280px] space-y-3">
              <div className="text-[10px] font-mono font-bold uppercase text-[#0A9678] flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#0A9678]" />
                <span>LIVRAISON EN 24H CHRONO</span>
              </div>
              <div className="text-lg font-bold font-poppins text-[#281450]">
                Audit UX/SEO &amp; Prototype MVP
              </div>
              <div className="text-2xl font-extrabold text-[#0A9678] font-poppins">
                {formatPriceDisplay(75)}
              </div>
              <p className="text-[11px] text-gray-500 font-inter">
                Diagnostic de performance &amp; maquette fonctionnelle.
              </p>
              <a
                href={`https://wa.me/2290150884670?text=${encodeURIComponent(
                  `Bonjour NetWave Studio ! Je souhaite bénéficier de la Formule Audit UX/SEO & Prototype MVP (${formatPriceDisplay(
                    75
                  )}).`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#281450] hover:bg-[#0A9678] text-white font-bold text-xs font-mono uppercase tracking-wider transition-all"
              >
                <span>Profiter de cette option</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MATRICE DE COMPARAISON */}
      <section className="py-16 bg-[#F5F5F7] border-t border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ComparisonMatrix />
        </div>
      </section>

      {/* 6. CTA FINAL DE PAGE */}
      <section className="bg-gradient-to-r from-[#1E0F3D] via-[#281450] to-[#0B0318] text-white py-16 md:py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-mono text-[#0fb894] border border-white/15">
            <ShieldCheck className="w-4 h-4 text-[#0fb894]" />
            <span>RÉPONSE DÉTAILLÉE SOUS 24 HEURES MAXIMUM</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold font-poppins text-white">
            Concrétisez Votre Projet Numérique Dès Aujourd&apos;hui
          </h2>

          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Échangez directement avec un ingénieur référent NetWave Studio pour préciser votre besoin et réserver votre créneau d&apos;ingénierie.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href={`https://wa.me/2290150884670?text=${encodeURIComponent(
                "Bonjour NetWave Studio ! Je souhaite obtenir un devis personnalisé pour mon projet numérique."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-xs sm:text-sm font-mono uppercase tracking-wider transition-all shadow-lg active:scale-95 w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Discuter avec un conseiller sur WhatsApp</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#0A9678] hover:bg-[#0fb894] text-white font-extrabold text-xs sm:text-sm font-mono uppercase tracking-wider transition-all shadow-lg active:scale-95 w-full sm:w-auto"
            >
              <span>Demander un devis par formulaire</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
