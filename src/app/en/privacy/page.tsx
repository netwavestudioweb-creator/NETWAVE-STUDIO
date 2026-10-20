import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { PRIVACY_EN } from "@/data/legal";

export const metadata: Metadata = {
  title: PRIVACY_EN.title,
  description: PRIVACY_EN.intro,
  alternates: { canonical: "/en/privacy" },
};

export default function Page() {
  return <LegalPage doc={PRIVACY_EN} eyebrow="Legal" updatedLabel="Last updated:" />;
}
