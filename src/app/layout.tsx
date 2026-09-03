import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
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

export const metadata: Metadata = {
  title: "NetWave Studio — Agence de Développement Web & Logiciel d'Élite",
  description:
    "NetWave Studio conçoit et déploie des applications web sur-mesure, robustes et ultra-performantes pour les entreprises exigeantes.",
  keywords: [
    "développement web",
    "agence web",
    "Next.js",
    "architecture logicielle",
    "performance web",
    "NetWave Studio",
  ],
  authors: [{ name: "NetWave Studio" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${poppins.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#1F2937] selection:bg-[#0A9678]/20 selection:text-[#281450]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
