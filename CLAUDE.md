@AGENTS.md

# NetWave Studio : mémoire du projet

Lu au début de chaque session. Mis à jour le 20/10/2026. Langue de travail : le français ; le fondateur n'est pas technicien.

## L'entreprise
- **NetWave Studio**, fondé par DODO Albéric Mantey Adriano, basé à Cotonou (Bénin), travaille 100 % à distance.
- **Une seule offre : la présence en ligne** des petites entreprises (restaurants, commerces, salons, cabinets, artisans) :
  - un site web ;
  - une fiche Google Maps ;
  - des réseaux sociaux ;
  - WhatsApp Business.
- **Promesse** : « Trouvé sur Google, contacté sur WhatsApp. En 10 jours ouvrés, ou 20 % remboursés. »
- **Retiré du site le 16/10/2026** : logiciels métiers, réseaux & télécoms, Mobile Money, FCFA.
- Contact : WhatsApp +229 01 50 88 46 70 · netwave.studio.web@gmail.com.

## Le site
- Next.js 16 (App Router), Tailwind v4, déployé sur Vercel. Domaine www.netwave-studio.company, dépôt GitHub netwavestudioweb-creator/NETWAVE-STUDIO, branche `main`.
- **Données centrales** : `src/data/site.ts` (français), `src/data/site-en.ts` (anglais), `src/data/sectors.ts` (pages métier). Toute offre ou tout prix se change ici, pas dans les pages.
- **Version anglaise** sous `/en` (accueil, services, pricing, about, contact), prix en £.
- **SEO** : JSON-LD, `/llms.txt`, sitemap, IndexNow (`npm run indexnow` après chaque mise en ligne). Voir `docs/plan-seo.md`.

## Offres actuelles
| Formule | France (€) | Royaume-Uni (£) |
|---|---|---|
| Lancement | 199 | 299 |
| Essentiel+ | 449 | 649 |
| Croissance (recommandée) | 549 | 799 |
| Prestige | dès 1 290 | dès 1 690 |
| Abonnement Présence / Visibilité | 39 / 129 par mois | 49 / 149 par mois |

- Logo, affiches et vidéo ne sont plus dans les packs : ils sont en options.
- Détails et justification : `docs/recherche-presence/6-packs.md`.

## Marchés
- **Ordre d'attaque** : 1. Royaume-Uni, 2. France et Belgique, 3. Québec (sans démarchage, à cause de la loi CASL).
- **Plus tard** : Suisse romande, États-Unis.
- **Exclus** : l'Afrique (pouvoir d'achat), l'Allemagne (e-mail de prospection interdit même entre entreprises), l'Asie non anglophone (langue et autres plateformes).
- Classement sur 100 de 67 pays dans `docs/recherche-presence/pays-*.json`.

## Où trouver quoi
| Sujet | Fichier |
|---|---|
| Plan d'action sur 90 jours, verdict d'expert | `docs/plan-presence-en-ligne.md` |
| Concurrents et leurs pubs (bibliothèque Meta) | `docs/recherche-presence/1-concurrents-pubs.md` |
| Douleurs et objections des clients | `docs/recherche-presence/2-douleurs-clients.md` |
| Top 10 des marchés, droit de la prospection | `docs/recherche-presence/3-marches.md` |
| Méthode de prospection, modèles de messages | `docs/recherche-presence/4-prospection.md`, `docs/kit-prospection-international.md` |
| Comment tenir chaque promesse, paiements depuis le Bénin | `docs/recherche-presence/5-coulisses.md` |
| Contenu des packs | `docs/recherche-presence/6-packs.md` |
| Pays notés (Europe et Amériques ; Asie, Moyen-Orient, Océanie) | `docs/recherche-presence/pays-europe-ameriques.json`, `pays-asie-moyen-orient-oceanie.json` |
| Prospects et messages | `prospects-top50.xlsx`, `docs/messages-prospection-top50.md`, `scripts/prospect_agent.py`, `Recherche/captures/`. **Attention** : les 50 prospects sont écrits en dur dans le script (noms, téléphones, e-mails, avis) sans source. Ils semblent inventés : à vérifier un par un sur Google Maps avant tout envoi. |
| Pubs vidéo HyperFrames (non suivies par git) | `brag-output/` : `pub-45s` (fusion, 41,7 s, pas encore rendue), `pub1-30s`, `composition` (20 s) |
| Anciens documents | `docs/marches-cibles.md`, `docs/strategie-offres-par-profil.md`, `docs/etude-prix-packs.md`, `docs/plan-contenu-30-jours.md` |

## Règles à toujours respecter
- **Ne jamais inventer** un chiffre, un avis, un client ou une statistique. Les exemples fictifs sont marqués « Exemple ». Preuves réelles : Al Kareem Parfumerie (PageSpeed mobile 68 → 90+), L'Osthof, L'Homme Sauvage, Bistrot Le République.
- **Prospection** :
  - jamais de WhatsApp à un inconnu (Meta exige son accord préalable) ;
  - au Royaume-Uni, e-mail seulement vers les sociétés (Ltd, LLP), pas vers les sole traders ;
  - pas d'e-mail de prospection en Allemagne ;
  - au Canada, la loi CASL exige un consentement ;
  - captures en navigation privée, datées ; écrire « en position X » plutôt que « absent » ;
  - ne jamais se présenter comme Google ni vendre une « vérification » de fiche.
- **Charte publiée** (engagements à tenir) : tout au nom du client, même prix la 2e année, rappel 30 jours avant chaque échéance, réponse sous 24 h ouvrées.

## Fait le 20/10/2026
- Site : « Carte bancaire » retiré ; seul moyen de paiement annoncé : virement bancaire international (IBAN / SWIFT). N'ajouter un moyen à `PAYMENT_METHODS` qu'après un vrai paiement reçu par ce moyen. Le « paiement par carte » de la formule Croissance reste : c'est celui du site **du client**.
- Site : calendrier et conditions alignés (J1 = cadrage une fois les contenus reçus ; 1 jour ouvré pour valider la maquette, au-delà la date se décale).
- Site : « L'hébergement est assuré par le studio ; le code et le nom de domaine sont à vous » (conditions et FAQ, FR et EN). Les packs disent « nom de domaine à votre nom, hébergement & SSL inclus ».
- Site : titres des pages anglaises corrigés (« NetWave Studio » apparaissait deux fois).
- Les exclusions de la garantie (vérification Google, propagation DNS) étaient déjà en ligne.
- Créés : `docs/pays-cibles-netwave.xlsx` (top 20 monde, top 10 par continent, colonnes fiabilité et statut) et `docs/coulisses-et-packs.md` (comment livrer chaque pack, heures, coûts, paiements).

## À faire (au 20/10/2026)
1. **Vercel Pro** : passer l'équipe Vercel en Pro (20 $/mois) avant de livrer un client payant, car l'offre gratuite Hobby interdit l'usage commercial. Le site Al Kareem y est déjà hébergé. Action du fondateur, dans le tableau de bord Vercel.
2. **Paiements** : ouvrir un compte pro en euros (virement SWIFT) ; tester Wise et Payoneer.
3. **Pub de 42 s** (`brag-output/pub-45s`) : à caler sur le nouveau message (garantie en accroche), puis à rendre en MP4 avec l'accord du fondateur.
4. **À fournir par le fondateur** : sa photo, une adresse postale (obligatoire dans les e-mails de prospection aux États-Unis), les avis Google des 4 clients.
5. **À faire confirmer par un comptable** : TVA ou VAT selon le pays du client, facturation, revenus en devises.
6. **Les 50 prospects** : à vérifier un par un sur Google Maps avant tout envoi (voir « Où trouver quoi »). Ces fichiers sont exclus de git, car le dépôt GitHub est public.
7. **Modèles de documents** : les 18 modèles listés dans `docs/coulisses-et-packs.md`, en commençant par la liste des contenus et le questionnaire de démarrage.
