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
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.png",
    apple: [
      { url: "/apple-icon.png", sizes: "512x512", type: "image/png" },
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
        alternateName: ["NetWave", "NetWave Studio Cotonou", "NetWave Studio Bénin"],
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/icon-512.png`,
          width: "512",
          height: "512",
        },
        image: `${siteUrl}/icon-512.png`,
        email: "netwave.studio.web@gmail.com",
        telephone: "+2290150884670",
        priceRange: "$$",
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
          "Studio d'ingénierie web, logicielle, télécoms et académie de formation tech de référence basé à Cotonou au Bénin.",
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "NetWave Studio — Site Officiel",
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
