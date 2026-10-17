# Rapport 5 : comment ça marche en coulisses

*Agent de recherche, 16/10/2026. Les prix et règles ont été vérifiés sur les sites officiels quand une URL est donnée ; [non vérifié] signale le reste. Les temps par client sont des estimations.*

## Quatre points à corriger avant de vendre
1. **Vercel gratuit (Hobby) est réservé à un usage « personnel, non commercial ».** Les sites clients doivent passer sur Vercel Pro, à 20 $/mois (https://vercel.com/pricing).
2. **Stripe n'existe pas au Bénin** (https://stripe.com/global).
3. **La vérification de la fiche Google peut dépasser 10 jours** (carte postale sous 14 jours, examen jusqu'à 5 jours ouvrés). Elle doit être exclue de la garantie (https://support.google.com/business/answer/7107242).
4. **Le site promet « Carte bancaire »** (`PAYMENT_METHODS`), alors qu'aucun circuit de paiement par carte n'est confirmé.

## Récapitulatif
| Promesse | Process | Outils | Temps (estim.) | Risque |
|---|---|---|---|---|
| Diagnostic | Recherche manuelle en navigation privée, captures datées, modèle d'une page | Maps, PageSpeed, Canva ou Docs | 45–60 min | Image d'« arnaque Google » |
| Démarrage | Questionnaire, dossier partagé, date J1 écrite | Forms, Drive | 1 h | Litige sur le départ du délai |
| 10 jours ou 20 % | Date J1, date limite `=SERIE.JOUR.OUVRE(J1;9)`, preuves archivées | Tableur | 10 min | Remboursement |
| Tout à votre nom | Comptes ouverts par le client, studio gestionnaire | Cloudflare Registrar, GitHub, Vercel Pro, Bitwarden | 1–2 h | « Domaine pris en otage » |
| Fiche Google | Création ou revendication, vérification par vidéo du client | Google Business Profile | 1–2 h | Fiche suspendue |
| WhatsApp | Application gratuite ; assistant via l'API | WhatsApp Business, Cloud API ou WATI | 1 h, puis 4–8 h | Numéro bloqué |
| Réseaux | Double authentification par application, 2 administrateurs | Meta Business Suite | 1 h | Page piratée |
| Rapport mensuel | Relevé manuel les 2 premiers mois (l'API exige une fiche de plus de 60 jours et une approbation), Looker Studio | Fiche Google, Search Console, Plausible | 30 min/mois | Résiliation |
| Avis | Lien direct et QR code, demandés à tous les clients, sans récompense | Fiche Google | 20 min/mois | Sanctions |
| Rappel 30 jours | Échéancier et alertes | Sheets, Agenda | 5 min/mois | Perte de confiance |
| 24 h ouvrées | 2 plages par jour (9 h–12 h et 16 h–19 h heure du Bénin), message d'absence | WhatsApp Business | Quotidien | Avis « injoignable » |
| Garantie 30 jours | Une « série » = une liste envoyée en une fois ; bugs corrigés, nouvelles fonctions sur devis | Tableur | 1–2 h | Retouches sans fin |

## Points clés
- **Diagnostic** : depuis Cotonou, Google adapte les résultats au lieu de connexion. Écrire « recherche faite à distance, résultats indicatifs ». Pas d'extracteur ni de stockage de l'API Places.
- **Incohérence à corriger** : le calendrier met la maquette à J2–3, mais les conditions font partir le délai *après* sa validation. Choisir une seule version.
- **Exclusions de la garantie à écrire** : la vérification Google et la propagation du nom de domaine.
- **Domaine** : le client ouvre son propre compte registrar (Cloudflare vend au prix coûtant, https://www.cloudflare.com/products/registrar/ ; .fr, .ch et .be [non vérifiés], sinon OVHcloud ou Gandi). Ne jamais acheter le domaine via le compte Vercel du studio.
- **Hébergement** : tous les sites clients sur l'équipe Vercel Pro du studio (20 $/mois au total, inclus dans Présence) ; le code dans un dépôt au nom du client ; transfert vers l'équipe du client à la résiliation (https://vercel.com/docs/projects/transferring-projects). À écrire : « l'hébergement est assuré par le studio ; le code et le domaine sont à vous ».
- **Fiche Google** : le client est propriétaire principal, le studio gestionnaire ; délai de 7 jours après un transfert de propriété (https://support.google.com/business/answer/3403100). Fournir au client un guide de tournage pour la vérification par vidéo.
- **Identifiants** : Bitwarden (gratuit, Families à 3,99 $/mois, Teams à 4 $/utilisateur, https://bitwarden.com/pricing/business/), fiche de remise signée, jamais de mot de passe par e-mail.
- **Assistant WhatsApp** : depuis le 01/07/2025, les réponses dans les 24 h suivant le message du client sont gratuites ; seuls les messages modèles sont facturés (https://developers.facebook.com/docs/whatsapp/pricing). Restrictions sur les IA « généralistes » à vérifier (https://www.whatsapp.com/legal/business-solution-terms).
- **Statistiques du site** : Plausible, sans cookies, 9 $ (1 site), 14 $ (3 sites), 19 $ (10 sites) par mois (https://plausible.io).
- **Avis** : règles Google (https://support.google.com/contributionpolicy/answer/7400114) et FTC.

## Recevoir les paiements depuis le Bénin
| Solution | Au Bénin ? | Notes |
|---|---|---|
| Stripe | **Non** | — |
| Stripe Atlas | Société américaine | 500 $ puis 100 $/an, obligations fiscales aux États-Unis (https://stripe.com/atlas) |
| PayPal | Incertain | Tester l'ouverture d'un compte |
| Wise | Bénin non exclu, ouverture non confirmée | Essayer |
| Payoneer | [non vérifié] | Environ 1 % à la réception chez les voisins |
| Paddle | Accepté | **Pas pour les prestations humaines** |
| Lemon Squeezy | Virements possibles | **Interdit les services**, dont la conception web |
| Virement SWIFT | Oui | Frais bancaires [non vérifiés] |

Circuit conseillé pour commencer :
1. Un compte professionnel en euros dans une banque béninoise et des virements SWIFT avec facture.
2. En parallèle, tester Payoneer et Wise.
3. Retirer « Carte bancaire » du site tant que rien n'est confirmé.
4. Envisager Stripe Atlas seulement plus tard, avec l'avis d'un comptable.

**À faire confirmer par un comptable** : TVA ou VAT selon le pays du client (probablement autoliquidée par le client professionnel), mentions obligatoires de la facture béninoise, revenus en devises, paiement en 3 fois.

## Boîte à outils
Vercel Pro 20 $ + Bitwarden 4 $ + Plausible 19 $, soit **environ 43 $/mois**. Gratuits : Forms, Drive, Sheets, Agenda, Looker Studio, Search Console, PageSpeed, fiche Google, WhatsApp Business, Meta Business Suite, Canva. Les domaines sont payés par chaque client ; l'API WhatsApp est refacturée.

## Modèles de documents à créer (18)
1. Diagnostic d'une page
2. Questionnaire de démarrage
3. Liste des contenus à fournir
4. E-mail « J1 et date limite »
5. Tableur de suivi des délais
6. Clause garantie et exclusions
7. Guide « créer votre compte registrar et m'inviter »
8. Guide de tournage pour la vérification Google
9. Fiche de remise des identifiants
10. Clause hébergement et sortie
11. Liste de sécurisation des comptes
12. Messages WhatsApp (accueil, absence, réponses rapides)
13. Modèle de rapport Looker Studio et feuille de relevé
14. Carte QR code pour les avis
15. Modèles de réponse aux avis
16. Échéancier des renouvellements
17. Facture et avoir
18. Fiche de demande de retouches
