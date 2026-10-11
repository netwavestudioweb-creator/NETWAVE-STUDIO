import { NextResponse } from "next/server";
import { Resend } from "resend";
import { BUDGETS, CONTACT, SERVICE_CHOICES } from "@/data/site";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LIMITS = { name: 120, email: 200, phone: 40, message: 5000 };

// Limite simple par IP : 5 envois / 10 min. La mémoire est propre à chaque instance
// serverless, c'est un premier filtre, pas une protection absolue.
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 5;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > RATE_MAX;
}

const fail = (error: string, status: number) => NextResponse.json({ error }, { status });

const asText = (v: unknown) => (typeof v === "string" ? v.trim() : "");

function labelFor(list: readonly { id: string; label: string }[], id: string) {
  return list.find((item) => item.id === id)?.label ?? "Non spécifié";
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return fail("Requête invalide.", 400);
  }

  // Champ piège invisible pour les humains : un robot le remplit. On répond « succès »
  // sans rien envoyer pour ne pas lui indiquer qu'il a été détecté.
  if (asText(body.website)) {
    return NextResponse.json({ success: true });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return fail("Trop de demandes envoyées. Réessayez dans quelques minutes ou écrivez-nous sur WhatsApp.", 429);
  }

  const name = asText(body.name);
  const email = asText(body.email);
  const phone = asText(body.phone);
  const message = asText(body.message);
  const service = labelFor(SERVICE_CHOICES, asText(body.service));
  const budget = labelFor(BUDGETS, asText(body.budget));

  if (!name || name.length > LIMITS.name) return fail("Veuillez indiquer votre nom complet.", 400);
  if (!EMAIL_RE.test(email) || email.length > LIMITS.email) return fail("Veuillez fournir une adresse email valide.", 400);
  if (phone.length > LIMITS.phone) return fail("Numéro WhatsApp trop long.", 400);
  if (message.length < 10) return fail("Décrivez votre projet en au moins 10 caractères.", 400);
  if (message.length > LIMITS.message) return fail("Votre message est trop long (5 000 caractères maximum).", 400);

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`[contact] RESEND_API_KEY absente : envoi simulé pour ${email}.`);
      return NextResponse.json({ success: true, simulated: true });
    }
    // En production, ne jamais faire croire au prospect que sa demande est partie.
    console.error("[contact] RESEND_API_KEY manquante en production : demande non transmise.");
    return fail("Le formulaire est momentanément indisponible. Écrivez-nous sur WhatsApp ou par email.", 503);
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM || "NetWave Studio <onboarding@resend.dev>",
    to: [process.env.CONTACT_NOTIFICATION_EMAIL || CONTACT.email],
    replyTo: email,
    subject: `[Devis] ${name} — ${service}`,
    html: renderEmail({ name, email, phone, service, budget, message }),
  });

  if (error) {
    console.error("[contact] Erreur Resend :", error);
    return fail("L'envoi a échoué. Réessayez ou écrivez-nous sur WhatsApp.", 502);
  }

  return NextResponse.json({ success: true });
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderEmail(fields: Record<"name" | "email" | "phone" | "service" | "budget" | "message", string>) {
  const f = Object.fromEntries(Object.entries(fields).map(([k, v]) => [k, escapeHtml(v)])) as typeof fields;
  const row = (label: string, value: string) => `
    <tr><td style="padding:10px 0;border-bottom:1px solid #E7E4EE">
      <div style="font:600 11px monospace;letter-spacing:.08em;text-transform:uppercase;color:#5A5468">${label}</div>
      <div style="font:600 15px sans-serif;color:#140B26;margin-top:4px">${value}</div>
    </td></tr>`;

  return `<!DOCTYPE html><html><head><meta charset="utf-8"></head>
  <body style="margin:0;padding:24px;background:#F5F4F8;font-family:sans-serif">
    <table role="presentation" width="100%" style="max-width:600px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden">
      <tr><td style="background:#140B26;padding:24px 28px">
        <div style="font:700 20px sans-serif;color:#fff">Nouvelle demande de devis</div>
        <div style="font:600 12px monospace;color:#3DDBB0;margin-top:6px">NETWAVE STUDIO · FORMULAIRE</div>
      </td></tr>
      <tr><td style="padding:12px 28px 28px"><table role="presentation" width="100%">
        ${row("Nom", f.name)}
        ${row("Email", `<a href="mailto:${f.email}" style="color:#08745D">${f.email}</a>`)}
        ${f.phone ? row("WhatsApp", f.phone) : ""}
        ${row("Besoin", f.service)}
        ${row("Budget", f.budget)}
        <tr><td style="padding-top:16px">
          <div style="font:600 11px monospace;letter-spacing:.08em;text-transform:uppercase;color:#5A5468">Projet</div>
          <div style="margin-top:8px;padding:16px;background:#F5F4F8;border-radius:10px;font:14px/1.6 sans-serif;color:#3A3448;white-space:pre-wrap">${f.message}</div>
        </td></tr>
      </table></td></tr>
    </table>
  </body></html>`;
}
