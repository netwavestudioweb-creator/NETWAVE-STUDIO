import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { CGV } from "@/data/legal";

export const metadata: Metadata = {
  title: CGV.title,
  description: CGV.intro,
  alternates: { canonical: "/cgv" },
};

export default function Page() {
  return <LegalPage doc={CGV} eyebrow="Informations légales" updatedLabel="En vigueur au" />;
}
