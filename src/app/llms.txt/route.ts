import { CONTACT, MAIN_PACKS, PRESTIGE, SERVICES, SITE_URL, SUBSCRIPTIONS, TRUST_CHARTER, formatEur } from "@/data/site";
import { SECTORS } from "@/data/sectors";

// Résumé du site pour les assistants IA (ChatGPT, Perplexity, Gemini…), au format llms.txt.
// Généré depuis les données du site : les prix et services restent toujours à jour.
export const dynamic = "force-static";

export function GET() {
  const lines = [
    "# NetWave Studio",
    "",
    "> Studio de présence en ligne basé à Cotonou (Bénin), qui travaille à distance pour les petites entreprises du monde entier (Royaume-Uni, France, Belgique, Canada, Suisse…) : site web, fiche Google Maps, réseaux sociaux et WhatsApp Business. Livré en 10 jours ouvrés, ou 20 % remboursés. Nom de domaine et accès toujours au nom du client, abonnements sans engagement.",
    "",
    "## Formules",
    ...MAIN_PACKS.map((p) => `- ${p.name} : ${formatEur(p.price)} (ou 3 × ${formatEur(p.installment)}). ${p.features.join(", ")}.`),
    `- ${PRESTIGE.name} : dès ${formatEur(PRESTIGE.price)}. ${PRESTIGE.features.join(", ")}.`,
    ...SUBSCRIPTIONS.map((s) => `- Abonnement ${s.name} : ${formatEur(s.monthly)} par mois, sans engagement. ${s.features.join(", ")}.`),
    "",
    "## Services",
    ...SERVICES.map((s) => `- ${s.title}${s.fromPrice ? ` (dès ${formatEur(s.fromPrice)})` : " (sur devis)"} : ${s.summary}`),
    "",
    "## Métiers accompagnés",
    ...SECTORS.map((s) => `- [${s.name}](${SITE_URL}/sites-web/${s.slug}) : ${s.short}`),
    "",
    "## Engagements",
    ...TRUST_CHARTER.map((t) => `- ${t.title}. ${t.text}`),
    "",
    "## Pages principales",
    `- [Tarifs](${SITE_URL}/tarifs)`,
    `- [Sites web en 10 jours](${SITE_URL}/sites-web)`,
    `- [Réalisations](${SITE_URL}/realisations) : étude de cas Al Kareem Parfumerie (PageSpeed mobile 68 → 90+)`,
    `- [Diagnostic visibilité gratuit](${SITE_URL}/contact?sujet=diagnostic)`,
    "",
    "## Contact",
    `- WhatsApp : ${CONTACT.phoneDisplay}`,
    `- Email : ${CONTACT.email}`,
    `- Site : ${SITE_URL}`,
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
