import React from "react";
import Link from "next/link";
import {
  ShoppingCart,
  LayoutDashboard,
  Network,
  MessageSquareCode,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Les Leviers de Visibilité & d'Acquisition — NetWave Studio",
  description:
    "Découvrez les leviers d'attraction et de croissance de NetWave Studio : Notoriété E-commerce, Dispositifs d'Autorité, Infrastructures de Croissance et Relance Client Automatisée.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services & Leviers d'Acquisition — NetWave Studio",
    description:
      "Propulsez votre marque. Visibilité maximale, captation de prospects qualifiés & augmentation des ventes.",
    url: "https://www.netwave-studio.company/services",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Services NetWave Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services & Leviers d'Acquisition — NetWave Studio",
    description: "Plus de visibilité, plus de clients au courant, plus de ventes.",
    images: ["/twitter-image"],
  },
};

export default function ServicesPage() {
  const services = [
    {
      icon: ShoppingCart,
      title: "Attraction & Ventes E-Commerce",
      badge: "Dispositif dès 100 000 FCFA",
      description:
        "Un site que personne ne voit ou qui prend dix secondes à charger, c'est un client perdu d'avance. Nous déployons des vitrines hypnotiques et boutiques en ligne conçues pour capturer l'attention, rassurer immédiatement et convertir chaque visiteur grâce au paiement Mobile Money (MTN, Moov, Wave) et la commande WhatsApp directe.",
      points: [
        "Vitrines de notoriété & boutiques e-commerce à fort taux de conversion",
        "Performance instantanée sur réseaux 3G/4G (Zéro prospect perdu)",
        "Intégration fluide Mobile Money & paiement local",
        "Panels de suivi du chiffre d'affaires et des ventes en temps réel",
      ],
    },
    {
      icon: LayoutDashboard,
      title: "Plateformes d'Autorité & Notoriété",
      badge: "Dispositif dès 150 000 FCFA",
      description:
        "Positionnez votre entreprise comme le leader incontesté de votre secteur. Nous concevons des plateformes de marque et tableaux de bord d'autorité qui imposent le respect, rassurent vos partenaires et font connaître vos offres au plus grand nombre.",
      points: [
        "Plateformes de marque haut de gamme & vitrines d'autorité",
        "Design System exclusif reflétant le prestige de votre entreprise",
        "Génération de rapports d'impact & tableaux de suivi commercial",
        "Positionnement stratégique captant des prospects qualifiés",
      ],
    },
    {
      icon: Network,
      title: "Infrastructures de Croissance",
      badge: "Sur mesure",
      description:
        "Lorsque votre visibilité augmente, votre infrastructure doit absorber des milliers de visites simultanées sans faiblir. Nous sécurisons et optimisons la vitesse d'accès de votre écosystème pour garantir 100% de disponibilité et une expérience client d'exception.",
      points: [
        "Disponibilité 99.9% et serveurs ultra-rapides Edge",
        "Chargement sous 1.5s pour maximiser le maintien des prospects",
        "Sécurisation complète des données clients et transactions",
        "Supervision proactive des pics de trafic commercial",
      ],
    },
    {
      icon: MessageSquareCode,
      title: "Relance Client & Bots WhatsApp",
      badge: "Sur mesure",
      description:
        "Un prospect intéressé doit être contacté et converti dans la minute. Nos assistants virtuels et automatisations WhatsApp prennent le relais 24h/24 pour informer vos clients, répondre à leurs questions et clore des ventes automatiquement.",
      points: [
        "Bots WhatsApp Business & réponses automatiques intelligentes",
        "Prise de rendez-vous et qualification de prospects en direct",
        "Relance automatique des paniers et demandes de devis",
        "Intégration directe avec vos canaux de vente existants",
      ],
    },
  ];

  return (
    <div className="w-full bg-white font-inter">
      {/* En-tête de page */}
      <section className="bg-[#F5F5F7] py-16 md:py-24 border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold text-[#0A9678] tracking-widest uppercase font-mono">
            VOTRE MOTEUR DE NOTORIÉTÉ
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#281450] font-poppins">
            Nos Leviers de Visibilité &amp; Ventes
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Un dispositif complet axé sur ce qui compte vraiment : faire connaître vos offres, attirer des prospects qualifiés et faire exploser votre chiffre d&apos;affaires.
          </p>
        </div>
      </section>

      {/* Grille des 4 services */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="rounded-2xl border border-[#E5E7EB] p-8 bg-white card-elevation-hover flex flex-col justify-between"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#0A9678]/10 text-[#0A9678] flex items-center justify-center shrink-0">
                      <Icon className="w-7 h-7 stroke-[1.75]" />
                    </div>
                    <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-gray-100 text-[#281450] border border-gray-200">
                      {service.badge}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-[#281450] font-poppins">
                    {service.title}
                  </h2>

                  <p className="text-sm text-gray-600 leading-relaxed font-inter">
                    {service.description}
                  </p>

                  <div className="pt-3 border-t border-gray-100">
                    <p className="text-xs font-semibold text-[#281450] uppercase tracking-wider mb-3 font-mono">
                      Points clés :
                    </p>
                    <ul className="space-y-2.5">
                      {service.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2 text-xs text-gray-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-[#0A9678] mt-0.5 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-gray-100 flex items-center justify-between">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#281450] hover:text-[#0A9678] transition-colors"
                  >
                    <span>Discuter de ce besoin</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/tarifs"
                    className="text-xs font-semibold text-[#0A9678] hover:underline"
                  >
                    Voir la grille tarifaire
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bandeau d'appel à l'action */}
      <section className="bg-[#1E0F3D] text-white py-16 md:py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins text-white">
            Un projet en vue ?
          </h3>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Contactez NetWave Studio pour échanger sur vos besoins et planifier une étude de cadrage
            technique détaillée.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0A9678] hover:bg-[#0fb894] text-white font-bold text-sm sm:text-base transition-all shadow-lg active:scale-[0.98] w-full sm:w-auto"
            >
              <span>Prendre contact</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/#estimateur"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base transition-all w-full sm:w-auto"
            >
              <span>Simuler mon tarif</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
