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
    default: "NetWave Studio — Studio d'Ingénierie Web & Logicielle d'Élite",
    template: "%s | NetWave Studio",
  },
  description:
    "NetWave Studio conçoit et déploie des applications web sur-mesure, des logiciels métiers ultra-performants et forme les futurs talents tech en Afrique de l'Ouest et à l'international.",
  keywords: [
    "développement web",
    "agence web",
    "studio d'ingénierie",
    "académie tech",
    "formation développement web",
    "Next.js",
    "architecture logicielle",
    "performance web",
    "Cotonou",
    "Bénin",
    "NetWave Studio",
  ],
  authors: [{ name: "NetWave Studio", url: siteUrl }],
  creator: "NetWave Studio",
  publisher: "NetWave Studio",
  alternates: {
    canonical: "./",
  },
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "NetWave Studio",
    title: "NetWave Studio — Studio d'Ingénierie Web & Logicielle d'Élite",
    description:
      "NetWave Studio conçoit et déploie des applications web sur-mesure, des logiciels métiers ultra-performants et propose une académie d'excellence tech.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "NetWave Studio — Studio d'Ingénierie Web & Logicielle d'Élite",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NetWave Studio — Studio d'Ingénierie Web & Logicielle d'Élite",
    description:
      "Conception web sur-mesure, logiciels métiers & académie tech d'excellence.",
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
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "NetWave Studio",
        url: siteUrl,
        logo: `${siteUrl}/logo.jpg`,
        email: "netwave.studio.web@gmail.com",
        telephone: "+2290150884670",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Cotonou",
          addressCountry: "BJ",
        },
        description:
          "Studio d'ingénierie web, logicielle, télécoms et académie de formation tech de référence.",
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "NetWave Studio",
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
