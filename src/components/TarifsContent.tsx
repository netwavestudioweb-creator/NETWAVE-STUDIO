"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShoppingCart,
  LayoutDashboard,
  Network,
  MessageSquareCode,
  ArrowRight,
  CheckCircle2,
  Sliders,
  Layers,
  Palette,
  CreditCard,
  FileText,
  Clock,
  Globe,
  DollarSign,
  ShieldCheck,
} from "lucide-react";
import ProjectEstimator from "@/components/ProjectEstimator";

export default function TarifsContent() {
  const [currency, setCurrency] = useState<"FCFA" | "USD">("FCFA");

  const isUsd = currency === "USD";

  return (
    <div className="w-full bg-white font-inter">
      {/* 1. HERO / EN-TÊTE AVEC SÉLECTEUR DE DEVISE */}
      <section className="bg-[#F5F5F7] py-16 md:py-24 border-b border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-semibold text-[#0A9678] tracking-widest uppercase font-mono">
            GRILLE &amp; MODALITÉS TARIFAIRES
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#281450] font-poppins tracking-tight">
            Des tarifs lisibles, adaptés à vos projets
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Un tarif de base clair (dès {isUsd ? "165 $" : "100 000 FCFA"}) et une estimation transparente pour vos projets numériques.
            Pas de grille figée, pas de mauvaise surprise.
          </p>

          {/* Toggle Sélecteur de Devise (FCFA / USD) */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-500">
              Sélectionner votre devise :
            </span>
            <div className="inline-flex items-center p-1.5 rounded-full bg-white border border-[#E5E7EB] shadow-sm">
              <button
                type="button"
                onClick={() => setCurrency("FCFA")}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-bold transition-all duration-200 ${
                  !isUsd
                    ? "bg-[#281450] text-white shadow-sm"
                    : "text-gray-600 hover:text-[#281450] hover:bg-gray-100"
                }`}
              >
                <Globe className="w-3.5 h-3.5 text-[#0A9678]" />
                <span>🌍 FCFA (Afrique / Local)</span>
              </button>

              <button
                type="button"
                onClick={() => setCurrency("USD")}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-bold transition-all duration-200 ${
                  isUsd
                    ? "bg-[#281450] text-white shadow-sm"
                    : "text-gray-600 hover:text-[#281450] hover:bg-gray-100"
                }`}
              >
                <DollarSign className="w-3.5 h-3.5 text-[#0fb894]" />
                <span>🇺🇸 USD $ (International)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 1.B ESTIMATEUR ET SIMULATEUR DE DEVIS */}
      <section className="py-12 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-center space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#0A9678] font-mono">
              Calculateur en direct
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-poppins text-[#281450]">
              Simulez votre budget &amp; votre délai de réalisation
            </h2>
          </div>

          <ProjectEstimator selectedCurrency={currency} />

          {/* Badge de garantie Accessibilité WCAG */}
          <div className="max-w-3xl mx-auto mt-8 p-4 sm:p-5 rounded-2xl bg-[#F5F5F7] border border-[#0A9678]/30 shadow-xs flex items-center gap-3.5 text-xs sm:text-sm text-[#281450]">
            <div className="w-9 h-9 rounded-xl bg-[#0A9678]/10 text-[#0A9678] flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5 text-[#0A9678]" />
            </div>
            <p className="font-medium leading-relaxed">
              <strong className="font-bold text-[#281450]">Accessibilité incluse dans chaque livraison :</strong>{" "}
              contraste conforme WCAG, navigation clavier complète, textes alternatifs sur toutes les images.
            </p>
          </div>
        </div>
      </section>

      {/* 2. LES 4 SERVICES ET LEURS PALIERS */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Service 1 : Développement Web & E-commerce */}
          <div className="rounded-2xl p-6 sm:p-8 bg-white border border-[#E5E7EB] shadow-sm hover:border-[#0A9678]/40 transition-colors flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#0A9678]/10 text-[#0A9678] flex items-center justify-center shrink-0">
                  <ShoppingCart className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#281450] font-poppins">
                    Développement Web &amp; E-commerce
                  </h2>
                  <p className="text-xs text-gray-500">
                    Sites vitrines, plateformes sur mesure et boutiques en ligne
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {/* Entrée de gamme : mis en valeur */}
                <div className="rounded-xl border-2 border-[#0A9678]/30 bg-[#0A9678]/[0.03] p-5">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div className="space-y-1">
                      <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#0A9678] font-mono px-2 py-0.5 rounded bg-[#0A9678]/10">
                        TARIF D&apos;ENTRÉE DE GAMME
                      </span>
                      <h3 className="text-base font-semibold text-[#281450]">
                        Site vitrine essentiel
                      </h3>
                      <p className="text-xs text-gray-600">
                        1 à 3 pages, template adapté à votre identité.
                      </p>
                    </div>
                    <div className="sm:text-right shrink-0">
                      <div className="text-[11px] text-gray-500 uppercase font-medium">
                        À partir de
                      </div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#0A9678] font-poppins">
                        {isUsd ? (
                          <>165 <span className="text-sm font-semibold text-gray-700">$</span></>
                        ) : (
                          <>100 000 <span className="text-sm font-semibold text-gray-700">FCFA</span></>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Complexe : Fourchette chiffrée */}
                <div className="rounded-xl border border-[#E5E7EB] bg-gray-50/70 p-5">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div className="space-y-1">
                      <h3 className="text-sm font-semibold text-[#281450]">
                        Projet complet &amp; E-commerce
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Site vitrine complet multi-pages, design sur-mesure ou boutique e-commerce avec paiement intégré.
                      </p>
                    </div>
                    <div className="shrink-0 sm:text-right">
                      <div className="text-[11px] text-gray-500 uppercase font-medium">
                        Fourchette indicative
                      </div>
                      <div className="text-lg font-bold text-[#281450] font-poppins bg-white px-3 py-1 rounded-lg border border-gray-200 shadow-xs inline-block">
                        {isUsd ? "dès 330 $" : "dès 200 000 FCFA"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-600 font-inter">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0A9678] shrink-0" />
                <span>Optimisation mobile &amp; performances garanties</span>
              </span>
              <span className="font-mono text-[11px] text-[#0A9678] font-semibold">
                {isUsd ? "Paiement carte bancaire / Stripe" : "Paiement Mobile Money (MTN, Moov, Wave)"}
              </span>
            </div>
          </div>

          {/* Service 2 : Logiciels & Outils de gestion sur mesure */}
          <div className="rounded-2xl p-6 sm:p-8 bg-white border border-[#E5E7EB] shadow-sm hover:border-[#0A9678]/40 transition-colors flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#0A9678]/10 text-[#0A9678] flex items-center justify-center shrink-0">
                  <LayoutDashboard className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#281450] font-poppins">
                    Logiciels &amp; Outils de gestion sur mesure
                  </h2>
                  <p className="text-xs text-gray-500">
                    Digitalisation, automatisation et outils internes
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {/* Entrée de gamme : mis en valeur */}
                <div className="rounded-xl border-2 border-[#0A9678]/30 bg-[#0A9678]/[0.03] p-5">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div className="space-y-1">
                      <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#0A9678] font-mono px-2 py-0.5 rounded bg-[#0A9678]/10">
                        TARIF D&apos;ENTRÉE DE GAMME
                      </span>
                      <h3 className="text-base font-semibold text-[#281450]">
                        Outil simple
                      </h3>
                      <p className="text-xs text-gray-600">
                        Automatisation ponctuelle, petit tableau de bord.
                      </p>
                    </div>
                    <div className="sm:text-right shrink-0">
                      <div className="text-[11px] text-gray-500 uppercase font-medium">
                        À partir de
                      </div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#0A9678] font-poppins">
                        {isUsd ? (
                          <>245 <span className="text-sm font-semibold text-gray-700">$</span></>
                        ) : (
                          <>150 000 <span className="text-sm font-semibold text-gray-700">FCFA</span></>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Complexe : Fourchette chiffrée */}
                <div className="rounded-xl border border-[#E5E7EB] bg-gray-50/70 p-5">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div className="space-y-1">
                      <h3 className="text-sm font-semibold text-[#281450]">
                        Application métier complète
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Base de données, logique métier avancée, gestion des utilisateurs et droits.
                      </p>
                    </div>
                    <div className="shrink-0 sm:text-right">
                      <div className="text-[11px] text-gray-500 uppercase font-medium">
                        Fourchette indicative
                      </div>
                      <div className="text-lg font-bold text-[#281450] font-poppins bg-white px-3 py-1 rounded-lg border border-gray-200 shadow-xs inline-block">
                        {isUsd ? "dès 490 $" : "dès 300 000 FCFA"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-600 font-inter">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0A9678] shrink-0" />
                <span>Propriété intégrale du code &amp; architecture évolutive</span>
              </span>
              <span className="font-mono text-[11px] text-[#0A9678] font-semibold">
                {isUsd ? "Paiement carte bancaire / Stripe" : "Paiement Mobile Money"}
              </span>
            </div>
          </div>

          {/* Service 3 : Infrastructures Réseaux & Télécoms */}
          <div className="rounded-2xl p-6 sm:p-8 bg-white border border-[#E5E7EB] shadow-sm hover:border-[#0A9678]/40 transition-colors flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#0A9678]/10 text-[#0A9678] flex items-center justify-center shrink-0">
                  <Network className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#281450] font-poppins">
                    Infrastructures Réseaux &amp; Télécoms
                  </h2>
                  <p className="text-xs text-gray-500">
                    Câblage structuré, interconnexion et sécurisation
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-[#E5E7EB] bg-gray-50/60 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1.5 max-w-md">
                  <div className="text-base font-semibold text-[#281450]">
                    Intervention &amp; Déploiement sur site
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Audit préalable du site, raccordement équipements et périmètre de sécurisation.
                  </p>
                </div>
                <div className="shrink-0 sm:text-right">
                  <div className="text-[11px] text-gray-500 uppercase font-medium">
                    Tarif de départ
                  </div>
                  <div className="text-lg font-bold text-[#281450] font-poppins bg-white px-3 py-1 rounded-lg border border-gray-200 shadow-xs inline-block">
                    {isUsd ? "dès 245 $" : "dès 150 000 FCFA"}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-600 font-inter">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0A9678] shrink-0" />
                <span>Audit technique préalable &amp; validation de conformité</span>
              </span>
              <span className="font-mono text-[11px] text-[#0A9678] font-semibold">
                {isUsd ? "Facturation Stripe / Virement" : "Facturation Mobile Money / Virement"}
              </span>
            </div>
          </div>

          {/* Service 4 : IA conversationnelle & Automatisation */}
          <div className="rounded-2xl p-6 sm:p-8 bg-white border border-[#E5E7EB] shadow-sm hover:border-[#0A9678]/40 transition-colors flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#0A9678]/10 text-[#0A9678] flex items-center justify-center shrink-0">
                  <MessageSquareCode className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#281450] font-poppins">
                    IA conversationnelle &amp; Automatisation
                  </h2>
                  <p className="text-xs text-gray-500">
                    Agents intelligents, bots WhatsApp et automatisation de processus
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-[#E5E7EB] bg-gray-50/60 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1.5 max-w-md">
                  <div className="text-base font-semibold text-[#281450]">
                    Bots WhatsApp &amp; Assistants IA sur-mesure
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Prise de rendez-vous automatique, relance client WhatsApp 24/7 et intégration API.
                  </p>
                </div>
                <div className="shrink-0 sm:text-right">
                  <div className="text-[11px] text-gray-500 uppercase font-medium">
                    Tarif de départ
                  </div>
                  <div className="text-lg font-bold text-[#0A9678] font-poppins bg-white px-3 py-1.5 rounded-lg border border-[#0A9678]/30 shadow-xs inline-block">
                    {isUsd ? "dès 295 $" : "dès 180 000 FCFA"}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-600 font-inter">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0A9678] shrink-0" />
                <span>Intégrations API, CRM &amp; flux automatisés</span>
              </span>
              <span className="font-mono text-[11px] text-[#0A9678] font-semibold">
                {isUsd ? "Paiement carte bancaire / Stripe" : "Paiement Mobile Money"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION "CE QUI FAIT VARIER LE PRIX AU-DELÀ DU TARIF DE BASE" */}
      <section className="bg-[#F5F5F7] border-y border-[#E5E7EB] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#0A9678] font-mono">
              <Sliders className="w-4 h-4" /> Transparence du chiffrage
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#281450] font-poppins">
              Ce qui fait varier le prix au-delà du tarif de base
            </h2>
            <p className="text-sm text-gray-600">
              Chaque projet est unique. Voici les 5 critères qui influent sur le montant du devis :
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="rounded-xl bg-white p-5 border border-[#E5E7EB] shadow-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#0A9678]/10 text-[#0A9678] flex items-center justify-center shrink-0">
                  <Layers className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-sm text-[#281450]">
                  Pages &amp; Fonctionnalités
                </h3>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Le nombre total d&apos;écrans, la profondeur du périmètre et la complexité des modules
                spécifiques à développer.
              </p>
            </div>

            <div className="rounded-xl bg-white p-5 border border-[#E5E7EB] shadow-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#0A9678]/10 text-[#0A9678] flex items-center justify-center shrink-0">
                  <Palette className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-sm text-[#281450]">
                  Design sur-mesure vs Template
                </h3>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Le choix entre un template adapté à votre identité visuelle ou une conception
                graphique 100% sur-mesure.
              </p>
            </div>

            <div className="rounded-xl bg-white p-5 border border-[#E5E7EB] shadow-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#0A9678]/10 text-[#0A9678] flex items-center justify-center shrink-0">
                  <CreditCard className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-sm text-[#281450]">
                  Paiement &amp; Gestion avancée
                </h3>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                {isUsd
                  ? "Paiement en ligne (Carte bancaire / Stripe, PayPal), support multi-devises et back-office avancé."
                  : "Paiement en ligne (Mobile Money MTN/Moov, CB), support multi-langue et back-office avancé."}
              </p>
            </div>

            <div className="rounded-xl bg-white p-5 border border-[#E5E7EB] shadow-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#0A9678]/10 text-[#0A9678] flex items-center justify-center shrink-0">
                  <FileText className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-sm text-[#281450]">
                  Production de contenu
                </h3>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Contenu produit directement par NetWave Studio (textes, visuels, stratégie) plutôt que
                fourni clé en main par le client.
              </p>
            </div>

            <div className="rounded-xl bg-white p-5 border border-[#E5E7EB] shadow-xs sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#0A9678]/10 text-[#0A9678] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-sm text-[#281450]">
                  Délai souhaité
                </h3>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Le délai de réalisation exigé pour le lancement (déploiement standard versus livraison
                urgente accélérée).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA FINAL DE PAGE */}
      <section className="bg-[#281450] text-white py-16 md:py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins">
            Un projet en vue ? Parlons-en.
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Décrivez-nous votre besoin pour obtenir une proposition tarifaire précise et adaptée à
            vos objectifs.
          </p>
          <div className="pt-2 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 rounded-full bg-[#0A9678] hover:bg-[#0fb894] text-white font-bold text-xs sm:text-base text-center transition-all shadow-lg active:scale-[0.98] w-full sm:w-auto max-w-md"
            >
              <span>Demander un devis détaillé, réponse sous 24h</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
