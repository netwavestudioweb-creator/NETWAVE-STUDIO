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

## Offres actuelles (en ligne depuis le 21/10/2026 sur le site anglais)
| Formule | Irlande et UE (€, site anglais) | Royaume-Uni (£) | Australie (A$) | France (€, site français, inchangé) |
|---|---|---|---|---|
| Lancement | 490 | 449 | 790 | 199 |
| Essentiel+ | 990 | 849 | 1 490 | 449 |
| Croissance (recommandée) | 1 490 | 1 290 | 2 290 | 549 |
| Prestige | dès 2 900 | dès 2 490 | dès 4 500 | dès 1 290 |
| Présence / Visibilité (par mois) | 59 / 179 | 55 / 159 | 89 / 279 | 39 / 129 |

- Le site anglais affiche l'euro partout ; le tableau « Prices in your country » (`MARKET_PRICES_EN` dans `site-en.ts`) donne les prix en £ et A$.
- Options du site anglais = options françaises en € (79, 149, 129…). Combo Croissance + 3 mois Visibilité : 1 749 € au lieu de 2 027 € (même remise qu'en France, environ 14 %). Ces deux points sont des choix de Claude, à confirmer par le fondateur.
- Paiement en 3 fois : arrondi à l'euro supérieur (164, 330, 497, 967).
- Logo, affiches et vidéo ne sont plus dans les packs : ils sont en options.
- Détails et justification : `docs/recherche-presence/6-packs.md`.

## Marchés
- **Ordre d'attaque** : 1. Royaume-Uni, 2. France et Belgique, 3. Québec (sans démarchage, à cause de la loi CASL).
- **Décision du 20/10/2026** : pour les premiers clients, le fondateur commence par la **France « désaturée »** (villes moyennes et zones rurales, peu d'agences web), avant le Royaume-Uni.
- **21/10/2026, nouveau souhait du fondateur** : ne plus viser la France (il n'y vit pas, trop de charges) mais des pays riches qui manquent de prestataires, et remonter les prix (il se sent sous-payé). **Décidé** (`docs/strategie-pays-et-prix.md`) : **Irlande d'abord, puis Australie** ; Golfe écarté ; nouvelle grille validée (Irlande 490 / 990 / 1 490 / dès 2 900 €, abonnements 59 et 179 €/mois ; Royaume-Uni et Australie dans le document). Irlande : e-mail permis vers l'adresse générique d'une société (pas les sole traders), registre CRO en open data. Australie : e-mail de prospection risqué (Spam Act), passer par le téléphone et la publicité. La grille est en ligne sur le site anglais depuis le 21/10/2026 (commit cb89fc1).
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
| **Prospects réels (à utiliser)** | `prospects-france-desaturee.xlsx` (20/10/2026, hors git) : 50 restaurants, coiffeurs et instituts indépendants sans site propre, dans 5 départements peu saturés (Pas-de-Calais, Aisne, Allier, Aude, Dordogne). Chaque ligne a son SIREN et une source. Onglets : méthode et droit de contact, Top 50 avec score et colonnes de suivi, indice de saturation des 96 départements (agences web pour 100 commerces : Paris 104, Cantal 17, médiane 28,5), 92 commerces écartés (dont 85 introuvables, piste pour un 2e lot). Vérifier chaque prospect sur Google Maps en navigation privée avant contact. |
| **Prospects Irlande (marché n° 1 depuis le 21/10/2026)** | `prospects-irlande.xlsx` (hors git) : 50 restaurants, cafés, salons et barbiers, tous des sociétés (Ltd), sans site propre, dans 5 comtés peu saturés (Louth, Tipperary, Donegal, Kerry, Mayo). Source : registre CRO en open data (API `opendata.cro.ie`, requêtes SQL possibles, champ `nace_v2_code`). Chaque ligne a son n° CRO, une source, un canal conseillé et une accroche en anglais. Saturation : Dublin 78 agences pour 100 commerces, Longford 29. Onglet « Écartés » : 134 commerces (dont 17 sociétés actives sans aucune présence en ligne, piste pour un 2e lot). L'adresse du registre est souvent celle du comptable. Méthode efficace : recherche web en mode approfondi (« extended »), la recherche simple trouve mal les petits commerces irlandais. |
| Anciens prospects (à NE PAS utiliser) | `prospects-top50.xlsx`, `docs/messages-prospection-top50.md`, `scripts/prospect_agent.py`, `Recherche/captures/`. Les 50 prospects sont **inventés** : ex. le numéro +44 113 496 0881 appartient à la plage que l'Ofcom réserve à la fiction. |
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
- 21/10/2026 : pages légales en ligne, en français et en anglais (`/mentions-legales`, `/confidentialite`, `/cgv`, `/en/legal-notice`, `/en/privacy`, `/en/terms`). Contenu dans `src/data/legal.ts` ; les CGV reprennent `FLAGSHIP.conditions`. Prix affichés HT. Page Contact : la liste de régions clientes non prouvée (« Maghreb, Caraïbes, océan Indien ») a été retirée.
- Prix face au marché français (sources vendeuses, ordres de grandeur) : site vitrine en freelance 2 000 à 4 000 € HT, gestion de fiche Google 80 à 300 € par mois en freelance. NetWave est nettement en dessous (199 à 549 €, 39 et 129 € par mois) : vendable, mais à surveiller (taux horaire bas, prix qui peut paraître suspect).
- Créés : `docs/pays-cibles-netwave.xlsx` (top 20 monde, top 10 par continent, colonnes fiabilité et statut) et `docs/coulisses-et-packs.md` (comment livrer chaque pack, heures, coûts, paiements).

## À faire (au 21/10/2026)
0. **Mentions légales à compléter** par le fondateur : statut juridique (entreprise individuelle, société…), numéro d'immatriculation au Bénin (IFU ou RCCM) et adresse postale complète. À ajouter dans `src/data/legal.ts`. Faire relire les CGV par un juriste quand ce sera possible.
0 bis. **Réalisations** : L'Osthof, L'Homme Sauvage et Le République sont en ligne sur des adresses en `.vercel.app`, pas sur le domaine des restaurants. Faire confirmer par le fondateur s'il s'agit de sites livrés à des clients ou de maquettes. Dans le second cas, les présenter comme « maquettes » sur le site.
0 ter. **Formulaire de contact** : la clé d'envoi existe en production, mais aucun envoi réel n'a été testé (le faire avec l'accord du fondateur).
1. **Vercel Pro** : passer l'équipe Vercel en Pro (20 $/mois) avant de livrer un client payant, car l'offre gratuite Hobby interdit l'usage commercial. Le site Al Kareem y est déjà hébergé. Action du fondateur, dans le tableau de bord Vercel.
2. **Paiements** : ouvrir un compte pro en euros (virement SWIFT) ; tester Wise et Payoneer.
3. **Pub de 42 s** (`brag-output/pub-45s`) : à caler sur le nouveau message (garantie en accroche), puis à rendre en MP4 avec l'accord du fondateur.
4. **À fournir par le fondateur** : sa photo, une adresse postale (obligatoire dans les e-mails de prospection aux États-Unis), les avis Google des 4 clients.
5. **À faire confirmer par un comptable** : TVA ou VAT selon le pays du client, facturation, revenus en devises.
6. **Les 50 prospects** : à vérifier un par un sur Google Maps avant tout envoi (voir « Où trouver quoi »). Ces fichiers sont exclus de git, car le dépôt GitHub est public.
7. **Modèles de documents** : les 18 modèles listés dans `docs/coulisses-et-packs.md`, en commençant par la liste des contenus et le questionnaire de démarrage.
