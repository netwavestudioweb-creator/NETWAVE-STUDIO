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
  { href: "/sites-web", label: "Sites web" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/a-propos", label: "Le studio" },
] as const;

/** Marchés visés (voir docs/plan-presence-en-ligne.md) : des pays où beaucoup de petites entreprises restent peu visibles en ligne. */
export const REGIONS = [
  { name: "Royaume-Uni & Irlande", examples: "Restaurants, salons, artisans, cabinets" },
  { name: "France, Belgique, Luxembourg", examples: "TPE, commerces de proximité, indépendants" },
  { name: "Canada & Québec", examples: "Commerces et services, en français ou en anglais" },
  { name: "Suisse romande", examples: "Petites entreprises et indépendants" },
  { name: "États-Unis & Australie", examples: "Commerces locaux et services de proximité" },
  { name: "Et ailleurs, à distance", examples: "Partout où vos clients vous cherchent sur Google" },
] as const;

/** Moyens de paiement acceptés, quelle que soit la monnaie du client. */
export const PAYMENT_METHODS = ["Carte bancaire", "Virement international"] as const;

/** Suggestions du champ Pays du formulaire (saisie libre acceptée). */
export const COUNTRY_SUGGESTIONS = [
  "Royaume-Uni",
  "Irlande",
  "France",
  "Belgique",
  "Luxembourg",
  "Suisse",
  "Canada",
  "États-Unis",
  "Australie",
] as const;

export const FLAGSHIP = {
  name: "Site web en 10 jours",
  href: "/sites-web",
  /** Prix d'entrée : la formule Lancement. */
  fromPrice: 199,
  days: 10,
  refundPercent: 20,
  promise:
    "Un site professionnel prêt en 10 jours ouvrés, pour votre restaurant, votre commerce, votre cabinet ou votre entreprise. Moins cher qu'une agence, aussi efficace.",
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
    "La garantie s'applique aux formules Lancement, Essentiel+ et Croissance (site, logo et visuels) ; la vidéo et les projets Prestige ont leur propre délai, fixé par écrit.",
    "Logo : 2 propositions et 2 séries de retouches ; chaque autre élément : 2 séries de modifications.",
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

export type ServiceId = "web" | "visibilite" | "whatsapp" | "maintenance";

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
    fromPrice: 199,
    tone: "emerald",
    summary:
      "Restaurant, commerce, salon, cabinet : un site professionnel en 10 jours ouvrés, ou 20 % remboursés.",
    description:
      "Le point de départ de votre présence en ligne : un site rapide, pensé d'abord pour le mobile, à votre nom. Menu et réservation pour un restaurant, catalogue et commande pour un commerce, rendez-vous pour un salon ou un cabinet. Livré en 10 jours ouvrés, ou 20 % remboursés.",
    points: [
      "Sites vitrines, restaurants, boutiques, prise de rendez-vous",
      "Réservation, commande ou contact par WhatsApp",
      "Nom de domaine, accès et fichiers à votre nom",
      "Chargement rapide sur mobile, référencement Google",
    ],
  },
  {
    id: "visibilite",
    title: "Google Maps & réseaux sociaux",
    fromPrice: null,
    tone: "violet",
    summary:
      "Être trouvé quand un client cherche votre métier dans votre ville : fiche Google, Maps, Facebook, Instagram, TikTok.",
    description:
      "Un site que personne ne voit ne vend pas. Nous créons ou complétons votre fiche Google, nous la relions à votre site et à vos réseaux sociaux, et nous suivons ce qu'elle vous rapporte : appels, itinéraires, clics.",
    points: [
      "Fiche Google créée ou optimisée : photos, horaires, catégories",
      "Pages Facebook, Instagram et TikTok cohérentes avec votre site",
      "Comptes sécurisés : double authentification, plusieurs administrateurs",
      "Rapport mensuel : appels, itinéraires, clics",
    ],
  },
  {
    id: "whatsapp",
    title: "WhatsApp Business",
    fromPrice: null,
    tone: "emerald",
    summary:
      "Vos clients vous trouvent, puis vous écrivent : compte WhatsApp Business, catalogue et réponses automatiques.",
    description:
      "Être trouvé ne suffit pas : il faut être joignable. Nous configurons votre WhatsApp Business (catalogue, message d'accueil, réponses rapides) et, si vous le souhaitez, un assistant qui répond 24 h/24 et prend les rendez-vous.",
    points: [
      "Compte WhatsApp Business configuré, avec catalogue",
      "Message d'accueil et réponses rapides",
      "Assistant 24 h/24 : réservations, commandes, questions",
      "Bouton WhatsApp sur votre site et votre fiche Google",
    ],
  },
  {
    id: "maintenance",
    title: "Suivi & abonnements",
    fromPrice: 39,
    tone: "violet",
    summary:
      "Une présence toujours à jour : site sauvegardé, fiche Google suivie, avis qui reçoivent une réponse. Sans engagement.",
    description:
      "Après la mise en ligne, nous restons là : mises à jour, sauvegardes, petites modifications, publications sur Google, réponses aux avis et rapport mensuel. Même prix la deuxième année, résiliable chaque mois.",
    points: [
      "Hébergement, nom de domaine et SSL renouvelés",
      "Fiche Google suivie, réponses aux avis",
      "Modifications de contenu incluses chaque mois",
      "Rapport mensuel de vos résultats",
    ],
  },
];

export type PackId = "lancement" | "essentiel-plus" | "croissance" | "prestige";

export type Pack = {
  id: PackId;
  name: string;
  tagline: string;
  price: number;
  installment: number;
  fromPrefix: boolean;
  featured: boolean;
  cta: string;
  features: string[];
  /** Bonus inclus (peu coûteux à produire, forte valeur perçue). */
  bonuses: string[];
};

/*
 * Stratégie « pop-corn » (docs/strategie-offres-par-profil.md § 9) : trois tailles.
 * Essentiel+ sert de point de comparaison : pour 100 € de plus, Croissance ajoute
 * la vidéo, le SEO local, la charte et le paiement en ligne.
 */
export const PACKS: Pack[] = [
  {
    id: "lancement",
    name: "Lancement",
    tagline: "Pour exister en ligne avec une image professionnelle.",
    price: 199,
    installment: 69,
    fromPrefix: false,
    featured: false,
    cta: "Choisir Lancement",
    features: [
      "Site vitrine de 1 à 3 pages",
      "Logo simple (2 propositions, 2 retouches)",
      "Fiche Google créée",
      "1 affiche ou flyer",
      "3 visuels réseaux sociaux",
      "Livré en 10 jours ouvrés, ou 20 % remboursés",
    ],
    bonuses: ["QR codes imprimables", "Page « lien en bio »", "Guide « 10 façons d'avoir des clients »"],
  },
  {
    id: "essentiel-plus",
    name: "Essentiel+",
    tagline: "Pour une présence complète, sans vidéo ni vente en ligne.",
    price: 449,
    installment: 150,
    fromPrefix: false,
    featured: false,
    cta: "Choisir Essentiel+",
    features: [
      "Site multi-pages",
      "Logo simple (2 propositions, 2 retouches)",
      "Fiche Google créée",
      "1 affiche + 1 flyer",
      "6 visuels réseaux sociaux",
      "Livré en 10 jours ouvrés, ou 20 % remboursés",
    ],
    bonuses: ["QR codes et page « lien en bio »", "WhatsApp Business configuré", "Adresse email professionnelle"],
  },
  {
    id: "croissance",
    name: "Croissance",
    tagline: "Pour vendre, être trouvé sur Google et se montrer partout.",
    price: 549,
    installment: 183,
    fromPrefix: false,
    featured: true,
    cta: "Choisir Croissance",
    features: [
      "Site multi-pages : restaurant, boutique, réservation…",
      "Logo + mini charte graphique",
      "SEO local : fiche Google optimisée, 5 mots-clés de votre ville",
      "Vidéo motion 15 – 20 s pour les réseaux",
      "1 affiche + 1 flyer (ou un menu)",
      "6 visuels + kit de modèles réutilisables",
      "Paiement en ligne par carte",
      "Assistant WhatsApp 24 h/24",
      "Rapport de statistiques à 30 jours",
      "Site et visuels en 10 jours ouvrés, ou 20 % remboursés",
    ],
    bonuses: [
      "Tous les bonus Essentiel+",
      "Carte de visite numérique",
      "Statut WhatsApp animé tiré de la vidéo",
      "30 jours d'assistance prioritaire",
    ],
  },
  {
    id: "prestige",
    name: "Prestige",
    tagline: "Pour une image et des outils de grande marque.",
    price: 1290,
    installment: 430,
    fromPrefix: true,
    featured: false,
    cta: "Demander une étude",
    features: [
      "Site ou application sur mesure (réservation, espace client, catalogue)",
      "Identité visuelle complète (logo, charte, papeterie)",
      "Vidéo promo 30 – 45 s avec voix off + 2 déclinaisons",
      "3 mois de SEO mensuel inclus",
      "Kit d'impression complet",
      "Tableau de bord des statistiques",
      "Point d'avancement chaque semaine, calendrier écrit",
    ],
    bonuses: ["Tous les bonus Croissance"],
  },
];

/** Les trois tailles comparées côte à côte ; Prestige s'affiche à part, comme ancre haute. */
export const MAIN_PACKS = PACKS.filter((p) => p.id !== "prestige");
export const PRESTIGE = PACKS.find((p) => p.id === "prestige")!;

/** Tableau comparatif des trois tailles (true = inclus, chaîne = détail). */
export const PACK_COMPARISON: { label: string; values: [string | boolean, string | boolean, string | boolean] }[] = [
  { label: "Site", values: ["1 à 3 pages", "Multi-pages", "Multi-pages, boutique, réservation"] },
  { label: "Logo", values: ["Logo simple", "Logo simple", "Logo + mini charte"] },
  { label: "Fiche Google", values: ["Créée", "Créée", "Optimisée + SEO local"] },
  { label: "Impression", values: ["1 affiche", "Affiche + flyer", "Affiche + flyer (ou menu)"] },
  { label: "Visuels réseaux sociaux", values: ["3", "6", "6 + kit de modèles"] },
  { label: "Vidéo motion 15 – 20 s", values: [false, false, true] },
  { label: "Paiement en ligne par carte", values: [false, false, true] },
  { label: "Assistant WhatsApp 24 h/24", values: [false, false, true] },
  { label: "WhatsApp Business configuré", values: [false, true, true] },
  { label: "Adresse email professionnelle", values: [false, true, true] },
  { label: "Rapport de statistiques", values: [false, false, true] },
  { label: "QR codes, page « lien en bio », guide", values: [true, true, true] },
];

/** Options à ajouter au moment de la commande (« le pop-corn »). */
export const OPTIONS = [
  { name: "Vidéo motion supplémentaire 15 – 20 s", price: 129, note: "Une vidéo par produit ou par offre" },
  { name: "Vidéo promo 30 s avec voix off", price: 249, note: "Prête pour la publicité" },
  { name: "Version anglaise du site", price: 79, note: "Hôtels, export, diaspora" },
  { name: "Retouche de 10 photos", price: 29, note: "Des photos nettes et lumineuses" },
  { name: "Campagne Facebook / Instagram lancée et suivie 30 jours", price: 99, note: "Budget publicitaire en plus" },
  { name: "Pack 10 visuels réseaux sociaux", price: 59, note: "Du contenu pour un mois" },
  { name: "Menu, carte de fidélité ou dépliant", price: 49, note: "Pour le commerce physique" },
  { name: "Adresse email professionnelle supplémentaire", price: 19, note: "Par an" },
] as const;

/** Abonnements mensuels, sans engagement ; à l'année, 2 mois offerts. */
export const SUBSCRIPTIONS = [
  {
    name: "Présence",
    monthly: 39,
    yearly: 390,
    features: ["Hébergement, sauvegardes et mises à jour", "Fiche Google suivie, réponses aux avis", "1 publication Google par mois", "Petites modifications incluses", "Rapport mensuel : appels, itinéraires, clics"],
  },
  {
    name: "Visibilité",
    monthly: 129,
    yearly: 1290,
    features: ["Tout Présence", "4 visuels réseaux sociaux par mois", "1 vidéo courte par mois", "1 article pour le référencement", "Rapport mensuel des statistiques"],
  },
] as const;

/** Combo pack + abonnement (« ticket + pop-corn + boisson »). */
export const COMBO = {
  name: "Combo Croissance + 3 mois Visibilité",
  regular: 549 + 3 * 129,
  price: 799,
} as const;

/** Le « ticket d'entrée » gratuit : un mini-audit d'une page, pas un simple appel. */
export const DIAGNOSTIC = {
  title: "Êtes-vous visible ? Diagnostic offert",
  points: [
    "Une capture datée de ce que voient vos clients quand ils cherchent votre métier dans votre ville, sur Google et Google Maps",
    "La comparaison avec 3 concurrents proches : avis, photos, site, réseaux sociaux",
    "3 actions gratuites que vous pouvez faire vous-même, même sans nous",
  ],
  cta: "Recevoir mon diagnostic gratuit",
  href: "/contact?sujet=diagnostic",
} as const;

/** Charte de confiance : répond aux plaintes les plus fréquentes contre les prestataires web (docs/recherche-presence/2-douleurs-clients.md). */
export const TRUST_CHARTER = [
  { title: "10 jours ouvrés, ou 20 % remboursés", text: "Le délai est écrit dans votre devis. S'il dépasse par notre faute, nous vous remboursons." },
  { title: "Tout est à votre nom", text: "Nom de domaine, accès au site, fiche Google, comptes réseaux et fichiers : identifiants remis par écrit à la livraison." },
  { title: "Prix écrit, et le même la 2e année", text: "Aucun frais caché. Nous vous prévenons 30 jours avant chaque échéance." },
  { title: "Sans engagement", text: "Abonnements résiliables chaque mois, sans frais de sortie. Vous partez avec tout." },
  { title: "Nous ne sommes pas Google", text: "La fiche Google est gratuite : nous facturons notre travail, jamais une « vérification ». Et jamais d'appel par robot." },
  { title: "Un humain qui répond", text: "Un interlocuteur nommé, joignable sur WhatsApp, qui répond sous 24 h ouvrées." },
] as const;

export const BUDGETS = [
  { id: "undetermined", label: "À définir ensemble" },
  { id: "base", label: "199 – 449 €" },
  { id: "intermediaire", label: "449 – 1 290 €" },
  { id: "avance", label: "1 290 – 2 500 €" },
  { id: "surmesure", label: "Plus de 2 500 €" },
] as const;

export const SERVICE_CHOICES = [
  { id: "diagnostic", label: "Diagnostic gratuit" },
  { id: "web", label: "Site web" },
  { id: "visibilite", label: "Google Maps & réseaux sociaux" },
  { id: "whatsapp", label: "WhatsApp Business" },
  { id: "abonnement", label: "Abonnement de suivi" },
  { id: "autre", label: "Autre / je ne sais pas" },
] as const;

export const METHOD_STEPS = [
  {
    key: "Cadrage",
    title: "Comprendre votre activité et ce que cherchent vos clients.",
    short: "Vos clients, votre ville, vos concurrents : un périmètre et un prix écrits, un calendrier daté.",
    points: ["Diagnostic de votre visibilité actuelle", "Périmètre et prix écrits", "Calendrier de 10 jours ouvrés"],
  },
  {
    key: "Maquette",
    title: "Vous validez avant que l'on construise.",
    short: "L'accueil et une page type, à vos couleurs, avec votre logo : vous validez.",
    points: ["Maquette de l'accueil et d'une page", "Logo et visuels proposés", "2 séries de retouches"],
  },
  {
    key: "Construction",
    title: "Site, fiche Google et réseaux avancent ensemble.",
    short: "Un lien privé pour suivre l'avancement ; fiche Google et comptes configurés selon votre formule.",
    points: ["Lien de prévisualisation privé", "Fiche Google et comptes configurés", "Tests sur votre téléphone"],
  },
  {
    key: "Livraison",
    title: "Mise en ligne, accès remis et garantie.",
    short: "Mise en ligne, identifiants remis par écrit, puis 30 jours de garantie écrite.",
    points: ["Mise en ligne sans coupure", "Identifiants et fichiers à votre nom", "30 jours de garantie écrite"],
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
    q: "C'est quoi, une présence en ligne ?",
    a: "C'est être trouvé quand un client cherche votre métier dans votre ville : sur Google, sur Google Maps et sur les réseaux sociaux. Puis pouvoir vous joindre tout de suite, par téléphone ou WhatsApp. Nous mettons en place les quatre : site, fiche Google, réseaux sociaux et WhatsApp Business.",
  },
  {
    q: "Vous travaillez avec des entreprises de mon pays ?",
    a: "Oui, où que vous soyez. Tout se fait à distance, par visio et WhatsApp, avec un lien de suivi privé pour voir votre projet avancer. Vous payez par carte ou virement international.",
  },
  {
    q: "Combien de temps prend un projet ?",
    a: "10 jours ouvrés garantis pour les formules Lancement, Essentiel+ et Croissance, à partir de la réception de vos contenus. Si nous dépassons par notre faute, nous vous remboursons 20 % du prix.",
  },
  {
    q: "Le site et le nom de domaine m'appartiennent-ils ?",
    a: "Oui, toujours. Le nom de domaine est enregistré à votre nom, et vous recevez par écrit les accès au site, à la fiche Google et aux comptes réseaux. Si vous arrêtez l'abonnement, vous partez avec tout.",
  },
  {
    q: "Vous travaillez pour Google ?",
    a: "Non, et personne ne peut vous vendre une « vérification » Google : la fiche est gratuite. Nous facturons uniquement notre travail (création, photos, textes, suivi), avec un prix écrit avant de commencer.",
  },
  {
    q: "Que se passe-t-il après la mise en ligne ?",
    a: "30 jours de garantie écrite pour tout réajustement, puis, si vous le souhaitez, un abonnement sans engagement : Présence à 39 € par mois ou Visibilité à 129 € par mois, au même prix la deuxième année.",
  },
];

export const PRICING_FAQ = [
  {
    q: "Le paiement en 3 fois a-t-il un coût ?",
    a: "Non. Le total est le même qu'au comptant, réparti sur trois mois.",
  },
  {
    q: "Pourquoi choisir Croissance plutôt qu'Essentiel+ ?",
    a: "Pour 100 € de plus, Croissance ajoute la vidéo motion, le référencement local, la charte graphique, le paiement en ligne, l'assistant WhatsApp et le rapport de statistiques. C'est la formule que nous recommandons à la plupart des commerces.",
  },
  {
    q: "Le nom de domaine et le site m'appartiennent-ils ?",
    a: "Oui. Le nom de domaine est enregistré à votre nom et vous recevez tous les accès et fichiers à la livraison. Aucune location, aucun engagement de durée.",
  },
  {
    q: "Qu'est-ce que le diagnostic gratuit ?",
    a: "Nous regardons ce que voient vos clients quand ils vous cherchent sur Google, avec une capture datée, nous vous comparons à 3 concurrents proches et nous vous donnons 3 actions gratuites à faire vous-même. Gratuit et sans engagement.",
  },
  {
    q: "Mon projet ne correspond à aucune formule.",
    a: "C'est fréquent. Décrivez votre besoin, nous revenons avec un devis détaillé et gratuit.",
  },
  {
    q: "Combien vais-je payer sur 12 mois ?",
    a: "Exemple avec Croissance et l'abonnement Présence : 549 € + 12 × 39 € = 1 017 € la première année, ou 939 € avec l'abonnement à l'année (390 €). La deuxième année, l'abonnement garde le même prix.",
  },
  {
    q: "Puis-je payer dans ma monnaie ?",
    a: "Oui. Les prix sont affichés en euros ; le devis peut être établi en livres, en dollars, en francs suisses ou dans votre monnaie, au taux du jour. Paiement par carte ou virement international.",
  },
];

export const formatEur = (n: number) => `${n.toLocaleString("fr-FR")} €`;
