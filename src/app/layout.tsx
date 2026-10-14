import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CONTACT, PACKS, REGIONS, SERVICES, SITE_URL } from "@/data/site";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-jetbrains",
  display: "swap",
});

// SEO : description courte (≈ 155 caractères) pour ne pas être coupée dans les résultats Google.
const DESCRIPTION =
  "Création de site web en 10 jours dès 199 € : site, logo, affiches et vidéo. Restaurants, commerces, cabinets, PME. Moins cher qu’une agence. Diagnostic gratuit.";

const HOME_TITLE = "NetWave Studio — Création de site web dès 199 € : site, logo, vidéo en 10 jours";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: "%s | NetWave Studio",
  },
  // Codes de vérification Google Search Console et Bing Webmaster Tools (variables d'environnement Vercel).
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    other: process.env.BING_SITE_VERIFICATION ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION } : undefined,
  },
  description: DESCRIPTION,
  authors: [{ name: "NetWave Studio", url: SITE_URL }],
  creator: "NetWave Studio",
  publisher: "NetWave Studio",
  alternates: { canonical: "/" },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "NetWave Studio",
    title: HOME_TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export const viewport = {
  themeColor: "#140B26",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${SITE_URL}/#organization`,
      name: "NetWave Studio",
      // Aide Google à distinguer la marque des homonymes (nWave Studios, Net-Wave…).
      alternateName: ["NetWave Studio Cotonou", "netwave-studio.company"],
      slogan: "Votre site web en 10 jours, moins cher qu'une agence.",
      description: DESCRIPTION,
      knowsAbout: [
        "Création de site web",
        "Site e-commerce",
        "Référencement local (SEO)",
        "Création de logo",
        "Motion design",
        "Logiciel de gestion",
        "Automatisation WhatsApp",
      ],
      makesOffer: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.summary },
        ...(s.fromPrice ? { price: s.fromPrice.toFixed(2), priceCurrency: "EUR" } : {}),
      })),
      url: SITE_URL,
      logo: `${SITE_URL}/icon-512.png`,
      image: `${SITE_URL}/icon-512.png`,
      email: CONTACT.email,
      telephone: CONTACT.phoneE164,
      priceRange: "€€",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cotonou",
        addressRegion: "Littoral",
        addressCountry: "BJ",
      },
      areaServed: REGIONS.map((r) => ({ "@type": "Place", name: r.name })),
      contactPoint: {
        "@type": "ContactPoint",
        telephone: CONTACT.phoneE164,
        contactType: "customer service",
        availableLanguage: ["French", "English"],
      },
      sameAs: [CONTACT.linkedin, CONTACT.github],
      founder: { "@type": "Person", name: "DODO Albéric Mantey Adriano" },
      foundingDate: "2023",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Formules NetWave Studio",
        itemListElement: PACKS.map((pack) => ({
          "@type": "Offer",
          name: pack.name,
          description: pack.tagline,
          price: pack.price.toFixed(2),
          priceCurrency: "EUR",
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "NetWave Studio",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "fr-FR",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      data-scroll-behavior="smooth"
      className={`${bricolage.variable} ${instrument.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white font-sans text-ink selection:bg-mint/40">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-3 focus:text-white"
        >
          Aller au contenu
        </a>
        <Navbar />
        <main id="contenu" className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
