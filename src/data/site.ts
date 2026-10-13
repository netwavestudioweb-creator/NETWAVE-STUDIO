// Source unique des informations du site : coordonnées, offres, services, projets.
// Toute page, l'API de contact et les métadonnées SEO lisent ces valeurs.

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.netwave-studio.company";

export const CONTACT = {
  email: "netwave.studio.web@gmail.com",
  phoneDisplay: "+229 01 50 88 46 70",
  phoneE164: "+2290150884670",
  whatsappUrl: "https://wa.me/2290150884670",
  city: "Cotonou, Bénin",
  linkedin: "https://www.linkedin.com/in/alb%C3%A9ric-adrianododo",
  github: "https://github.com/netwavestudioweb-creator",
  portfolio: "https://dodo-adriano-alb-ric-m-portfolio-ne.vercel.app",
} as const;

export const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/site-web-10-jours", label: "Site en 10 jours" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/a-propos", label: "Le studio" },
] as const;

/** Régions visées : là où le web est encore peu développé (voir docs/marches-cibles.md). */
export const REGIONS = [
  { name: "Afrique de l'Ouest & centrale", examples: "Côte d'Ivoire, Cameroun, Gabon, Sénégal, RD Congo…" },
  { name: "Maghreb", examples: "Maroc, Algérie, Tunisie…" },
  { name: "Caraïbes", examples: "Haïti, République dominicaine…" },
  { name: "Océan Indien", examples: "Madagascar, Comores, Djibouti…" },
  { name: "Moyen-Orient francophone", examples: "Liban…" },
  { name: "Europe & Amérique du Nord", examples: "Indépendants, diaspora, petites entreprises" },
] as const;

/** Moyens de paiement acceptés, quelle que soit la monnaie du client. */
export const PAYMENT_METHODS = [
  "Carte bancaire",
  "Virement international",
  "Mobile Money (Orange, MTN, Wave, Airtel…)",
] as const;

/** Suggestions du champ Pays du formulaire (saisie libre acceptée). */
export const COUNTRY_SUGGESTIONS = [
  "Côte d'Ivoire",
  "Cameroun",
  "Gabon",
  "Sénégal",
  "RD Congo",
  "Congo",
  "Guinée",
  "Madagascar",
  "Haïti",
  "Maroc",
  "Algérie",
  "Tunisie",
  "Bénin",
  "Togo",
  "France",
  "Belgique",
  "Suisse",
  "Canada",
] as const;

export const FLAGSHIP = {
  name: "Site web en 10 jours",
  href: "/site-web-10-jours",
  /** Prix d'entrée : la formule Essentiel. */
  fromPrice: 149,
  days: 10,
  refundPercent: 20,
  promise:
    "Un site professionnel prêt en 10 jours ouvrés, pour votre restaurant, votre commerce, votre cabinet ou votre entreprise. Moins cher qu'une agence, aussi efficace.",
  sectors: [
    { title: "Restaurants & hôtels", text: "Menu, photos, réservation, itinéraire." },
    { title: "Commerces & boutiques", text: "Catalogue, commande WhatsApp, paiement en ligne." },
    { title: "Prestataires & cabinets", text: "Services, prise de rendez-vous, avis clients." },
    { title: "PME & artisans", text: "Présentation, réalisations, demande de devis." },
  ],
  whyCheaper: [
    {
      title: "Pas d'intermédiaire",
      text: "Pas de commercial, pas de chef de projet entre vous et le développeur : vous parlez directement à celui qui construit votre site.",
    },
    {
      title: "Une méthode rodée",
      text: "Des outils modernes et un processus éprouvé : moins d'heures facturées, pas moins de qualité.",
    },
    {
      title: "Des formules claires",
      text: "Vous payez les pages et fonctionnalités dont votre activité a besoin, rien de plus.",
    },
  ],
  conditions: [
    "Le délai court à partir de la réception de vos contenus complets (logo, photos, textes, menu, produits ou services) et de la validation de la maquette.",
    "Si votre site n'est pas en ligne au 10e jour ouvré et que le retard vient de nous, nous vous remboursons 20 % du prix.",
    "Les modifications demandées après validation de la maquette peuvent décaler la date de livraison, avec votre accord écrit.",
    "La garantie s'applique aux formules Essentiel et Croissance ; les projets sur mesure ont leur propre calendrier, fixé par écrit.",
  ],
  included: [
    "Design sur mesure, pensé d'abord pour le mobile",
    "Les pages dont votre activité a besoin",
    "Bouton WhatsApp et formulaire de contact",
    "Réservation, commande ou prise de rendez-vous selon votre métier",
    "Référencement Google de base",
    "Hébergement et certificat SSL la première année",
  ],
  timeline: [
    { day: "J1", title: "Cadrage", text: "Appel visio ou WhatsApp, où que vous soyez : votre activité, vos clients, vos objectifs." },
    { day: "J2–3", title: "Maquette", text: "Vous validez l'apparence de l'accueil et d'une page type." },
    { day: "J4–8", title: "Construction", text: "Pages, contenus, réservation ou contact selon votre métier. Lien de suivi privé." },
    { day: "J9", title: "Tests", text: "Vous testez tout depuis votre téléphone ; nous corrigeons." },
    { day: "J10", title: "Mise en ligne", text: "Votre site est public, avec une formation vidéo à la prise en main." },
  ],
} as const;

export type Testimonial = { quote: string; name: string; role: string; country: string };

/** Ajouter ici les témoignages réels reçus des clients : la section s'affiche dès qu'il y en a un. */
export const TESTIMONIALS: Testimonial[] = [];

export type ServiceId = "web" | "logiciel" | "reseaux" | "ia" | "visibilite" | "maintenance";

export type Service = {
  id: ServiceId;
  title: string;
  /** Prix d'appel en euros, ou null quand le service est sur devis. */
  fromPrice: number | null;
  tone: "emerald" | "violet";
  summary: string;
  description: string;
  points: string[];
};

export const SERVICES: Service[] = [
  {
    id: "web",
    title: "Sites web",
    fromPrice: 149,
    tone: "emerald",
    summary:
      "Restaurant, commerce, cabinet, entreprise : un site professionnel en 10 jours, moins cher qu'une agence.",
    description:
      "Des sites pensés pour le mobile et les connexions lentes, quel que soit votre métier : menu et réservation pour un restaurant, catalogue et commande pour un commerce, rendez-vous pour un cabinet. Livrés en 10 jours ouvrés, ou 20 % remboursés.",
    points: [
      "Sites vitrines, restaurants, boutiques, prise de rendez-vous",
      "Réservation, commande ou contact par WhatsApp",
      "Paiement en ligne : carte et Mobile Money",
      "Chargement sous 1,5 s, référencement Google",
    ],
  },
  {
    id: "logiciel",
    title: "Logiciels métiers",
    fromPrice: 290,
    tone: "emerald",
    summary:
      "Stocks, facturation, commandes, reporting : un outil fait pour vos opérations, plutôt que des tableurs éparpillés.",
    description:
      "Fini les tableurs éparpillés. Nous développons des outils de gestion, des portails clients et des plateformes conçus pour vos opérations : stocks, facturation, commandes, reporting.",
    points: [
      "Applications sur mesure (ERP, CRM)",
      "Tableaux de bord en temps réel",
      "Utilisateurs, rôles et accès sécurisés",
      "Le code vous appartient, sans abonnement imposé",
    ],
  },
  {
    id: "reseaux",
    title: "Réseaux & télécoms",
    fromPrice: null,
    tone: "violet",
    summary:
      "Câblage, VPN entre agences, serveurs et téléphonie IP. La double compétence réseau + logiciel, rare sur le marché.",
    description:
      "La double compétence logiciel + réseau. Nous installons, sécurisons et optimisons l'infrastructure de votre entreprise : câblage, interconnexion d'agences, serveurs et téléphonie.",
    points: [
      "Audit réseau et câblage structuré",
      "Interconnexion d'agences et accès VPN",
      "Serveurs locaux ou cloud",
      "Téléphonie sur IP (VoIP)",
    ],
  },
  {
    id: "ia",
    title: "IA & WhatsApp",
    fromPrice: null,
    tone: "violet",
    summary:
      "Un assistant qui répond à vos clients 24 h/24, prend les rendez-vous et relance les devis en attente.",
    description:
      "Ne laissez plus un prospect sans réponse. Un assistant connecté à vos outils répond à vos clients jour et nuit, prend les rendez-vous, qualifie les demandes et relance les devis.",
    points: [
      "Assistant WhatsApp Business 24 h/24",
      "Commandes, réservations, réponses aux questions",
      "Relance des paniers et des devis",
      "Connexion Google Sheets, CRM, emails",
    ],
  },
  {
    id: "visibilite",
    title: "Visibilité Google & réseaux",
    fromPrice: null,
    tone: "emerald",
    summary:
      "Être trouvé quand un client cherche votre métier dans sa ville : Google, fiche d'établissement, campagnes ciblées.",
    description:
      "Un site que personne ne voit ne vend pas. Nous travaillons votre présence sur Google et sur les réseaux de vos clients, avec des campagnes ciblées par ville et un suivi des demandes reçues.",
    points: [
      "Référencement Google et fiche d'établissement",
      "Campagnes Facebook, Instagram et Google ciblées par ville",
      "Suivi des visites, appels et messages WhatsApp",
      "Rapport mensuel clair",
    ],
  },
  {
    id: "maintenance",
    title: "Maintenance & suivi",
    fromPrice: null,
    tone: "violet",
    summary:
      "Un site toujours à jour, sauvegardé et rapide, avec un interlocuteur qui répond quand vous avez besoin d'une modification.",
    description:
      "Après la mise en ligne, nous restons là : mises à jour, sauvegardes, petites modifications, surveillance de la vitesse et de la disponibilité. Vous vous occupez de vos clients, nous du reste.",
    points: [
      "Hébergement, nom de domaine et SSL renouvelés",
      "Sauvegardes et mises à jour de sécurité",
      "Modifications de contenu incluses chaque mois",
      "Surveillance de la vitesse et de la disponibilité",
    ],
  },
];

export type Pack = {
  id: "essentiel" | "croissance" | "sur-mesure";
  name: string;
  tagline: string;
  price: number;
  installment: number;
  fromPrefix: boolean;
  featured: boolean;
  cta: string;
  features: string[];
  gifts?: string;
};

export const PACKS: Pack[] = [
  {
    id: "essentiel",
    name: "Essentiel",
    tagline: "Pour exister en ligne rapidement, avec un site professionnel.",
    price: 149,
    installment: 49,
    fromPrefix: false,
    featured: false,
    cta: "Choisir Essentiel",
    features: [
      "Site vitrine de 1 à 3 pages",
      "Design adapté au mobile",
      "Formulaire de contact et bouton WhatsApp",
      "Hébergement et certificat SSL 1 an",
      "Référencement Google de base",
      "Livré en 10 jours ouvrés, ou 20 % remboursés",
    ],
  },
  {
    id: "croissance",
    name: "Croissance",
    tagline: "Pour vendre en ligne et automatiser la relation client.",
    price: 449,
    installment: 149,
    fromPrefix: false,
    featured: true,
    cta: "Choisir Croissance",
    features: [
      "Tout Essentiel, plus :",
      "Site multi-pages : restaurant, boutique, réservation…",
      "Livré en 10 jours ouvrés, ou 20 % remboursés",
      "Paiement Mobile Money et carte",
      "Assistant WhatsApp 24 h/24 (RDV, questions)",
      "Espace d'administration (stock, commandes)",
      "Référencement avancé",
    ],
    gifts:
      "kit logo & charte express, formation vidéo à la prise en main, 30 jours d'assistance prioritaire.",
  },
  {
    id: "sur-mesure",
    name: "Sur-mesure",
    tagline: "Pour les projets métiers, réseau ou IA qui demandent une étude.",
    price: 990,
    installment: 330,
    fromPrefix: true,
    featured: false,
    cta: "Demander une étude",
    features: [
      "Tout Croissance, plus :",
      "Application métier sur mesure",
      "Réseau et téléphonie (audit, câblage, VoIP)",
      "Assistant IA entraîné sur vos documents",
      "Maquettes interactives avant développement",
      "Point d'avancement chaque semaine",
    ],
  },
];

export const BUDGETS = [
  { id: "undetermined", label: "À définir ensemble" },
  { id: "base", label: "149 – 449 €" },
  { id: "intermediaire", label: "449 – 990 €" },
  { id: "avance", label: "990 – 2 500 €" },
  { id: "surmesure", label: "Plus de 2 500 €" },
] as const;

export const SERVICE_CHOICES = [
  { id: "web", label: "Site web" },
  { id: "logiciel", label: "Logiciel métier" },
  { id: "reseaux", label: "Réseau & télécoms" },
  { id: "ia", label: "IA & WhatsApp" },
  { id: "autre", label: "Autre / je ne sais pas" },
] as const;

export const METHOD_STEPS = [
  {
    key: "Cadrage",
    title: "Comprendre vos objectifs et fixer les critères de succès.",
    short: "Vos objectifs, vos contraintes, un périmètre écrit et des jalons datés.",
    points: ["Audit des besoins et des usages", "Cahier des charges et périmètre", "Calendrier avec jalons"],
  },
  {
    key: "Architecture",
    title: "Des fondations solides avant le premier écran.",
    short: "Choix techniques sobres, données modélisées, sécurité prévue dès le départ.",
    points: ["Technologies sobres et éprouvées", "Base de données et API modélisées", "Plan de sécurité et d'accès"],
  },
  {
    key: "Développement",
    title: "Vous suivez l'avancement en direct.",
    short: "Un lien de prévisualisation pour suivre l'avancement, tests de performance inclus.",
    points: ["Lien de prévisualisation privé", "Revue de code systématique", "Tests de performance mobile"],
  },
  {
    key: "Livraison",
    title: "Mise en ligne, passation et garantie.",
    short: "Déploiement, documentation, puis 30 jours de garantie écrite.",
    points: ["Déploiement sans coupure", "Documentation remise", "30 jours de garantie écrite"],
  },
] as const;

export const ALKAREEM = {
  name: "Al Kareem Parfumerie",
  url: "https://www.al-kareemparfurmerie.com",
  pageSpeedUrl:
    "https://pagespeed.web.dev/analysis/?url=https://www.al-kareemparfurmerie.com",
  scoreBefore: 68,
  scoreAfter: "90+",
  loadGain: "−75 %",
  screens: {
    home: "/assets/alkareem/2026-accueil.png",
    product: "/assets/alkareem/2026-produit.png",
    shop: "/assets/alkareem/2026-boutique.png",
  },
} as const;

export const PROJECTS = [
  {
    title: "L'Osthof",
    category: "Restaurant traditionnel",
    description: "Site vitrine avec carte de saison, agenda d'événements et référencement local.",
    image: "/projects/osthof.png",
    alt: "Site du restaurant L'Osthof sur tablette",
    url: "https://osthof2.vercel.app/",
  },
  {
    title: "L'Homme Sauvage",
    category: "Restaurant gastronomique",
    description: "Vitrine immersive, menu tactile, galerie et réservation en un clic.",
    image: "/projects/homme-sauvage.png",
    alt: "Site du restaurant L'Homme Sauvage",
    url: "https://homme-sauvage.vercel.app/",
  },
  {
    title: "Bistrot Le République",
    category: "Brasserie & bar",
    description: "Carte des boissons à jour, accès Google Maps, pensé d'abord pour le mobile.",
    image: "/projects/bistrot-republique.png",
    alt: "Site de la brasserie Le République",
    url: "https://brasserie-le-republique.vercel.app/",
  },
] as const;

export const HOME_FAQ = [
  {
    q: "Vous travaillez avec des entreprises de mon pays ?",
    a: "Oui, où que vous soyez. Tout se fait à distance, par visio et WhatsApp, avec un lien de suivi privé pour voir votre projet avancer. Vous payez par carte, virement international ou Mobile Money.",
  },
  {
    q: "Combien de temps prend un projet ?",
    a: "10 jours ouvrés garantis pour un site web (formules Essentiel et Croissance), 2 à 4 semaines pour un logiciel métier. Le calendrier est fixé dès la validation de la maquette.",
  },
  {
    q: "Comment se passe le paiement ?",
    a: "50 % au démarrage, 50 % à la livraison après vos tests, ou en 3 fois sans frais. Carte, virement ou Mobile Money. Prix affichés en euros, devis possible dans votre monnaie.",
  },
  {
    q: "Mon site sera-t-il rapide en 3G/4G ?",
    a: "C'est notre priorité : pas de plugin lourd, des pages qui chargent en moins de 1,5 s, mesurées sur PageSpeed.",
  },
  {
    q: "Que se passe-t-il après la mise en ligne ?",
    a: "30 jours de garantie écrite pour tout réajustement, puis un contrat de maintenance si vous le souhaitez.",
  },
];

export const PRICING_FAQ = [
  {
    q: "Le paiement en 3 fois a-t-il un coût ?",
    a: "Non. Le total est le même qu'au comptant, réparti sur trois mois.",
  },
  {
    q: "Mon projet ne correspond à aucune formule.",
    a: "C'est fréquent. Décrivez votre besoin, nous revenons avec un devis détaillé et gratuit.",
  },
  {
    q: "Puis-je payer dans ma monnaie ?",
    a: "Oui. Les prix sont affichés en euros ; le devis peut être établi en dollars, en FCFA ou dans votre monnaie locale, au taux du jour. Paiement par carte, virement international ou Mobile Money.",
  },
];

export const formatEur = (n: number) => `${n.toLocaleString("fr-FR")} €`;
