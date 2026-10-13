import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CONTACT, PACKS, SITE_URL, TARGET_MARKETS } from "@/data/site";
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

const DESCRIPTION =
  "NetWave Studio, studio web et logiciel pour l'Afrique francophone : boutiques en ligne livrées en 10 jours, sites, logiciels métiers, assistants WhatsApp et visibilité Google. Côte d'Ivoire, Gabon, Cameroun, Sénégal. Prix affichés dès 149 €.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "NetWave Studio — Sites, boutiques en ligne et logiciels pour l’Afrique francophone",
    template: "%s | NetWave Studio",
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
    title: "NetWave Studio — Sites, boutiques en ligne et logiciels pour l’Afrique francophone",
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "NetWave Studio — Sites, boutiques en ligne et logiciels pour l’Afrique francophone",
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
      areaServed: [
        ...TARGET_MARKETS.map((m) => ({ "@type": "Country", name: m.country })),
        { "@type": "Country", name: "Bénin" },
        { "@type": "Country", name: "France" },
      ],
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
