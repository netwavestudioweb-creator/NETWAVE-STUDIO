# NetWave Studio — site vitrine

Site du studio NetWave (Cotonou, Bénin) : Next.js 16 (App Router), React 19, Tailwind CSS 4, Resend pour le formulaire de devis. Déployé sur Vercel.

## Démarrer

```bash
npm install
cp .env.example .env.local
npm run dev
```

En local, sans `RESEND_API_KEY`, l'envoi du formulaire est simulé.

## Variables d'environnement

| Variable | Rôle |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL publique (canonical, sitemap, Open Graph) |
| `RESEND_API_KEY` | **Obligatoire en production.** Sans elle, le formulaire répond par une erreur et propose WhatsApp |
| `RESEND_FROM` | Expéditeur des emails, sur un domaine vérifié dans Resend |
| `CONTACT_NOTIFICATION_EMAIL` | Adresse qui reçoit les demandes |

## Structure

```
src/
  app/                 pages (accueil, services, realisations, tarifs, a-propos, contact)
    api/contact/       envoi des demandes (validation, anti-spam, limite par IP)
  components/          Navbar, Footer, Logo, PricingCards, ContactForm, ui (primitives)
  data/site.ts         source unique : coordonnées, services, formules, projets, FAQ
docs/                  audit et guide SEO
```

Les prix, services et coordonnées se modifient uniquement dans `src/data/site.ts` : les pages, l'API de contact et les données structurées SEO s'y alimentent.

## Charte

- Couleurs (tokens Tailwind dans `globals.css`) : `ink` #140B26, `emerald` #08745D (boutons), `mint` #3DDBB0 (accent sur fond sombre), `violet` #5B3BB3.
- Polices : Bricolage Grotesque (titres), Instrument Sans (texte), JetBrains Mono (repères techniques).
- `/methodologie` redirige vers `/services#methode`.

## Vérifications

```bash
npm run lint
npm run build
```
