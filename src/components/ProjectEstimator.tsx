"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Calculator,
  Check,
  ArrowRight,
  MessageCircle,
  Sparkles,
  Zap,
  ShieldCheck,
  Search,
  Wand2,
  CheckCircle2,
} from "lucide-react";

interface ProjectType {
  id: string;
  name: string;
  basePrice: number;
  baseDays: number;
  description: string;
}

interface FeatureOption {
  id: string;
  name: string;
  price: number;
  days: number;
}

const PROJECT_TYPES: ProjectType[] = [
  {
    id: "web-ecommerce",
    name: "Site Web & E-Commerce",
    basePrice: 100000,
    baseDays: 7,
    description: "Site vitrine ou boutique en ligne rapide optimisée pour les conversions et paiements locaux.",
  },
  {
    id: "saas-app",
    name: "Logiciel Métier & Application",
    basePrice: 150000,
    baseDays: 14,
    description: "Application de gestion sur-mesure, tableau de bord automatisé et gestion de stock.",
  },
  {
    id: "telecom-infra",
    name: "Infrastructure Réseau & VoIP",
    basePrice: 200000,
    baseDays: 10,
    description: "Câblage structuré, téléphonie IP d'entreprise et sécurisation d'infrastructure.",
  },
  {
    id: "ai-agent",
    name: "Agent IA & Automatisation",
    basePrice: 180000,
    baseDays: 7,
    description: "Chatbot intelligent WhatsApp, assistant IA connecté à vos bases de données.",
  },
];

const EXTRA_FEATURES: FeatureOption[] = [
  { id: "momo", name: "Paiement Mobile Money (MTN / Moov)", price: 25000, days: 2 },
  { id: "whatsapp", name: "Tunnel de Commande WhatsApp Direct", price: 15000, days: 1 },
  { id: "seo", name: "SEO Premium & Indexation Google", price: 20000, days: 2 },
  { id: "admin", name: "Tableau de Bord Admin Avancé", price: 30000, days: 3 },
  { id: "multilingual", name: "Version Bilingue (Français / Anglais)", price: 25000, days: 2 },
];

const BUSINESS_SUGGESTIONS = [
  {
    title: "Boutique en ligne & WhatsApp",
    badge: "E-Commerce",
    typeId: "web-ecommerce",
    features: ["momo", "whatsapp", "seo"],
    prompt: "Je veux une boutique de vente en ligne avec paiement Mobile Money et commande WhatsApp.",
  },
  {
    title: "Logiciel de Gestion & Stock",
    badge: "Gestion",
    typeId: "saas-app",
    features: ["admin", "multilingual"],
    prompt: "J'ai besoin d'une application de gestion de stock et de facturation pour mon entreprise.",
  },
  {
    title: "Assistant IA WhatsApp 24/7",
    badge: "Agent IA",
    typeId: "ai-agent",
    features: ["whatsapp", "admin"],
    prompt: "Je veux un bot WhatsApp intelligent avec IA pour répondre à mes clients 24/7.",
  },
  {
    title: "Site Vitrine & SEO Google",
    badge: "Vitrine",
    typeId: "web-ecommerce",
    features: ["seo", "multilingual"],
    prompt: "Je cherche un site vitrine professionnel rapide et bien référencé sur Google.",
  },
];

export default function ProjectEstimator() {
  const [businessPrompt, setBusinessPrompt] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("web-ecommerce");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(["momo", "whatsapp"]);
  const [isExpress, setIsExpress] = useState<boolean>(false);
  const [activeSuggestion, setActiveSuggestion] = useState<string | null>(null);

  const currentType = PROJECT_TYPES.find((t) => t.id === selectedType) || PROJECT_TYPES[0];

  const toggleFeature = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  // Application d'une suggestion de business pré-définie
  const applyBusinessPreset = (preset: (typeof BUSINESS_SUGGESTIONS)[0]) => {
    setBusinessPrompt(preset.prompt);
    setSelectedType(preset.typeId);
    setSelectedFeatures(preset.features);
    setActiveSuggestion(preset.title);
  };

  // Analyse en temps réel de la saisie texte utilisateur
  const handlePromptChange = (text: string) => {
    setBusinessPrompt(text);
    setActiveSuggestion(null);

    const lower = text.toLowerCase();
    let newType = selectedType;
    const newFeatures = new Set(selectedFeatures);

    if (lower.includes("boutique") || lower.includes("vente") || lower.includes("e-commerce") || lower.includes("magasin") || lower.includes("parfum") || lower.includes("vetement")) {
      newType = "web-ecommerce";
      newFeatures.add("momo");
      newFeatures.add("whatsapp");
    } else if (lower.includes("logiciel") || lower.includes("gestion") || lower.includes("stock") || lower.includes("application") || lower.includes("saas") || lower.includes("facture")) {
      newType = "saas-app";
      newFeatures.add("admin");
    } else if (lower.includes("bot") || lower.includes("ia") || lower.includes("intelligence") || lower.includes("assistant") || lower.includes("automatis")) {
      newType = "ai-agent";
      newFeatures.add("whatsapp");
    } else if (lower.includes("reseau") || lower.includes("telecom") || lower.includes("voip") || lower.includes("cablage")) {
      newType = "telecom-infra";
    }

    if (lower.includes("momo") || lower.includes("mobile money") || lower.includes("mtn") || lower.includes("moov")) {
      newFeatures.add("momo");
    }
    if (lower.includes("whatsapp")) {
      newFeatures.add("whatsapp");
    }
    if (lower.includes("seo") || lower.includes("google") || lower.includes("referencement")) {
      newFeatures.add("seo");
    }
    if (lower.includes("anglais") || lower.includes("bilingue") || lower.includes("english")) {
      newFeatures.add("multilingual");
    }

    setSelectedType(newType);
    setSelectedFeatures(Array.from(newFeatures));
  };

  // Calculs dynamiques
  const extraPrice = selectedFeatures.reduce((acc, featId) => {
    const feat = EXTRA_FEATURES.find((f) => f.id === featId);
    return acc + (feat ? feat.price : 0);
  }, 0);

  const extraDays = selectedFeatures.reduce((acc, featId) => {
    const feat = EXTRA_FEATURES.find((f) => f.id === featId);
    return acc + (feat ? feat.days : 0);
  }, 0);

  let totalPrice = currentType.basePrice + extraPrice;
  let totalDays = currentType.baseDays + extraDays;

  if (isExpress) {
    totalPrice = Math.round(totalPrice * 1.25);
    totalDays = Math.max(3, Math.round(totalDays * 0.6));
  }

  // Préparation du message WhatsApp pré-rempli
  const featureNames = selectedFeatures
    .map((fId) => EXTRA_FEATURES.find((f) => f.id === fId)?.name)
    .filter(Boolean)
    .join(", ");

  const whatsappMsg = encodeURIComponent(
    `Bonjour NetWave Studio ! Je viens de simuler mon projet sur votre site :\n- Projet : ${
      businessPrompt || "Non spécifié"
    }\n- Formule : ${currentType.name}\n- Options : ${
      featureNames || "Aucune"
    }\n- Délai : ${isExpress ? "Express 🔥" : "Standard ⏱️"}\n- Estimation : ~${totalPrice.toLocaleString(
      "fr-FR"
    )} FCFA (${totalDays} jours)\nJe souhaite échanger sur ce projet.`
  );

  return (
    <div id="estimateur" className="w-full max-w-5xl mx-auto rounded-3xl bg-white border border-[#E5E7EB] shadow-xl shadow-[#281450]/5 overflow-hidden my-6">
      {/* 1. En-tête Haute Esthétique du Simulateur */}
      <div className="bg-gradient-to-r from-[#1E0F3D] via-[#281450] to-[#0B0318] text-white p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10 relative overflow-hidden">
        <div className="space-y-2 text-left z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-mono text-[#0fb894] border border-white/15 backdrop-blur-md">
            <Calculator className="w-4 h-4" />
            <span>CALCULATEUR DE BUSINESS &amp; DEVIS INTERACTIF</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold font-poppins text-white tracking-tight">
            Simulez votre budget &amp; votre délai de réalisation
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 font-inter max-w-xl leading-relaxed">
            Pour <strong>sociétés</strong> ou <strong>particuliers</strong> : décrivez votre projet en une phrase ou choisissez un exemple ci-dessous.
          </p>
        </div>

        <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/10 border border-white/15 shrink-0 backdrop-blur-md z-10">
          <ShieldCheck className="w-5 h-5 text-[#0fb894]" />
          <span className="text-xs font-bold text-white font-mono uppercase tracking-wider">
            Devis Fixe &amp; Sans Engagement
          </span>
        </div>
      </div>

      {/* 2. Analyseur d'Idée Business & Exemples Prédéfinis */}
      <div className="p-6 sm:p-8 bg-[#F5F5F7] border-b border-[#E5E7EB] space-y-5 text-left">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <label className="text-xs font-bold uppercase tracking-wider text-[#281450] font-mono flex items-center gap-2">
            <Wand2 className="w-4 h-4 text-[#0A9678]" />
            <span>Décrivez votre projet en quelques mots</span>
          </label>
          {activeSuggestion && (
            <span className="text-xs font-mono font-semibold text-[#0A9678] bg-[#0A9678]/15 px-3 py-1 rounded-full animate-pulse border border-[#0A9678]/30">
              Formule ajustée : {activeSuggestion} ✨
            </span>
          )}
        </div>

        <div className="relative">
          <input
            type="text"
            value={businessPrompt}
            onChange={(e) => handlePromptChange(e.target.value)}
            placeholder="Ex: 'Boutique de vente en ligne à Cotonou avec Mobile Money et WhatsApp'..."
            className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white border border-[#E5E7EB] text-sm text-[#281450] placeholder-gray-400 focus:outline-none focus:border-[#0A9678] focus:ring-2 focus:ring-[#0A9678]/20 transition-all font-inter shadow-xs"
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
        </div>

        {/* Exemples de Projets sous Forme de Cartes Puces Nettes */}
        <div className="space-y-2.5">
          <span className="text-xs font-mono font-semibold text-gray-500 uppercase tracking-wider block">
            Ou cliquez sur un projet modèle courant :
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {BUSINESS_SUGGESTIONS.map((preset) => (
              <button
                key={preset.title}
                type="button"
                onClick={() => applyBusinessPreset(preset)}
                className={`p-3 rounded-xl text-left transition-all duration-200 border flex flex-col justify-between gap-1.5 ${
                  activeSuggestion === preset.title
                    ? "bg-[#281450] text-white border-[#281450] shadow-md"
                    : "bg-white text-[#281450] border-[#E5E7EB] hover:border-[#0A9678] hover:shadow-xs"
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-md ${
                    activeSuggestion === preset.title
                      ? "bg-[#0A9678] text-white"
                      : "bg-[#0A9678]/10 text-[#0A9678]"
                  }`}>
                    {preset.badge}
                  </span>
                  {activeSuggestion === preset.title && (
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0fb894]" />
                  )}
                </div>
                <span className="text-xs font-bold font-poppins leading-snug">
                  {preset.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Formulaire de Sélection des Options */}
      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Colonne Gauche : Sélection des Options */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Étape 1 : Type de projet */}
          <div className="space-y-3">
            <label className="block text-xs font-bold uppercase tracking-wider text-[#281450] font-mono">
              1. Choix du type de projet
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PROJECT_TYPES.map((type) => {
                const isSelected = selectedType === type.id;
                return (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setSelectedType(type.id)}
                    className={`p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between ${
                      isSelected
                        ? "border-[#0A9678] bg-[#0A9678]/5 ring-2 ring-[#0A9678]/20 shadow-sm"
                        : "border-[#E5E7EB] bg-white hover:border-gray-300 hover:bg-[#F5F5F7]"
                    }`}
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-[#281450] font-poppins">
                          {type.name}
                        </span>
                        {isSelected && (
                          <span className="w-5 h-5 rounded-full bg-[#0A9678] text-white flex items-center justify-center shrink-0">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed font-inter">
                        {type.description}
                      </p>
                    </div>
                    <span className="text-xs font-bold text-[#0A9678] font-mono mt-3 block">
                      Dès {type.basePrice.toLocaleString("fr-FR")} FCFA
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Étape 2 : Options & Fonctionnalités */}
          <div className="space-y-3 pt-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-[#281450] font-mono">
              2. Options &amp; Fonctionnalités complémentaires
            </label>
            <div className="space-y-2.5">
              {EXTRA_FEATURES.map((feat) => {
                const isChecked = selectedFeatures.includes(feat.id);
                return (
                  <button
                    key={feat.id}
                    type="button"
                    onClick={() => toggleFeature(feat.id)}
                    className={`w-full p-3.5 rounded-xl border text-left flex items-center justify-between gap-3 transition-all duration-200 ${
                      isChecked
                        ? "border-[#0A9678] bg-[#0A9678]/5 text-[#281450]"
                        : "border-[#E5E7EB] bg-white hover:bg-[#F5F5F7] text-gray-700"
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-colors ${
                          isChecked
                            ? "bg-[#0A9678] border-[#0A9678] text-white"
                            : "border-gray-300 bg-white"
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <span className="text-xs sm:text-sm font-semibold truncate">{feat.name}</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#0A9678] bg-[#0A9678]/10 px-2.5 py-1 rounded-lg shrink-0">
                      +{feat.price.toLocaleString("fr-FR")} FCFA
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Étape 3 : Mode de Livraison */}
          <div className="pt-2">
            <div className="flex items-center justify-between p-4 rounded-2xl bg-[#F5F5F7] border border-[#E5E7EB]">
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                  isExpress ? "bg-[#0A9678] text-white" : "bg-gray-200 text-gray-500"
                }`}>
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-bold text-[#281450]">
                    Livraison Express (-40% de délai)
                  </span>
                  <p className="text-xs text-gray-500 font-inter">
                    Mobilisation prioritaire (+25% sur le tarif)
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsExpress(!isExpress)}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  isExpress ? "bg-[#0A9678]" : "bg-gray-300"
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    isExpress ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Colonne Droite : Synthèse Dynamique & Boutons d'Action */}
        <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-[#F5F5F7] border border-[#E5E7EB] space-y-6 text-left">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#281450] font-mono block">
              Synthèse de votre estimation
            </span>

            <div className="p-5 rounded-2xl bg-white border border-[#E5E7EB] space-y-4 shadow-xs">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest font-mono">
                  Investissement estimé
                </p>
                <div className="flex items-baseline gap-1.5 mt-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#281450] font-poppins">
                    ~{totalPrice.toLocaleString("fr-FR")}
                  </span>
                  <span className="text-sm font-bold text-[#0A9678] font-mono">FCFA</span>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                <span className="text-gray-500 font-medium">Délai estimé :</span>
                <span className="font-bold text-[#281450] font-mono bg-[#281450]/5 px-2.5 py-1 rounded-lg">
                  {totalDays} jours ouvrés
                </span>
              </div>
            </div>

            <div className="space-y-2.5 text-xs text-gray-600 font-inter">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#0A9678] shrink-0" />
                <span>Inclus : Garantie d&apos;ingénierie &amp; 30j d&apos;assistance</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#0A9678] shrink-0" />
                <span>Paiement échelonné : 50% au lancement / 50% à la livraison</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#0A9678] shrink-0" />
                <span>Paiements Mobile Money MTN &amp; Moov acceptés</span>
              </div>
            </div>
          </div>

          {/* Boutons d'Action Principaux */}
          <div className="space-y-3 pt-2">
            <a
              href={`https://wa.me/2290150884670?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md transition-all duration-200 active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5 shrink-0" />
              <span>Valider cette simulation sur WhatsApp</span>
            </a>

            <Link
              href={{
                pathname: "/contact",
                query: {
                  type: selectedType,
                  budget: totalPrice,
                  days: totalDays,
                  prompt: businessPrompt,
                },
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-[#281450] hover:bg-[#0A9678] text-white font-semibold text-xs transition-all duration-200"
            >
              <span>Envoyer par formulaire de cadrage</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
