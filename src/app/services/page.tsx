import React from "react";
import Link from "next/link";
import {
  Globe,
  LayoutDashboard,
  Network,
  Bot,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Services & Expertises — NetWave Studio | Web, Logiciels, Réseaux & IA",
  description:
    "Découvrez les services concrets de NetWave Studio : Création de sites web & e-commerce, développement d'applications et logiciels métiers sur-mesure, infrastructures réseaux & télécoms, et automatisation IA WhatsApp.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Nos Services & Expertises — NetWave Studio",
    description:
      "Des solutions concrètes pour votre entreprise : Sites web, e-commerce, logiciels métiers, réseaux d'entreprise et assistants IA WhatsApp.",
    url: "https://www.netwave-studio.company/services",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Services NetWave Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nos Services & Expertises — NetWave Studio",
    description: "Sites web, e-commerce, logiciels métiers, infrastructures réseaux et bots WhatsApp.",
    images: ["/twitter-image"],
  },
};

export default function ServicesPage() {
  const services = [
    {
      icon: Globe,
      title: "Création de Sites Web & E-Commerce",
      badge: "Dès 149 €",
      description:
        "Nous concevons des sites vitrines modernes et des boutiques en ligne ultra-rapides, spécialement optimisés pour les connexions mobiles (3G/4G). Vos clients découvrent votre offre sans temps d'attente, commandent en un clic et règlent facilement par Mobile Money ou carte bancaire.",
      points: [
        "Sites vitrines professionnels & boutiques e-commerce complètes",
        "Paiement Mobile Money (MTN, Moov, Wave) et carte bancaire intégrés",
        "Bouton de commande & discussion WhatsApp en direct",
        "Chargement ultra-rapide (< 1.2s) & référencement Google SEO soigné",
      ],
    },
    {
      icon: LayoutDashboard,
      title: "Développement d'Applications & Logiciels Métiers",
      badge: "Dès 290 €",
      description:
        "Fini les feuilles de calcul éparpillées ou les outils inadaptés. Nous développons des logiciels de gestion sur-mesure, portails clients et plateformes web conçus exactement pour vos opérations quotidiennes (gestion des stocks, facturation, suivi des commandes et reporting).",
      points: [
        "Applications web personnalisées & outils internes sur-mesure (ERP, CRM)",
        "Tableaux de bord de suivi d'activité et statistiques en temps réel",
        "Gestion sécurisée des utilisateurs, des accès et des rôles",
        "Code propriétaire complet, évolutif et sans abonnement bloquant",
      ],
    },
    {
      icon: Network,
      title: "Infrastructures Réseaux, Télécoms & Sécurité",
      badge: "Sur devis",
      description:
        "Bénéficiez de la double compétence ingénierie logicielle et réseaux. Nous installons, sécurisons et optimisons les infrastructures informatiques d'entreprises : câblage structuré, interconnexion d'agences par VPN, serveurs locaux ou Cloud et téléphonie VoIP.",
      points: [
        "Audit réseau, câblage structuré et routeurs d'entreprise",
        "Interconnexion d'agences distantes et accès VPN hautement sécurisés",
        "Déploiement et maintenance de serveurs locaux ou Cloud (disponibilité 99.9%)",
        "Téléphonie d'entreprise sur IP (VoIP) & sécurisation contre les pannes",
      ],
    },
    {
      icon: Bot,
      title: "Automatisation Métier & Assistants IA / WhatsApp",
      badge: "Sur devis",
      description:
        "Ne manquez plus aucun prospect. Nous créons des assistants intelligents et des bots WhatsApp connectés à vos systèmes pour répondre instantanément à vos clients 24h/24, automatiser la prise de rendez-vous, qualifier les demandes et relancer les devis en attente.",
      points: [
        "Assistants WhatsApp Business intelligents opérationnels 24h/24 et 7j/7",
        "Prise de commandes, réservations et réponses FAQ instantanées",
        "Relance automatique des paniers d'achat et des demandes de devis",
        "Connexion directe avec vos outils (Google Sheets, CRM, emails)",
      ],
    },
  ];

  return (
    <div className="w-full bg-white font-inter">
      {/* En-tête de page */}
      <section className="bg-[#F5F5F7] py-16 md:py-24 border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold text-[#0A9678] tracking-widest uppercase font-mono">
            NOS EXPERTISES &amp; SERVICES
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#281450] font-poppins">
            Ce que nous concevons pour votre entreprise
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            De la création de votre site web jusqu&apos;à vos logiciels de gestion sur-mesure, vos réseaux informatiques et vos assistants WhatsApp : découvrez des services clairs, concrets et adaptés aux réalités du terrain.
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
                      Ce qui est inclus concrètement :
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
                    <span>Discuter de ce service</span>
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
            Un projet précis en tête ?
          </h3>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Expliquez-nous votre besoin. Nous étudions votre projet sous 24h ouvrées et vous fournissons une recommandation technique et un devis clair.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0A9678] hover:bg-[#0fb894] text-white font-bold text-sm sm:text-base transition-all shadow-lg active:scale-[0.98] w-full sm:w-auto"
            >
              <span>Demander une étude gratuite</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/tarifs"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base transition-all w-full sm:w-auto"
            >
              <span>Consulter les tarifs &amp; forfaits</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
