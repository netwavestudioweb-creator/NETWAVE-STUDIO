import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { CONFIDENTIALITE } from "@/data/legal";

export const metadata: Metadata = {
  title: CONFIDENTIALITE.title,
  description: CONFIDENTIALITE.intro,
  alternates: { canonical: "/confidentialite" },
};

export default function Page() {
  return <LegalPage doc={CONFIDENTIALITE} eyebrow="Informations légales" updatedLabel="Mis à jour le" />;
}
