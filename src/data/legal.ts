/**
 * Pages légales (mentions légales, confidentialité, CGV) en français et en anglais.
 * Les engagements commerciaux (garantie, délais, paiement) viennent de site.ts et site-en.ts :
 * on ne les réécrit pas ici, pour qu'une offre changée là se répercute partout.
 */
import { CONTACT, FLAGSHIP } from "./site";
import { FLAGSHIP_EN } from "./site-en";

export type LegalSection = { title: string; paragraphs: string[] };
export type LegalDoc = { title: string; intro: string; updated: string; sections: LegalSection[] };

export const LEGAL_UPDATED = "21/10/2026";
const UPDATED_EN = "21 October 2026";

const PUBLISHER = "DODO Albéric Mantey Adriano";
const HOST_FR =
  "Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis (vercel.com). Le site est servi depuis le réseau mondial de Vercel.";
const HOST_EN =
  "Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, United States (vercel.com). The site is served from Vercel's global network.";

export const LEGAL_LINKS = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/confidentialite", label: "Confidentialité" },
  { href: "/cgv", label: "CGV" },
];

export const LEGAL_LINKS_EN = [
  { href: "/en/legal-notice", label: "Legal notice" },
  { href: "/en/privacy", label: "Privacy" },
  { href: "/en/terms", label: "Terms" },
];

export const MENTIONS_LEGALES: LegalDoc = {
  title: "Mentions légales",
  intro: "Informations sur l'éditeur et l'hébergeur du site www.netwave-studio.company.",
  updated: LEGAL_UPDATED,
  sections: [
    {
      title: "Éditeur du site",
      paragraphs: [
        `NetWave Studio, activité exercée par ${PUBLISHER}, ${CONTACT.city}.`,
        `E-mail : ${CONTACT.email} · Téléphone et WhatsApp : ${CONTACT.phoneDisplay}.`,
        `Directeur de la publication : ${PUBLISHER}.`,
      ],
    },
    { title: "Hébergeur", paragraphs: [HOST_FR] },
    {
      title: "Propriété intellectuelle",
      paragraphs: [
        "Les textes, visuels et le code de ce site appartiennent à NetWave Studio, sauf mention contraire. Toute reproduction sans accord écrit est interdite.",
        "Les noms et marques des entreprises citées appartiennent à leurs propriétaires.",
      ],
    },
    {
      title: "Indépendance",
      paragraphs: [
        "NetWave Studio est un prestataire indépendant. Il n'est ni Google, ni Meta, ni un partenaire officiel de ces sociétés, et ne vend aucune « vérification » de fiche Google : la fiche Google est gratuite.",
      ],
    },
    {
      title: "Données personnelles",
      paragraphs: ["Voir la page Confidentialité, qui décrit les données collectées et vos droits."],
    },
  ],
};

export const CONFIDENTIALITE: LegalDoc = {
  title: "Politique de confidentialité",
  intro:
    "Ce que nous faisons des informations que vous nous confiez, et comment exercer vos droits (règlement européen RGPD).",
  updated: LEGAL_UPDATED,
  sections: [
    {
      title: "Responsable du traitement",
      paragraphs: [`NetWave Studio (${PUBLISHER}), ${CONTACT.city}. Contact : ${CONTACT.email}.`],
    },
    {
      title: "Données collectées par le formulaire de contact",
      paragraphs: [
        "Nom, adresse e-mail, numéro WhatsApp (facultatif), pays, service souhaité, budget indicatif et votre message.",
        "Finalité : répondre à votre demande et préparer un devis. Base légale : mesures précontractuelles prises à votre demande.",
        "Aucune revente, aucune inscription à une newsletter sans votre accord.",
      ],
    },
    {
      title: "Prospection auprès des professionnels",
      paragraphs: [
        "Nous pouvons contacter des entreprises à partir de leurs coordonnées professionnelles publiques (registre des entreprises, annuaires, fiche Google), au sujet de leur présence en ligne. Base légale : notre intérêt légitime.",
        "Chaque message indique qui nous sommes et comment ne plus être contacté. Une simple réponse « stop » suffit : l'adresse est alors ajoutée à notre liste d'opposition.",
      ],
    },
    {
      title: "Destinataires et prestataires",
      paragraphs: [
        "Les données sont lues uniquement par NetWave Studio. Elles transitent par nos prestataires techniques : Vercel (hébergement du site), Resend (envoi des e-mails du formulaire) et Google (messagerie Gmail).",
        "Le studio est établi au Bénin et ces prestataires sont situés aux États-Unis : les données sont donc transférées hors de l'Union européenne, avec les garanties contractuelles proposées par ces prestataires.",
      ],
    },
    {
      title: "Durée de conservation",
      paragraphs: [
        "Demandes et échanges avec un prospect : 3 ans après le dernier contact. Données d'un client : pendant la relation commerciale, puis le temps imposé par les obligations comptables.",
      ],
    },
    {
      title: "Mesure d'audience, sans cookie",
      paragraphs: [
        "Le site utilise Vercel Web Analytics et Speed Insights, qui mesurent la fréquentation et la vitesse des pages de façon agrégée, sans cookie publicitaire. Aucun bandeau de consentement n'est donc nécessaire.",
      ],
    },
    {
      title: "Vos droits",
      paragraphs: [
        `Vous pouvez demander l'accès à vos données, leur rectification, leur effacement, leur portabilité, ou vous opposer à leur utilisation, en écrivant à ${CONTACT.email}. Réponse sous 30 jours.`,
        "Si vous estimez que vos droits ne sont pas respectés, vous pouvez saisir la CNIL (cnil.fr).",
      ],
    },
  ],
};

export const CGV: LegalDoc = {
  title: "Conditions générales de vente",
  intro:
    "Conditions applicables aux prestations de NetWave Studio : création de présence en ligne (site, fiche Google, réseaux sociaux, WhatsApp Business) et abonnements de suivi. Elles s'adressent aux professionnels.",
  updated: LEGAL_UPDATED,
  sections: [
    {
      title: "1. Commande",
      paragraphs: [
        "Toute prestation fait l'objet d'un devis écrit qui précise la formule, les options, le prix et le calendrier. La commande est ferme à l'acceptation écrite du devis et au paiement de l'acompte.",
        "En cas de contradiction, le devis signé l'emporte sur les présentes conditions.",
      ],
    },
    {
      title: "2. Prix",
      paragraphs: [
        "Les prix sont exprimés hors taxes, en euros ou dans la monnaie indiquée sur le devis, au taux du jour.",
        "NetWave Studio est établi hors de l'Union européenne : la TVA éventuellement due sur la prestation est déclarée par le client professionnel selon le mécanisme d'autoliquidation applicable dans son pays.",
        "Les noms de domaine, licences ou frais de tiers (par exemple l'API WhatsApp) sont indiqués à part sur le devis.",
      ],
    },
    {
      title: "3. Paiement",
      paragraphs: [
        "50 % à la commande, 50 % à la livraison, après vos tests. Paiement possible en 3 fois sans frais, selon l'échéancier indiqué sur le devis.",
        "Moyen de paiement : virement bancaire international (IBAN / SWIFT), sur présentation d'une facture.",
        "En cas de retard de paiement, des pénalités au taux de trois fois le taux d'intérêt légal sont dues, ainsi qu'une indemnité forfaitaire de 40 € pour frais de recouvrement (article L441-10 du Code de commerce).",
      ],
    },
    {
      title: "4. Délai de 10 jours ouvrés et garantie",
      paragraphs: [...FLAGSHIP.conditions],
    },
    {
      title: "5. Ce que le client fournit",
      paragraphs: [
        "Les contenus (photos, textes, menu, produits ou services) et les accès nécessaires, avant le jour 1.",
        "Une validation de la maquette sous 1 jour ouvré. Les comptes (nom de domaine, fiche Google, réseaux sociaux) sont ouverts au nom du client, qui en reste propriétaire.",
        "Le client garantit qu'il détient les droits sur les contenus qu'il fournit.",
      ],
    },
    {
      title: "6. Propriété et hébergement",
      paragraphs: [
        "Le nom de domaine est enregistré au nom du client. Après paiement complet, le client est propriétaire du code et des contenus créés pour lui ; les identifiants lui sont remis par écrit à la livraison.",
        "L'hébergement est assuré par le studio (la première année est incluse dans les formules, puis dans l'abonnement). À la fin de l'abonnement, le site est transféré vers le compte d'hébergement du client, sans frais de sortie.",
        "Sauf refus écrit du client, le studio peut citer la réalisation dans ses références.",
      ],
    },
    {
      title: "7. Garantie après livraison",
      paragraphs: [
        "30 jours de garantie écrite après la mise en ligne : les défauts sont corrigés sans frais. Une demande de retouches compte comme une « série » quand elle est envoyée en une seule liste. Les nouvelles fonctions font l'objet d'un devis.",
      ],
    },
    {
      title: "8. Abonnements de suivi",
      paragraphs: [
        "Les abonnements Présence et Visibilité sont sans engagement et résiliables chaque mois, par simple message. Leur prix reste le même la deuxième année.",
        "Le client est prévenu 30 jours avant chaque échéance annuelle (domaine, abonnement à l'année).",
      ],
    },
    {
      title: "9. Plateformes tierces et responsabilité",
      paragraphs: [
        "Google, Meta (Facebook, Instagram, WhatsApp) et les registrars appliquent leurs propres règles et délais. Le studio ne peut être tenu responsable de leurs décisions (vérification, suspension, classement).",
        "Le studio s'engage à mettre en œuvre tous les moyens prévus au devis pour améliorer la visibilité du client, mais ne garantit pas une position précise dans les résultats de Google.",
        "La responsabilité du studio est limitée au montant payé pour la prestation concernée.",
      ],
    },
    {
      title: "10. Données personnelles",
      paragraphs: ["Voir la page Confidentialité."],
    },
    {
      title: "11. Litiges",
      paragraphs: [
        "Les présentes conditions sont soumises au droit français. En cas de désaccord, les parties cherchent d'abord une solution amiable, par écrit, pendant 30 jours au moins.",
      ],
    },
  ],
};

export const LEGAL_NOTICE_EN: LegalDoc = {
  title: "Legal notice",
  intro: "Publisher and hosting information for www.netwave-studio.company.",
  updated: UPDATED_EN,
  sections: [
    {
      title: "Publisher",
      paragraphs: [
        `NetWave Studio, run by ${PUBLISHER}, Cotonou, Benin.`,
        `Email: ${CONTACT.email} · Phone and WhatsApp: ${CONTACT.phoneDisplay}.`,
        `Publication director: ${PUBLISHER}.`,
      ],
    },
    { title: "Hosting", paragraphs: [HOST_EN] },
    {
      title: "Intellectual property",
      paragraphs: [
        "Texts, visuals and code on this site belong to NetWave Studio unless stated otherwise. Reproduction without written consent is prohibited.",
      ],
    },
    {
      title: "Independence",
      paragraphs: [
        "NetWave Studio is an independent provider. It is not Google or Meta, nor an official partner of either, and never sells a 'Google verification': Google Business Profiles are free.",
      ],
    },
  ],
};

export const PRIVACY_EN: LegalDoc = {
  title: "Privacy policy",
  intro: "What we do with the information you share with us, and how to exercise your rights (UK GDPR and EU GDPR).",
  updated: UPDATED_EN,
  sections: [
    {
      title: "Controller",
      paragraphs: [`NetWave Studio (${PUBLISHER}), Cotonou, Benin. Contact: ${CONTACT.email}.`],
    },
    {
      title: "Data collected through the contact form",
      paragraphs: [
        "Name, email address, WhatsApp number (optional), country, service, indicative budget and your message.",
        "Purpose: to reply to your request and prepare a quote. Lawful basis: steps taken at your request before entering into a contract.",
        "No resale, and no newsletter without your consent.",
      ],
    },
    {
      title: "Business outreach",
      paragraphs: [
        "We may contact companies using their public business details (company registers, directories, Google listing) about their online presence. Lawful basis: our legitimate interest. In the UK we only email incorporated companies (Ltd, LLP).",
        "Every message says who we are and how to opt out. Replying 'stop' is enough: the address is added to our suppression list.",
      ],
    },
    {
      title: "Recipients and processors",
      paragraphs: [
        "Data is read only by NetWave Studio. It passes through our technical providers: Vercel (hosting), Resend (form emails) and Google (Gmail).",
        "The studio is based in Benin and these providers are in the United States, so data is transferred outside the UK and EU, under the contractual safeguards these providers offer.",
      ],
    },
    {
      title: "Retention",
      paragraphs: [
        "Enquiries: 3 years after the last contact. Client data: for the duration of the relationship, then as long as accounting obligations require.",
      ],
    },
    {
      title: "Cookie-free analytics",
      paragraphs: [
        "The site uses Vercel Web Analytics and Speed Insights, which measure traffic and page speed in aggregate without advertising cookies, so no consent banner is needed.",
      ],
    },
    {
      title: "Your rights",
      paragraphs: [
        `You can ask to access, correct, delete or port your data, or object to its use, by emailing ${CONTACT.email}. We reply within one month.`,
        "You may also complain to the ICO (ico.org.uk) in the UK, or to your local data protection authority in the EU.",
      ],
    },
  ],
};

export const TERMS_EN: LegalDoc = {
  title: "Terms of business",
  intro:
    "Terms for NetWave Studio services: online presence setup (website, Google Business Profile, social media, WhatsApp Business) and monthly care plans. They apply to business customers.",
  updated: UPDATED_EN,
  sections: [
    {
      title: "1. Orders",
      paragraphs: [
        "Every project starts with a written quote stating the package, options, price and schedule. The order is confirmed when the quote is accepted in writing and the deposit is paid.",
        "If the signed quote and these terms differ, the quote prevails.",
      ],
    },
    {
      title: "2. Prices",
      paragraphs: [
        "Prices exclude VAT and are stated in pounds sterling or the currency shown on the quote.",
        "NetWave Studio is established outside the UK and EU: any VAT due on the service is accounted for by the business customer under the reverse charge applicable in its country.",
        "Domain names, licences and third-party fees (such as the WhatsApp API) are shown separately on the quote.",
      ],
    },
    {
      title: "3. Payment",
      paragraphs: [
        "50% deposit at kickoff, 50% on final delivery after your tests. Payment in 3 interest-free instalments is possible, per the schedule on the quote.",
        "Payment method: international bank transfer (IBAN / SWIFT), against an invoice.",
      ],
    },
    { title: "4. 10-working-day timeline and guarantee", paragraphs: [...FLAGSHIP_EN.conditions] },
    {
      title: "5. What the customer provides",
      paragraphs: [
        "Content (photos, text, menu, products or services) and the access we need, before Day 1, and wireframe approval within 1 working day.",
        "Accounts (domain, Google Business Profile, social media) are opened in the customer's name, and the customer remains their owner.",
      ],
    },
    {
      title: "6. Ownership and hosting",
      paragraphs: [
        "The domain is registered in the customer's name. Once paid in full, the customer owns the code and content created for them; logins are delivered in writing at go-live.",
        "Hosting is managed by the studio (the first year is included in the packages, then in the care plan). When the plan ends, the site is transferred to the customer's own hosting account at no exit fee.",
      ],
    },
    {
      title: "7. Post-launch warranty",
      paragraphs: [
        "30 days of written warranty after go-live: defects are fixed at no cost. New features are quoted separately.",
      ],
    },
    {
      title: "8. Care plans",
      paragraphs: [
        "Presence and Visibility plans have no lock-in and can be cancelled any month by simple message. Their price stays the same in year 2. We remind you 30 days before any annual renewal.",
      ],
    },
    {
      title: "9. Third-party platforms and liability",
      paragraphs: [
        "Google, Meta (Facebook, Instagram, WhatsApp) and domain registrars apply their own rules and timelines. The studio is not liable for their decisions (verification, suspension, ranking), and does not guarantee a specific position in Google results.",
        "The studio's liability is limited to the amount paid for the service concerned.",
      ],
    },
    {
      title: "10. Disputes",
      paragraphs: [
        "If a disagreement arises, both parties first seek an amicable solution in writing for at least 30 days.",
      ],
    },
  ],
};
