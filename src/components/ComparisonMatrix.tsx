"use client";

import React from "react";
import { CheckCircle2, XCircle, AlertCircle, ShieldCheck, Zap, Lock, Sparkles } from "lucide-react";

interface ComparisonRow {
  feature: string;
  netwave: string;
  netwaveStatus: "success" | "warning";
  wordpressAgencies: string;
  wordpressStatus: "error" | "warning";
  freelancers: string;
  freelancerStatus: "error" | "warning";
}

const COMPARISON_DATA: ComparisonRow[] = [
  {
    feature: "Objectif & Résultat Visé",
    netwave: "Machine d'Attraction Client & Notoriété (Plus de visibilité & Ventes en continu)",
    netwaveStatus: "success",
    wordpressAgencies: "Vente d'un site passif sans garantie de visibilité ni de trafic",
    wordpressStatus: "error",
    freelancers: "Livrable technique brut sans stratégie d'acquisition de prospects",
    freelancerStatus: "warning",
  },
  {
    feature: "Conversion & Taux de Rétention",
    netwave: "Chargement < 1.5s sur 3G/4G + Ergonomie captivante (Zero visiteur perdu)",
    netwaveStatus: "success",
    wordpressAgencies: "Sites WordPress lourds (4s à 8s de chargement = 70% de fuite)",
    wordpressStatus: "error",
    freelancers: "Expérience utilisateur basique souvent non optimisée sur mobile",
    freelancerStatus: "warning",
  },
  {
    feature: "Paiements & Conversion Locale",
    netwave: "Checkout Mobile Money (MTN, Moov, Wave) & WhatsApp automatique",
    netwaveStatus: "success",
    wordpressAgencies: "Modules lourds ou inadaptés aux habitudes de paiement locales",
    wordpressStatus: "error",
    freelancers: "Bricolage d'API peu sécurisé ou manquant de fiabilité",
    freelancerStatus: "warning",
  },
  {
    feature: "Image de Marque & Impact Visuel",
    netwave: "Design d'exception sur-mesure (Effet WOW & Autorité immédiate)",
    netwaveStatus: "success",
    wordpressAgencies: "Templates vus et revus qui ressemblent à tous les concurrents",
    wordpressStatus: "error",
    freelancers: "Qualité graphique aléatoire dépendant des compétences du dev",
    freelancerStatus: "warning",
  },
  {
    feature: "Transparence Tarifaire & Délais",
    netwave: "Budget fixe transparent dès 100k FCFA & Résultats mesurables au jour près",
    netwaveStatus: "success",
    wordpressAgencies: "Abonnements annuels cachés et facturation prohibitive",
    wordpressStatus: "error",
    freelancers: "Délais souvent rallongés et risque d'indisponibilité post-livraison",
    freelancerStatus: "warning",
  },
];

export default function ComparisonMatrix() {
  return (
    <div className="w-full max-w-6xl mx-auto my-8">
      {/* Header explicatif */}
      <div className="text-center space-y-3 mb-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#0A9678] font-mono">
          Pourquoi faire le choix de l&apos;ingénierie ?
        </span>
        <h3 className="text-2xl sm:text-4xl font-bold font-poppins text-[#281450]">
          NetWave Studio vs Les solutions traditionnelles
        </h3>
        <p className="text-sm text-gray-600 max-w-2xl mx-auto font-inter">
          Comparez les critères d&apos;ingénierie, de vitesse et de fiabilité pour faire le choix le plus rentable pour votre entreprise.
        </p>
      </div>

      {/* Vue mobile dédiée en cartes (smartphones 320px - 767px) */}
      <div className="block md:hidden space-y-4">
        {COMPARISON_DATA.map((row, idx) => (
          <div key={idx} className="p-5 rounded-2xl bg-white border border-[#E5E7EB] shadow-xs space-y-3">
            <h4 className="text-sm font-bold text-[#281450] font-poppins border-b border-gray-100 pb-2">
              {row.feature}
            </h4>

            {/* NetWave Studio (Mise en avant) */}
            <div className="p-3.5 rounded-xl bg-[#0A9678]/10 border border-[#0A9678]/30 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#0A9678] font-mono uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>NetWave Studio</span>
              </div>
              <p className="text-xs font-semibold text-[#281450] font-inter flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0A9678] shrink-0" />
                <span>{row.netwave}</span>
              </p>
            </div>

            {/* Comparaisons autres */}
            <div className="grid grid-cols-1 gap-2 pt-1 text-xs">
              <div className="p-2.5 rounded-lg bg-gray-50 flex items-center gap-2 text-gray-600">
                {row.wordpressStatus === "error" ? (
                  <XCircle className="w-3.5 h-3.5 text-red-500 shrink-0" />
                ) : (
                  <AlertCircle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                )}
                <span><strong>WordPress :</strong> {row.wordpressAgencies}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-gray-50 flex items-center gap-2 text-gray-600">
                {row.freelancerStatus === "error" ? (
                  <XCircle className="w-3.5 h-3.5 text-red-500 shrink-0" />
                ) : (
                  <AlertCircle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                )}
                <span><strong>Freelance :</strong> {row.freelancers}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tableau comparatif Desktop & Tablette (md:block) */}
      <div className="hidden md:block overflow-x-auto rounded-3xl border border-[#E5E7EB] bg-white shadow-lg shadow-[#281450]/5">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="border-b border-[#E5E7EB] bg-[#F5F5F7]">
              <th className="p-5 text-xs font-bold uppercase tracking-wider text-gray-500 font-mono w-1/3">
                Critères de Performance
              </th>
              <th className="p-5 text-sm font-extrabold text-[#281450] font-poppins bg-[#0A9678]/10 border-x border-[#0A9678]/20 w-1/3 text-center">
                <div className="flex items-center justify-center gap-2 text-[#0A9678]">
                  <Sparkles className="w-4 h-4" />
                  <span>NetWave Studio</span>
                </div>
              </th>
              <th className="p-5 text-xs font-bold text-gray-500 font-poppins w-1/6 text-center">
                Agences WordPress
              </th>
              <th className="p-5 text-xs font-bold text-gray-500 font-poppins w-1/6 text-center">
                Freelances Isoles
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-xs sm:text-sm">
            {COMPARISON_DATA.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                {/* Colonne Critères */}
                <td className="p-5 font-bold text-[#281450] font-inter">
                  {row.feature}
                </td>

                {/* Colonne NetWave Studio (Mise en valeur) */}
                <td className="p-5 bg-[#0A9678]/5 border-x border-[#0A9678]/20 font-semibold text-[#281450] font-inter text-center">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#0A9678] shrink-0" />
                    <span>{row.netwave}</span>
                  </div>
                </td>

                {/* Colonne Agences WordPress */}
                <td className="p-5 text-gray-600 text-center font-inter">
                  <div className="flex items-center justify-center gap-2 text-gray-500">
                    {row.wordpressStatus === "error" ? (
                      <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-amber-500 shrink-0" />
                    )}
                    <span>{row.wordpressAgencies}</span>
                  </div>
                </td>

                {/* Colonne Freelances */}
                <td className="p-5 text-gray-600 text-center font-inter">
                  <div className="flex items-center justify-center gap-2 text-gray-500">
                    {row.freelancerStatus === "error" ? (
                      <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-amber-500 shrink-0" />
                    )}
                    <span>{row.freelancers}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
