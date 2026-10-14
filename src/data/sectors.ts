// Offre « site web » détaillée par métier : ce que le client reçoit, les outils inclus et les formules.
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
      "Vous n'apparaissez pas sur Google quand on cherche « restaurant » dans votre quartier.",
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
        "Bouton « réserver sur WhatsApp »",
        "Affiche du menu ou du plat phare",
      ],
      "essentiel-plus": [
        "Toutes les pages : menu, galerie, avis, accès",
        "Bouton « réserver sur WhatsApp »",
        "Affiche + flyer du menu",
      ],
      croissance: [
        "Menu complet avec photos, modifiable par vous",
        "Réservation en ligne (date, couverts)",
        "Commande à emporter vers WhatsApp",
        "Menu imprimable + affiche",
        "Vidéo 20 s : l'ambiance et les plats",
      ],
      prestige: [
        "Commande et paiement en ligne avec livraison",
        "Plusieurs établissements",
        "Programme de fidélité",
        "Kit : menus, cartes, bâche, chevalets QR code",
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
        "Accueil, chambres, accès, contact",
        "Bouton « réserver sur WhatsApp »",
        "Galerie photos + 1 affiche",
      ],
      "essentiel-plus": [
        "Une page par type de chambre",
        "Bouton « réserver sur WhatsApp »",
        "Affiche + flyer",
      ],
      croissance: [
        "Fiche détaillée par type de chambre",
        "Demande de réservation avec dates",
        "Version anglaise",
        "Vidéo 20 s : visite de l'établissement",
      ],
      prestige: [
        "Calendrier de disponibilités en temps réel",
        "Paiement d'acompte en ligne",
        "Connexion aux plateformes de réservation",
        "Vidéo promo avec voix off FR / EN",
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
      { name: "Paiement en ligne", text: "Carte bancaire et Mobile Money, ou paiement à la livraison." },
      { name: "Gestion du stock", text: "Espace d'administration pour vos produits et commandes." },
      { name: "Référencement", text: "Chaque produit peut être trouvé sur Google." },
    ],
    packs: {
      lancement: [
        "Vitrine de vos produits phares",
        "Bouton « commander sur WhatsApp »",
        "1 affiche promo",
      ],
      "essentiel-plus": [
        "Catalogue de vos produits par catégorie",
        "Bouton « commander sur WhatsApp »",
        "Affiche + flyer promo",
      ],
      croissance: [
        "Catalogue complet avec recherche et filtres",
        "Panier envoyé sur WhatsApp",
        "Paiement Mobile Money et carte",
        "Espace d'administration produits et commandes",
        "Vidéo 20 s : vos produits en mouvement",
      ],
      prestige: [
        "Boutique complète avec livraison et comptes clients",
        "Connexion caisse ou stock",
        "Relance des paniers abandonnés",
        "Kit : étiquettes, sacs, cartes",
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
        "Prestations et prix, contact",
        "Bouton « rendez-vous WhatsApp »",
        "Affiche des tarifs",
      ],
      "essentiel-plus": [
        "Prestations, galerie, équipe, contact",
        "Bouton « rendez-vous WhatsApp »",
        "Affiche des tarifs + flyer d'offre",
      ],
      croissance: [
        "Formulaire de rendez-vous (date, prestation)",
        "Galerie avant / après",
        "Présentation de l'équipe",
        "Vidéo 20 s : avant / après en mouvement",
      ],
      prestige: [
        "Agenda en ligne avec créneaux en temps réel",
        "Rappels automatiques par SMS ou WhatsApp",
        "Vente de produits et cartes cadeaux",
        "Cartes de fidélité et de visite",
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
        "Domaines d'intervention, contact",
        "Bouton « prendre rendez-vous »",
        "Cartes de visite (au lieu de l'affiche)",
      ],
      "essentiel-plus": [
        "Une page par domaine d'intervention",
        "Présentation de l'équipe",
        "Cartes de visite + plaquette",
      ],
      croissance: [
        "Formulaire de rendez-vous qualifié",
        "Espace articles et conseils",
        "Politique de confidentialité renforcée",
        "Vidéo 20 s : « qui sommes-nous »",
      ],
      prestige: [
        "Agenda en ligne connecté à votre calendrier",
        "Espace client sécurisé (échange de documents)",
        "Paiement des consultations en ligne",
        "Identité complète et papeterie",
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
        "Services, contact",
        "Bouton « devis sur WhatsApp »",
        "Galerie de réalisations + 1 flyer",
      ],
      "essentiel-plus": [
        "Une page par service",
        "Galerie de réalisations",
        "Flyer + affiche",
      ],
      croissance: [
        "Réalisations détaillées (photos, résultats)",
        "Formulaire de demande de devis détaillé",
        "Plaquette PDF de présentation",
        "Vidéo 20 s : vos chantiers ou votre activité",
      ],
      prestige: [
        "Espace client et suivi de chantier",
        "Outil de devis et facturation",
        "Site multilingue",
        "Kit : plaquette, bâche, véhicule, tenues",
      ],
    },
  },
];

/** Ce que chaque formule inclut, quel que soit le métier. */
export const COMMON_PACK_FEATURES: SectorPackContent = {
  lancement: [
    "Logo simple, fiche Google, 3 visuels réseaux sociaux",
    "Hébergement, SSL et nom de domaine à votre nom",
    "QR codes, page « lien en bio », guide offert",
    "En 10 jours ouvrés, ou 20 % remboursés",
  ],
  "essentiel-plus": [
    "Logo simple, fiche Google, 6 visuels réseaux sociaux",
    "WhatsApp Business configuré, adresse email professionnelle",
    "Hébergement, SSL et nom de domaine à votre nom",
    "En 10 jours ouvrés, ou 20 % remboursés",
  ],
  croissance: [
    "Logo + mini charte, SEO local (5 mots-clés de votre ville)",
    "6 visuels + kit de modèles, assistant WhatsApp 24 h/24",
    "Rapport de statistiques, 30 jours d'assistance prioritaire",
    "En 10 jours ouvrés, ou 20 % remboursés",
  ],
  prestige: [
    "Identité visuelle complète",
    "Vidéo promo avec voix off + 2 déclinaisons",
    "3 mois de SEO mensuel inclus",
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
