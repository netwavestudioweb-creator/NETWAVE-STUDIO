import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/site";
import { SECTORS } from "@/data/sectors";

const ROUTES: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/sites-web", priority: 0.9, changeFrequency: "monthly" },
  ...SECTORS.map((s) => ({ path: `/sites-web/${s.slug}`, priority: 0.8, changeFrequency: "monthly" as const })),
  { path: "/realisations", priority: 0.9, changeFrequency: "monthly" },
  { path: "/tarifs", priority: 0.9, changeFrequency: "monthly" },
  { path: "/a-propos", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
