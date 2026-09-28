import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.netwave-studio.company";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NetWave Studio — Site Officiel | Studio d'Ingénierie Web & Logicielle (Cotonou, Bénin)",
    template: "%s | NetWave Studio — Site Officiel",
  },
  description:
    "Site Officiel de NetWave Studio à Cotonou (Bénin). Studio d'ingénierie web, développement d'applications sur-mesure & logiciels métiers d'élite. Contact direct : +229 01 50 88 46 70 / netwave.studio.web@gmail.com.",
  keywords: [
    "NetWave Studio",
    "NetWave Studio Cotonou",
    "NetWave Studio Bénin",
    "Site officiel NetWave Studio",
    "développement web Cotonou",
    "agence web Bénin",
    "studio d'ingénierie",
    "académie tech",
    "formation développement web",
    "Next.js",
    "architecture logicielle",
    "performance web",
  ],
  authors: [{ name: "NetWave Studio", url: siteUrl }],
  creator: "NetWave Studio",
  publisher: "NetWave Studio",
  alternates: {
    canonical: "./",
  },
  icons: {
    icon: [
      { url: "/icon.svg?v=4", type: "image/svg+xml" },
      { url: "/icon.png?v=4", type: "image/png" },
      { url: "/favicon.ico?v=4", type: "image/x-icon" },
    ],
    shortcut: "/icon.svg?v=4",
    apple: [
      { url: "/apple-icon.png?v=4", sizes: "512x512", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "NetWave Studio — Site Officiel",
    title: "NetWave Studio — Site Officiel | Studio d'Ingénierie Web & Logicielle d'Élite",
    description:
      "Site Officiel de NetWave Studio à Cotonou, Bénin. Conception web sur-mesure, logiciels métiers & académie tech d'excellence. Tél : +229 01 50 88 46 70",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "NetWave Studio — Site Officiel | Studio d'Ingénierie Web & Logicielle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NetWave Studio — Site Officiel | Studio d'Ingénierie Web & Logicielle",
    description:
      "Conception web sur-mesure, logiciels métiers & académie tech d'excellence à Cotonou, Bénin. Tél : +229 01 50 88 46 70",
    images: ["/twitter-image"],
    creator: "@netwavestudio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
        "@id": `${siteUrl}/#organization`,
        name: "NetWave Studio",
        legalName: "NetWave Studio",
        alternateName: [
          "NetWave Studio — Site Officiel",
          "NetWave Studio Cotonou",
          "NetWave Studio Bénin",
          "NetWave Studio Web",
        ],
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/icon-512.png`,
          width: "512",
          height: "512",
          caption: "Logo Officiel NetWave Studio",
        },
        image: [`${siteUrl}/icon-512.png`, `${siteUrl}/logo.jpg`],
        email: "netwave.studio.web@gmail.com",
        telephone: "+2290150884670",
        priceRange: "149€ - 990€",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Cotonou",
          addressRegion: "Littoral",
          addressCountry: "BJ",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 6.3654,
          longitude: 2.4183,
        },
        areaServed: [
          {
            "@type": "Country",
            name: "Bénin",
          },
          {
            "@type": "AdministrativeArea",
            name: "Afrique de l'Ouest",
          },
          {
            "@type": "Country",
            name: "France",
          },
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+2290150884670",
          contactType: "customer service",
          availableLanguage: ["French", "English"],
        },
        sameAs: [
          "https://www.linkedin.com/in/alb%C3%A9ric-adrianododo",
          "https://github.com/netwavestudioweb-creator",
        ],
        description:
          "Site Officiel du Studio d'ingénierie web, développement d'applications sur-mesure, logiciels métiers & académie tech basé à Cotonou au Bénin.",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Offres d'Ingénierie & Tarifs NetWave Studio",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Kickstart Essential",
                description: "Site Vitrine Ultra-Rapide & Formulaire WhatsApp",
              },
              price: "149.00",
              priceCurrency: "EUR",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Business Scale & Automation",
                description: "Site complet, Paiement automatique & Assistant IA WhatsApp 24/7",
              },
              price: "449.00",
              priceCurrency: "EUR",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Enterprise Domination 360°",
                description: "Application Métier Sur-Mesure, Cybersécurité & Maintenance VIP",
              },
              price: "990.00",
              priceCurrency: "EUR",
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "NetWave Studio — Site Officiel",
        alternateName: ["NetWave Studio", "NetWave Studio Official"],
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        inLanguage: "fr-FR",
      },
      {
        "@type": "EducationalOrganization",
        "@id": `${siteUrl}/#academy`,
        name: "NetWave Studio Academy",
        url: siteUrl,
        description:
          "Académie de formation pratique et d'apprentissage des métiers du web, du développement logiciel et des technologies numériques.",
      },
    ],
  };

  return (
    <html
      lang="fr"
      data-scroll-behavior="smooth"
      className={`${poppins.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.ico?v=5" sizes="any" />
        <link rel="icon" href="/icon.svg?v=5" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon.png?v=5" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#281450" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#1F2937] selection:bg-[#0A9678]/20 selection:text-[#281450]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
