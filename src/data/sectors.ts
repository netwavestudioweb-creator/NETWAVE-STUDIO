// Offre « site web » détaillée par métier : ce que le client reçoit, les outils inclus et les formules.
// Les prix reprennent les formules générales (PACKS) ; seul le contenu change selon le métier.

import { PACKS, PROJECTS, ALKAREEM, type PackId } from "@/data/site";

export type SectorTool = { name: string; text: string };

export type SectorPackContent = Record<PackId, string[]>;

export type Sector = {
  slug: string;
  name: string;
  /** Une ligne pour les cartes de la page récapitulative. */
  short: string;
  headline: string;
  intro: string;
  problems: string[];
  pages: string[];
  tools: SectorTool[];
  packs: SectorPackContent;
  example?: { name: string; image: string; url: string; alt: string; phone?: boolean };
};

export const SECTORS: Sector[] = [
  {
    slug: "restaurant",
    name: "Restaurants & cafés",
    short: "Menu en ligne, réservation, commande à emporter.",
    headline: "Un site qui remplit vos tables, pas seulement une vitrine.",
    intro:
      "Vos clients regardent votre menu et vos photos avant de choisir où manger. Sans site, ils choisissent le restaurant d'à côté qui en a un.",
    problems: [
      "Les clients vous demandent le menu et les prix sur WhatsApp, un par un.",
      "Vous n'apparaissez pas sur Google quand on cherche « restaurant » dans votre quartier.",
      "Les réservations arrivent par téléphone, à n'importe quelle heure.",
    ],
    pages: ["Accueil avec photos", "Menu et prix", "Réservation", "Galerie", "Avis clients", "Accès et horaires"],
    tools: [
      { name: "Menu en ligne", text: "Plats, prix et photos, modifiables par vous en quelques secondes." },
      { name: "Réservation", text: "Demande de table envoyée directement sur votre WhatsApp." },
      { name: "Commande à emporter", text: "Le client choisit ses plats et envoie la commande sur WhatsApp." },
      { name: "Google Maps", text: "Itinéraire, horaires et fiche Google de votre restaurant." },
      { name: "Avis clients", text: "Vos meilleurs avis Google affichés sur le site." },
    ],
    packs: {
      lancement: [
        "Accueil, menu et prix, accès et horaires",
        "Boutons d'appel et « réserver sur WhatsApp »",
        "Fiche Google avec photos et horaires des services",
      ],
      "essentiel-plus": [
        "Toutes les pages : menu complet, galerie, avis, accès",
        "WhatsApp Business avec carte des plats phares",
        "Fiche Google optimisée avec photos et horaires",
      ],
      croissance: [
        "Menu complet avec photos, modifiable par vous",
        "Module de réservation de table en direct",
        "Commande à emporter vers WhatsApp ou paiement carte",
        "SEO local : 5 mots-clés restaurant de votre ville",
        "Réponse à vos avis Google le premier mois",
      ],
      prestige: [
        "Commande et paiement en ligne avec retraits / livraisons",
        "Gestion multi-établissements ou franchise",
        "Programme de fidélité et réservation connectée",
        "Version bilingue (français / anglais)",
      ],
    },
    example: {
      name: PROJECTS[0].title,
      image: PROJECTS[0].image,
      url: PROJECTS[0].url,
      alt: PROJECTS[0].alt,
    },
  },
  {
    slug: "hotel",
    name: "Hôtels & hébergements",
    short: "Chambres, disponibilités, réservation directe.",
    headline: "Des réservations en direct, sans commission.",
    intro:
      "Les plateformes de réservation prennent une commission sur chaque nuit. Un site bien référencé vous apporte des clients en direct, et les rassure avant de payer.",
    problems: [
      "Vous dépendez des plateformes et de leurs commissions.",
      "Vos chambres sont mal mises en valeur, avec des photos dispersées.",
      "Les clients étrangers ne trouvent pas d'informations claires dans leur langue.",
    ],
    pages: ["Accueil", "Chambres et tarifs", "Services et équipements", "Galerie", "Réservation", "Accès et contact"],
    tools: [
      { name: "Fiches chambres", text: "Photos, équipements et tarifs pour chaque type de chambre." },
      { name: "Demande de réservation", text: "Dates, nombre de personnes, envoyée sur WhatsApp ou par email." },
      { name: "Site bilingue", text: "Français et anglais pour la clientèle internationale." },
      { name: "Google Maps", text: "Localisation, itinéraire depuis l'aéroport ou la gare." },
      { name: "Avis clients", text: "Vos avis Google et plateformes mis en avant." },
    ],
    packs: {
      lancement: [
        "Accueil, chambres et tarifs, accès et contact",
        "Bouton « réserver sur WhatsApp »",
        "Fiche Google Maps avec itinéraire et équipements",
      ],
      "essentiel-plus": [
        "Une page dédiée par type de chambre avec tarifs",
        "WhatsApp Business avec catalogue des chambres",
        "Fiche Google optimisée (catégorie hôtel, avis, photos)",
      ],
      croissance: [
        "Formulaire de réservation directe avec choix des dates",
        "SEO local hébergement dans votre secteur",
        "Lien de paiement sécurisé pour acompte ou arrhes",
        "Réponse aux avis voyageurs le premier mois",
      ],
      prestige: [
        "Calendrier des disponibilités en temps réel",
        "Paiement direct sans commission intermédiaire",
        "Site bilingue (français / anglais)",
        "Multi-établissements ou gestion d'appartements",
      ],
    },
  },
  {
    slug: "commerce",
    name: "Commerces & boutiques",
    short: "Catalogue, commande WhatsApp, paiement en ligne.",
    headline: "Vendez en ligne, même pendant que la boutique est fermée.",
    intro:
      "Vous vendez déjà sur Instagram et WhatsApp. Un site vous donne un vrai catalogue, une image professionnelle, et des clients qui vous trouvent sur Google.",
    problems: [
      "Vous répondez « c'est combien ? » des dizaines de fois par jour.",
      "Vos produits se perdent dans le fil Instagram.",
      "Les nouveaux clients hésitent à commander à un compte sans site.",
    ],
    pages: ["Accueil", "Catalogue avec filtres", "Fiche produit", "Panier ou commande WhatsApp", "À propos", "Contact"],
    tools: [
      { name: "Catalogue", text: "Produits, prix, photos, catégories et recherche." },
      { name: "Commande WhatsApp", text: "Le client envoie son panier complet sur votre WhatsApp en un clic." },
      { name: "Paiement en ligne", text: "Carte bancaire, ou paiement à la livraison ou au retrait." },
      { name: "Gestion du stock", text: "Espace d'administration pour vos produits et commandes." },
      { name: "Référencement", text: "Chaque produit peut être trouvé sur Google." },
    ],
    packs: {
      lancement: [
        "Vitrine de vos produits phares et horaires",
        "Bouton « commander sur WhatsApp »",
        "Fiche Google Maps créée avec photos de la boutique",
      ],
      "essentiel-plus": [
        "Catalogue de vos produits par rayon",
        "WhatsApp Business configuré avec catalogue de 10 articles",
        "Boutons de commande directe vers WhatsApp",
      ],
      croissance: [
        "Catalogue complet avec recherche, filtres et panier",
        "Paiement en ligne par carte ou lien de paiement",
        "SEO local commerce et produits dans votre ville",
        "Avis clients Google affichés sur la boutique",
      ],
      prestige: [
        "Boutique en ligne complète avec gestion des stocks",
        "Comptes clients et suivi de livraison",
        "Version multilingue ou multi-devises",
        "Tableau de bord des ventes et commandes",
      ],
    },
    example: {
      name: ALKAREEM.name,
      image: ALKAREEM.screens.shop,
      url: ALKAREEM.url,
      alt: "Boutique mobile Al Kareem Parfumerie, réalisée par NetWave Studio",
      phone: true,
    },
  },
  {
    slug: "beaute",
    name: "Beauté & bien-être",
    short: "Prestations, prix, prise de rendez-vous.",
    headline: "Un agenda rempli, sans passer vos journées au téléphone.",
    intro:
      "Salon de coiffure, institut, spa, barbier : vos clientes veulent voir vos réalisations, connaître vos prix et réserver sans attendre une réponse.",
    problems: [
      "Les rendez-vous arrivent par messages, à toute heure, et s'oublient.",
      "Vos plus belles réalisations sont noyées sur Instagram.",
      "Les nouvelles clientes ne connaissent pas vos prix avant d'appeler.",
    ],
    pages: ["Accueil", "Prestations et prix", "Réalisations", "Prise de rendez-vous", "Équipe", "Accès et contact"],
    tools: [
      { name: "Carte des prestations", text: "Services, durées et prix, clairs et à jour." },
      { name: "Prise de rendez-vous", text: "Demande avec date et prestation, envoyée sur WhatsApp." },
      { name: "Galerie avant / après", text: "Vos réalisations mises en valeur." },
      { name: "Avis clients", text: "Les avis qui rassurent les nouvelles clientes." },
      { name: "Google Maps", text: "Votre salon trouvé dans le quartier." },
    ],
    packs: {
      lancement: [
        "Carte des prestations et tarifs, accès et horaires",
        "Bouton « rendez-vous WhatsApp »",
        "Fiche Google Maps avec photos du salon",
      ],
      "essentiel-plus": [
        "Prestations détaillées, galerie de réalisations, équipe",
        "WhatsApp Business avec catalogue prestations & tarifs",
        "Fiche Google optimisée avec contact rapide",
      ],
      croissance: [
        "Formulaire de rendez-vous qualifié (date, prestation)",
        "Galerie avant / après et avis Google affichés",
        "SEO local : salon et soins dans votre ville",
        "Réponse aux avis des clientes le premier mois",
      ],
      prestige: [
        "Agenda connecté avec créneaux en temps réel",
        "Rappels automatiques par SMS ou WhatsApp",
        "Vente de cartes cadeaux et produits de soin",
        "Multi-salons ou plusieurs praticiens",
      ],
    },
  },
  {
    slug: "cabinet",
    name: "Cabinets & professions libérales",
    short: "Expertise, crédibilité, prise de rendez-vous.",
    headline: "Inspirez confiance avant même le premier rendez-vous.",
    intro:
      "Médecin, avocat, comptable, consultant, architecte : vos clients vous cherchent sur Google et jugent votre sérieux à votre site.",
    problems: [
      "Sans site, vous paraissez moins établi que vos confrères.",
      "Les demandes arrivent incomplètes et vous font perdre du temps.",
      "Votre expertise n'est visible nulle part.",
    ],
    pages: ["Accueil", "Domaines d'intervention", "Le cabinet et l'équipe", "Prise de rendez-vous", "Articles ou conseils", "Contact"],
    tools: [
      { name: "Présentation de l'expertise", text: "Vos domaines, votre parcours, vos garanties." },
      { name: "Prise de rendez-vous", text: "Formulaire qualifié : motif, disponibilités, coordonnées." },
      { name: "Articles", text: "Des conseils publiés qui vous font trouver sur Google." },
      { name: "Google Maps", text: "Adresse, horaires et accès au cabinet." },
      { name: "Contact sécurisé", text: "Formulaire protégé contre le spam." },
    ],
    packs: {
      lancement: [
        "Domaines d'intervention, honoraires et contact",
        "Bouton direct « prendre rendez-vous »",
        "Fiche Google Maps avec horaires et accès",
      ],
      "essentiel-plus": [
        "Une page par domaine et présentation de l'équipe",
        "WhatsApp Business pour les échanges clients",
        "Fiche Google optimisée (catégories professionnelles)",
      ],
      croissance: [
        "Formulaire de contact qualifié (motif, disponibilités)",
        "Espace conseils, articles et FAQ spécialisée",
        "SEO local : profession dans votre ville et région",
        "Rapport d'appels et d'itinéraires à 30 jours",
      ],
      prestige: [
        "Prise de rendez-vous en ligne synchronisée à l'agenda",
        "Espace sécurisé d'échange de documents",
        "Paiement sécurisé des honoraires et consultations",
        "Version bilingue français / anglais",
      ],
    },
  },
  {
    slug: "entreprise",
    name: "PME, artisans & BTP",
    short: "Présentation, réalisations, demandes de devis.",
    headline: "Des demandes de devis qualifiées, chaque semaine.",
    intro:
      "Entreprise de services, artisan, BTP, transport, industrie : vos futurs clients comparent les prestataires en ligne avant de vous appeler.",
    problems: [
      "Vos clients vous trouvent seulement par le bouche-à-oreille.",
      "Vos chantiers et réalisations ne sont montrés nulle part.",
      "Les appels d'offres et grands comptes attendent un site professionnel.",
    ],
    pages: ["Accueil", "Services", "Réalisations", "L'entreprise", "Demande de devis", "Contact"],
    tools: [
      { name: "Pages services", text: "Chaque activité expliquée, avec ses avantages." },
      { name: "Réalisations", text: "Chantiers et projets en photos, avec le résultat obtenu." },
      { name: "Demande de devis", text: "Formulaire détaillé : besoin, lieu, délai, budget." },
      { name: "Référencement local", text: "Être trouvé dans votre ville et votre région." },
      { name: "Plaquette téléchargeable", text: "Votre présentation en PDF pour vos prospects." },
    ],
    packs: {
      lancement: [
        "Services, zone d'intervention et contact",
        "Bouton « devis sur WhatsApp »",
        "Fiche Google Maps avec zone desservie",
      ],
      "essentiel-plus": [
        "Une page détaillée par service ou spécialité",
        "Galerie de chantiers et réalisations en photos",
        "WhatsApp Business avec catalogue de prestations",
      ],
      croissance: [
        "Formulaire de demande de devis qualifié",
        "SEO local artisan / BTP sur 10 annuaires et votre ville",
        "Avis clients Google intégrés pour rassurer",
        "Rapport de résultats à 30 jours (appels et demandes)",
      ],
      prestige: [
        "Espace client avec suivi d'avancement de chantier",
        "Outil de devis en ligne et signature électronique",
        "Multi-agences ou couverture nationale",
        "Tableau de bord de suivi des leads",
      ],
    },
  },
];

/** Ce que chaque formule inclut, quel que soit le métier. */
export const COMMON_PACK_FEATURES: SectorPackContent = {
  lancement: [
    "Fiche Google complétée, boutons appel & WhatsApp",
    "Nom de domaine à votre nom, hébergement et SSL inclus",
    "Logo typo, QR code d'avis, page « lien en bio »",
    "En 10 jours ouvrés, ou 20 % remboursés",
  ],
  "essentiel-plus": [
    "Fiche Google optimisée (20 photos), WhatsApp Business (10 articles)",
    "Facebook & Instagram harmonisés et sécurisés (2FA), e-mail pro",
    "Nom de domaine à votre nom, hébergement et SSL inclus",
    "En 10 jours ouvrés, ou 20 % remboursés",
  ],
  croissance: [
    "SEO local (5 mots-clés de votre ville + 10 annuaires)",
    "Fiche Google + 4 publications, réponses aux avis (1er mois)",
    "Paiement par carte, rapport à 30 jours, kit Canva",
    "En 10 jours ouvrés, ou 20 % remboursés",
  ],
  prestige: [
    "Version bilingue, identité visuelle complète",
    "Tableau de bord personnalisé, 3 mois de suivi Visibilité",
    "Reprise d'ancien site avec redirections 301",
    "Point chaque semaine, calendrier écrit",
  ],
};

export const getSector = (slug: string) => SECTORS.find((s) => s.slug === slug);

/** Formules appliquées à un métier : prix généraux + contenu propre au métier + socle commun. */
export const sectorPacks = (sector: Sector) =>
  PACKS.map((pack) => ({
    ...pack,
    sectorFeatures: sector.packs[pack.id],
    commonFeatures: COMMON_PACK_FEATURES[pack.id],
  }));
