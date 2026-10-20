import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { MENTIONS_LEGALES } from "@/data/legal";

export const metadata: Metadata = {
  title: MENTIONS_LEGALES.title,
  description: MENTIONS_LEGALES.intro,
  alternates: { canonical: "/mentions-legales" },
};

export default function Page() {
  return <LegalPage doc={MENTIONS_LEGALES} eyebrow="Informations légales" updatedLabel="Mis à jour le" />;
}
