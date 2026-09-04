import { NextResponse } from "next/server";
import { Resend } from "resend";

const serviceLabels: Record<string, string> = {
  web: "Développement Web & E-commerce (dès 100k FCFA)",
  logiciel: "Logiciels & Outils de gestion (dès 150k FCFA)",
  reseaux: "Infrastructures Réseaux & Télécoms (Sur devis)",
  ia: "IA conversationnelle & Automatisation (Sur devis)",
  audit: "Audit de performance & Sécurité",
};

const budgetLabels: Record<string, string> = {
  base: "100 000 — 300 000 FCFA",
  intermediaire: "300 000 — 800 000 FCFA",
  avance: "800 000 — 2 500 000 FCFA",
  surmesure: "> 2 500 000 FCFA / Projet d'envergure",
  undetermined: "À cadrer ensemble",
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, service, budget, message } = body;

    // Validation des champs obligatoires
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { error: "Veuillez renseigner votre nom complet." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Veuillez fournir une adresse email valide." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Veuillez décrire votre projet (au moins 10 caractères)." },
        { status: 400 }
      );
    }

    const serviceName = serviceLabels[service] || service || "Non spécifié";
    const budgetName = budgetLabels[budget] || budget || "Non spécifié";
    const recipientEmail =
      process.env.CONTACT_NOTIFICATION_EMAIL || "netwave.studio.web@gmail.com";

    const apiKey = process.env.RESEND_API_KEY;

    // Si aucune clé API n'est configurée (ex: environnement local initial),
    // on loggue et on informe proprement le client sans crash.
    if (!apiKey) {
      console.warn(
        `[NetWave Contact] Clé RESEND_API_KEY absente. Demande simulée reçue de ${name} (${email}).`
      );
      return NextResponse.json({
        success: true,
        simulated: true,
        message:
          "Demande enregistrée avec succès (mode pré-lancement). La clé RESEND_API_KEY sera activée en production.",
      });
    }

    const resend = new Resend(apiKey);

    const emailResponse = await resend.emails.send({
      from: "NetWave Studio <onboarding@resend.dev>",
      to: [recipientEmail],
      replyTo: email.trim(),
      subject: `[Devis NetWave Studio] ${name.trim()} — ${serviceName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1F2937; background-color: #F5F5F7; margin: 0; padding: 24px; }
              .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #E5E7EB; overflow: hidden; }
              .header { background: #281450; color: #ffffff; padding: 28px; text-align: left; }
              .header h1 { margin: 0; font-size: 20px; font-weight: 800; color: #ffffff; }
              .header p { margin: 6px 0 0 0; font-size: 13px; color: #0fb894; font-family: monospace; }
              .content { padding: 28px; }
              .row { margin-bottom: 16px; }
              .label { font-size: 11px; font-weight: 700; text-transform: uppercase; color: #6B7280; font-family: monospace; letter-spacing: 0.05em; }
              .value { font-size: 15px; font-weight: 600; color: #111827; margin-top: 4px; }
              .message-box { background: #F9FAFB; border: 1px solid #E5E7EB; border-left: 4px solid #0A9678; padding: 16px; border-radius: 8px; margin-top: 20px; font-size: 14px; white-space: pre-wrap; color: #374151; }
              .footer { padding: 18px 28px; background: #F5F5F7; border-top: 1px solid #E5E7EB; font-size: 12px; color: #6B7280; text-align: center; }
            </style>
          </head>
          <body>
            <div class="card">
              <div class="header">
                <h1>Nouvelle demande de devis</h1>
                <p>NETWAVE STUDIO // TRANSMISSION FORMULAIRE</p>
              </div>
              <div class="content">
                <div class="row">
                  <div class="label">Nom complet</div>
                  <div class="value">${escapeHtml(name.trim())}</div>
                </div>
                <div class="row">
                  <div class="label">Adresse Email (Répondre directement)</div>
                  <div class="value"><a href="mailto:${escapeHtml(email.trim())}" style="color: #0A9678; text-decoration: none;">${escapeHtml(email.trim())}</a></div>
                </div>
                <div class="row">
                  <div class="label">Domaine d'intervention</div>
                  <div class="value">${escapeHtml(serviceName)}</div>
                </div>
                <div class="row">
                  <div class="label">Budget envisagé</div>
                  <div class="value">${escapeHtml(budgetName)}</div>
                </div>
                <div class="row">
                  <div class="label">Description du projet</div>
                  <div class="message-box">${escapeHtml(message.trim())}</div>
                </div>
              </div>
              <div class="footer">
                Notification automatique générée depuis netwavestudio.com pour netwave.studio.web@gmail.com
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (emailResponse.error) {
      console.error("Erreur retournée par Resend:", emailResponse.error);
      return NextResponse.json(
        { error: emailResponse.error.message || "Erreur lors de l'envoi de l'email." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data: emailResponse.data,
    });
  } catch (error: any) {
    console.error("Erreur serveur API contact:", error);
    return NextResponse.json(
      { error: error?.message || "Erreur interne du serveur." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
