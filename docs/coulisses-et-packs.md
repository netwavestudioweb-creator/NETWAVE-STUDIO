# Coulisses et packs : comment livrer ce que l'on vend

*Rédigé le 20/10/2026. Synthèse de `docs/recherche-presence/5-coulisses.md` (comment tenir chaque promesse) et `6-packs.md` (contenu des packs). Les heures et les taux horaires sont des **estimations** tirées de ces rapports, pas des mesures : à remplacer par vos vrais temps après les premiers clients.*

## 1. En bref
- **Un pack = des livrables + une méthode.** Pour chaque promesse du site, ce document dit qui fait quoi, avec quel outil et en combien de temps.
- **Coûts fixes du studio** : environ **43 $ par mois** (Vercel Pro 20 $, Bitwarden 4 $, Plausible 19 $). Le reste des outils est gratuit. Les noms de domaine sont payés par chaque client.
- **Point faible** : au prix actuel, une heure de travail rapporte environ **10 à 21 €** selon le pack (voir la partie 6). Le temps réel est donc la donnée à surveiller en priorité.

## 2. Ce qui a été corrigé sur le site le 20/10/2026
| Problème relevé par le rapport 5 | État |
|---|---|
| Le site promettait « Carte bancaire » sans circuit confirmé | **Corrigé** : seul le virement bancaire international (IBAN / SWIFT) est annoncé, en français et en anglais. |
| Vérification Google et propagation du domaine à exclure de la garantie | **Déjà fait** avant le 20/10 (conditions FR et EN). |
| Calendrier (maquette à J2–3) contradictoire avec les conditions | **Corrigé** : J1 = appel de cadrage, une fois les contenus reçus ; 1 jour ouvré prévu pour valider la maquette ; au-delà, la date se décale d'autant. |
| Hébergement : le site disait « hébergement à votre nom » | **Corrigé** : « L'hébergement est assuré par le studio ; le code et le nom de domaine sont à vous. » |
| Sites clients sur Vercel gratuit (Hobby), interdit pour un usage commercial | **À faire par le fondateur** : passer l'équipe Vercel en Pro (20 $/mois), avant la livraison du premier client payant. |

## 3. Le calendrier des 10 jours ouvrés
| Jour | Étape | Ce que fait le studio | Ce que fait le client |
|---|---|---|---|
| Avant J1 | Contenus | Envoie la liste des contenus et le questionnaire | Envoie photos, textes, menu ou services |
| J1 | Cadrage | Appel visio ou WhatsApp ; écrit la date limite (J1 + 9 jours ouvrés) | Répond aux questions |
| J2–3 | Maquette | Présente l'accueil et une page type | **Valide sous 1 jour ouvré** |
| J4–8 | Construction | Pages, fiche Google, WhatsApp, réseaux ; lien de suivi privé | Ouvre ses comptes (domaine, fiche) et invite le studio |
| J9 | Tests | Corrige | Teste sur son téléphone |
| J10 | Mise en ligne | Remet les accès par écrit, avec une vidéo de prise en main | Paie le solde |

**Hors délai** : la vérification de la fiche par Google (carte postale jusqu'à 14 jours, examen jusqu'à 5 jours ouvrés), la propagation DNS, les validations des annuaires et la validation Meta de l'assistant WhatsApp.

**Outil de suivi** : un tableur avec la date J1 et la date limite `=SERIE.JOUR.OUVRE(J1;9)`. On y archive les preuves (date de réception des contenus, date de validation de la maquette). C'est ce qui protège le studio en cas de demande de remboursement.

## 4. Pack par pack
Prix France, prix Royaume-Uni entre parenthèses. Heures estimées par le rapport 6.

### Lancement : 199 € (299 £), « Être trouvé »
| Livrable | Comment | Outil | Heures |
|---|---|---|---|
| Site d'une page à sections | Modèle du studio adapté au métier | Next.js, GitHub, Vercel Pro | 6–8 |
| Domaine, SSL (1re année) | Le client ouvre son compte registrar et invite le studio | Cloudflare Registrar (sinon OVHcloud ou Gandi) | inclus |
| Fiche Google créée ou revendiquée, 10 photos | Client propriétaire principal, studio gestionnaire ; guide de tournage pour la vérification par vidéo | Google Business Profile | 1–2 |
| Boutons d'appel et WhatsApp | Liens directs | — | inclus |
| Search Console, balisage LocalBusiness | — | Search Console | 1–2 |
| Bonus : logo typographique, QR code d'avis, page « lien en bio » | — | Canva | 3–5 |
| **Total** | | | **12–18 h** |

À noter : au Royaume-Uni, 299 £ est sous le seuil des 300 £ jugé suspect par les clients. Ne pas le mettre en avant.

### Essentiel+ : 449 € (649 £)
Tout Lancement, plus :
| Livrable | Outil | Heures |
|---|---|---|
| Site jusqu'à 5 pages (au lieu d'une) | Next.js | 12–16 (au lieu de 6–8) |
| Fiche optimisée : catégories, services, 20 photos, 1re publication | Google Business Profile | 2–3 |
| WhatsApp Business avec catalogue de 10 articles | Application WhatsApp Business | 2–4 |
| Facebook et Instagram harmonisés, double authentification par application, 2 administrateurs | Meta Business Suite | 1–2 |
| 1 adresse e-mail professionnelle | Chez le registrar ou l'hébergeur de messagerie | 1–2 |
| QR code et message type pour les avis | Canva | inclus |
| **Total estimé** | | **21–32 h** |

Volontairement absent : réservation, paiement en ligne, annuaires, réponse aux avis, rapport. C'est ce qui pousse vers Croissance.

### Croissance : 549 € (799 £), recommandée
Tout Essentiel+, plus :
| Livrable | Outil | Heures |
|---|---|---|
| Site jusqu'à 8 pages avec le module du métier (menu et réservation, commande ou rendez-vous) et le paiement en ligne **du client** | Next.js, compte de paiement ouvert au nom du client | 22–30 |
| SEO local : 5 mots-clés de la ville, balisage, 10 annuaires (Bing Places, Apple Business Connect, Yell ou PagesJaunes…) | Comptes au nom du client | 3–4 |
| 4 publications Google programmées | Google Business Profile | 1–2 |
| Réponse aux avis le 1er mois, avis affichés sur le site | Fiche Google | 20 min par mois |
| Rapport à 30 jours | Relevé manuel les 2 premiers mois, puis Looker Studio | 30 min |
| Bonus : kit Canva, carte de visite numérique, vidéo de prise en main, 30 jours d'assistance prioritaire | Canva | 3–5 |
| **Total** | | **37–54 h** |

Le paiement en ligne de la formule Croissance est celui **du client** (sa propre solution, ouverte à son nom dans son pays). Il n'a rien à voir avec la façon dont le client paie NetWave.

### Prestige : dès 1 290 € (dès 1 690 £)
Sur devis : jusqu'à 15 pages ou plusieurs établissements, bilingue, boutique, pages locales, reprise d'un ancien site avec redirections, identité visuelle complète, 3 mois de Visibilité, point chaque semaine. **Délai fixé par écrit, hors garantie des 10 jours.**

## 5. Les abonnements
| | Présence : 39 € (49 £)/mois | Visibilité : 129 € (149 £)/mois |
|---|---|---|
| Hébergement sur Vercel Pro du studio, renouvellement du domaine, sauvegardes | ✓ | ✓ |
| Modifications | 30 min par mois | 30 min par mois |
| Publications Google | 2 | 4 |
| Publications Facebook et Instagram (photos du client) | — | 8 |
| Réponse à tous les avis, horaires des jours fériés | ✓ | ✓ |
| Rapport mensuel | ✓ | ✓ |
| Page de SEO local, campagne d'avis, appel trimestriel de 15 min | — | ✓ |

**Engagements publiés à tenir** : même prix la 2e année ; rappel 30 jours avant chaque échéance (échéancier dans Sheets et Agenda) ; réponse sous 24 h ouvrées (2 plages par jour sur WhatsApp Business : 9 h–12 h et 16 h–19 h, heure du Bénin, avec un message d'absence).

**En cas de résiliation** : le client garde son domaine, son code (dépôt GitHub à son nom) et ses comptes. Le studio transfère le projet Vercel vers l'équipe du client.

## 6. Ce que rapporte une heure de travail (estimation)
Prix du pack divisé par les heures estimées, avant les coûts fixes et les impôts.
| Pack | Prix | Heures estimées | Par heure |
|---|---|---|---|
| Lancement | 199 € | 12–18 | 11 à 17 € |
| Essentiel+ | 449 € | 21–32 | 14 à 21 € |
| Croissance | 549 € | 37–54 | 10 à 15 € |

- **Capacité** : 4 Croissance par mois représentent 150 à 215 h, soit environ un temps plein (rapport 6).
- **À surveiller** : la marge réelle viendra surtout des abonnements (Présence, Visibilité), qui demandent peu de temps chaque mois. Le combo Croissance + 3 mois de Visibilité (799 €, ou 1 099 £) sert à amorcer l'abonnement.
- **À mesurer dès le 1er client** : chronométrer chaque étape et remplacer ces estimations.

## 7. Encaisser les paiements depuis le Bénin
| Solution | Au Bénin ? | Décision |
|---|---|---|
| Virement SWIFT sur un compte pro en euros | Oui | **Circuit de départ**, avec facture |
| Wise, Payoneer | Non confirmé | À tester en parallèle |
| PayPal | Incertain | À tester |
| Stripe | Non | — |
| Stripe Atlas (société américaine) | 500 $ puis 100 $/an | Plus tard, avec l'avis d'un comptable |
| Paddle, Lemon Squeezy | — | Interdits pour les prestations de service |

**Règle** : n'ajouter un moyen de paiement sur le site (`PAYMENT_METHODS` dans `src/data/site.ts`) qu'**après** avoir reçu un vrai paiement par ce moyen.

**À faire confirmer par un comptable** : TVA ou VAT selon le pays du client, mentions obligatoires de la facture, revenus en devises, paiement en 3 fois.

## 8. La boîte à outils
| Outil | Usage | Coût |
|---|---|---|
| Vercel Pro | Hébergement de tous les sites clients | 20 $/mois |
| Bitwarden Teams | Coffre des identifiants, jamais de mot de passe par e-mail | 4 $/mois |
| Plausible | Statistiques sans cookies (jusqu'à 10 sites) | 19 $/mois |
| Cloudflare Registrar | Domaines, au nom et aux frais du client | prix coûtant |
| Google Forms, Drive, Sheets, Agenda, Looker Studio, Search Console, PageSpeed | Démarrage, suivi, rapports | gratuit |
| Google Business Profile, WhatsApp Business, Meta Business Suite, Canva | Livrables | gratuit |

## 9. Les 18 modèles de documents à préparer
Par ordre d'utilité pour le premier client :
1. Liste des contenus à fournir
2. Questionnaire de démarrage
3. E-mail « J1 et date limite »
4. Tableur de suivi des délais
5. Clause garantie et exclusions
6. Clause hébergement et sortie
7. Guide « créer votre compte registrar et m'inviter »
8. Guide de tournage pour la vérification Google
9. Fiche de remise des identifiants
10. Facture et avoir
11. Fiche de demande de retouches (une « série » = une liste envoyée en une fois)
12. Diagnostic d'une page
13. Liste de sécurisation des comptes
14. Messages WhatsApp (accueil, absence, réponses rapides)
15. Carte QR code pour les avis
16. Modèles de réponse aux avis
17. Modèle de rapport Looker Studio et feuille de relevé
18. Échéancier des renouvellements
