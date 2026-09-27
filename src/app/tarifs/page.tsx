import React from "react";
import TarifsContent from "@/components/TarifsContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarifs & Transparence — NetWave Studio",
  description:
    "Grille tarifaire transparente et devis sur-mesure pour vos projets web, e-commerce, logiciels et formations.",
  alternates: {
    canonical: "/tarifs",
  },
  openGraph: {
    title: "Tarifs & Transparence — NetWave Studio",
    description:
      "Des tarifs de base clairs (dès 100 000 FCFA / 165 $) et une estimation transparente pour vos projets numériques.",
    url: "https://www.netwave-studio.company/tarifs",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Tarifs NetWave Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarifs & Transparence — NetWave Studio",
    description: "Tarifications claires et devis sur-mesure sans frais cachés.",
    images: ["/twitter-image"],
  },
};

export default function TarifsPage() {
  return <TarifsContent />;
}
