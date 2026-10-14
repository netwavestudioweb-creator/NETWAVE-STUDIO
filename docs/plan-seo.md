# Plan SEO — NetWave Studio

*Octobre 2026.*

## Le diagnostic

| Constat | Gravité |
| --- | --- |
| **Le site n'apparaît dans aucun résultat** pour `site:netwave-studio.company` (vérifié sur un moteur de recherche web le 14/10/2026) : il n'est probablement pas indexé. | Bloquant |
| **Confusion de nom** : chercher « NetWave Studio » fait remonter nWave Studios (Bruxelles) et Net-Wave (Égypte). | Important |
| **Copie du site** accessible sur `netwave-studio.vercel.app` | Moyen (corrigé) |
| Base technique : robots.txt, sitemap de 13 pages, canonique et un seul H1 par page, `index, follow` partout | Sain |

La cause principale : un domaine récent, **jamais soumis à Google**, sans aucun lien qui pointe vers lui. Google ne peut pas classer ce qu'il ne connaît pas.

## Ce qui a été fait dans le code

1. **Redirection 301** de `netwave-studio.vercel.app` vers `www.netwave-studio.company` : plus de contenu en double.
2. **Titre de l'accueil** orienté recherche : « NetWave Studio — Création de site web dès 199 € : site, logo, vidéo en 10 jours ».
3. **Description courte** (≈ 155 caractères) pour ne pas être coupée dans Google.
4. **Données structurées enrichies** : nom alternatif (contre la confusion de marque), slogan, domaines d'expertise, services avec prix ; **fil d'Ariane et Service** avec offres sur chaque page métier ; **FAQ** sur l'accueil et les Tarifs.
5. **Balises de vérification** Google Search Console et Bing, via variables d'environnement.
6. **`/llms.txt`** : résumé du site pour les assistants IA (ChatGPT, Perplexity, Gemini), généré depuis les données, donc toujours à jour.
7. **IndexNow** : fichier de clé et commande `npm run indexnow` pour prévenir Bing (et les moteurs qui s'appuient sur lui) à chaque mise en ligne.

## Ce que vous devez faire (vos comptes, 1 h au total)

### Semaine 1 — être connu de Google (le plus important)

1. **Google Search Console** → [search.google.com/search-console](https://search.google.com/search-console)
   - Ajouter la propriété **Domaine** `netwave-studio.company` (vérification par un enregistrement DNS chez votre registrar ; c'est la méthode la plus solide).
   - Ou propriété **Préfixe d'URL** : copier le code de la balise « HTML » dans la variable Vercel `GOOGLE_SITE_VERIFICATION`, redéployer, valider.
   - Menu **Sitemaps** : soumettre `https://www.netwave-studio.company/sitemap.xml`.
   - **Inspection d'URL** : demander l'indexation de l'accueil, de /tarifs, /sites-web et des 6 pages métiers.
2. **Bing Webmaster Tools** → [bing.com/webmasters](https://www.bing.com/webmasters) : importer depuis Search Console (un clic), ou mettre le code dans `BING_SITE_VERIFICATION`. Bing alimente aussi la recherche de ChatGPT.
3. **Fiche Google Business Profile** → [business.google.com](https://business.google.com) : « NetWave Studio », catégorie *Concepteur de sites Web*, zone desservie, téléphone, site, photos des réalisations. Ensuite, ajouter son lien à `CONTACT` dans le code (je l'ajouterai aux données structurées).

### Semaine 2 — prouver que NetWave Studio existe (signaux de marque)

4. **Mêmes nom, adresse, téléphone partout** : LinkedIn (page entreprise), Facebook, Instagram, TikTok, WhatsApp Business. Chaque profil renvoie vers le site.
5. **Annuaires** : Sortlist, Codeur.com, Malt, ComeUp (profil prestataire), annuaires d'entreprises de Côte d'Ivoire, du Cameroun et du Bénin, Pages Jaunes Afrique.
6. **Le lien le plus facile** : un petit « Site réalisé par NetWave Studio » en pied de page des sites clients (Al Kareem, L'Osthof, L'Homme Sauvage, Bistrot Le République), avec lien vers votre site. Ce sont vos premiers liens entrants, sur des sites déjà en ligne.

### Mois 1 à 3 — contenu qui attire des recherches

Google classe les pages qui répondent à des questions. Des guides utiles, un par semaine, renvoyant vers les pages métiers :

| Guide | Recherche visée |
| --- | --- |
| Combien coûte un site web en Côte d'Ivoire en 2026 ? | prix site web Abidjan |
| Comment apparaître sur Google Maps avec son commerce | fiche Google commerce |
| Site web ou page Facebook : que choisir pour son restaurant ? | site restaurant |
| Vendre sur WhatsApp et sur un site : le guide | boutique WhatsApp |
| Les 7 pièges d'un devis de site internet | devis site internet |
| Protéger les données de ses clients : ce que dit la loi (CI, Sénégal, Cameroun) | protection des données site web |

Je peux créer une section `/guides` pour les publier.

## Comment mesurer

| Indicateur | Où | Objectif à 3 mois |
| --- | --- | --- |
| Pages indexées | Search Console → Pages | 13 / 13 |
| Recherche du nom « NetWave Studio » | Search Console → Performances | 1re position |
| Impressions totales | Search Console | En hausse chaque mois |
| Clics WhatsApp et demandes de diagnostic | Formulaire, WhatsApp | Suivi chaque semaine |
| Performance mobile | [pagespeed.web.dev](https://pagespeed.web.dev/analysis?url=https://www.netwave-studio.company) | 90+ |

Délais réalistes : indexation en quelques jours après la soumission ; positions sur le nom de marque en 2 à 6 semaines ; sur des recherches génériques (« création site web »), plusieurs mois et des liens entrants.
