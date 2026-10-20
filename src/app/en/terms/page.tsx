import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { TERMS_EN } from "@/data/legal";

export const metadata: Metadata = {
  title: TERMS_EN.title,
  description: TERMS_EN.intro,
  alternates: { canonical: "/en/terms" },
};

export default function Page() {
  return <LegalPage doc={TERMS_EN} eyebrow="Legal" updatedLabel="Effective from" />;
}
