# Rapport 4 : méthode de prospection « on ne vous trouve pas »

*Agent de recherche, 16/10/2026. Sources web secondaires sauf mention ; beaucoup de chiffres viennent d'éditeurs d'outils, donc intéressés. Golfe et Asie non couverts : valider le droit local avant d'y prospecter.*

## 1. Repérage
- Signal de marché : selon BrightLocal (SMB Marketing Report 2025), 40 % des PME *déclarent* un site dédié et 35 % une fiche Google Business Profile. Ce sont des réponses déclaratives (https://www.brightlocal.com/learn/local-seo/local-seo-statistics/).
- Recherche manuelle sur Google Maps (« coiffeur Leeds », « plumber Brisbane ») : on repère les fiches sans site, avec moins de 10 avis, peu de photos ou sans réponse aux avis, puis on vérifie le site éventuel avec PageSpeed. C'est gratuit et c'est la meilleure qualité de données, mais lent : environ 30 à 60 fiches qualifiées par heure (estimation).
- API Google Places : légale et payante, mais ses conditions interdisent de stocker durablement les données, donc pas de base de prospects durable (https://cloud.google.com/maps-platform/terms/maps-service-terms).
- Extracteurs Google Maps (Outscraper, Apify) : peu chers, mais contraires aux conditions de Google (risque de blocage, pas de recours), et les données sont souvent périmées.
- Annuaires (Yelp, TripAdvisor, Pages Jaunes, Yell, Yellow Pages AU) : utiles pour recouper les sources, en consultation manuelle seulement (l'extraction automatique est en général interdite).
- Instagram et TikTok : recherche par lieu ou par hashtag de ville. Bon signal : une fiche Maps active mais aucun compte social.
- Fiche non revendiquée (bouton « Vous êtes le propriétaire ? ») : l'argument le plus concret.
- Règle de preuve : faire les captures en navigation privée, avec la ville dans la requête, en notant la date et la requête exacte. Sinon, le « vous n'apparaissez pas » peut être faux.

## 2. La preuve qui convainc
- La personnalisation et les petits lots paient : selon Hunter (11 millions d'e-mails), 5,8 % de réponses pour 50 destinataires ou moins, contre 2,1 % au-delà de 1 000 (https://hunter.io/the-state-of-cold-email-2025).
- Mini-audit d'une page :
  1. capture de la requête « métier + ville » sur Maps ;
  2. comparaison avec 3 concurrents (avis, note, photos, site, Instagram) ;
  3. trois actions gratuites qu'il peut faire seul ;
  4. en option, une vidéo Loom de 60 s après une première réponse (efficacité non mesurée par une étude indépendante).
- Maquette gratuite : seulement pour les prospects qui ont répondu.
- Ce qui ressemble à une arnaque : « votre fiche va être suspendue », se dire « partenaire Google », faire payer la « vérification ». Google poursuit G Verifier pour ces pratiques, et Hiya recense plus de 2 000 signalements par mois (https://blog.hiya.com/scam-of-the-month-google-business-profile-scam). Il faut s'en démarquer explicitement.

## 3. Canaux et légalité
| Canal | Efficacité | Légalité |
|---|---|---|
| E-mail à froid | 0,45 % (Belkins) à 4,1 % (Hunter) de réponses, selon le mode de calcul | Voir ci-dessous |
| Téléphone | 5,4 % des appels aboutissent à une conversation, 4,6 % des conversations à un rendez-vous (Gong, source secondaire) | Royaume-Uni : vérifier TPS et CTPS (https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/business-to-business-marketing/). États-Unis : composition manuelle, entre 8 h et 21 h heure locale |
| Message Instagram ou Facebook | Pas de chiffre fiable | Faibles volumes, sinon blocage |
| WhatsApp | — | **À proscrire à froid** : Meta exige un consentement préalable (https://developers.facebook.com/documentation/business-messaging/whatsapp/getting-opt-in) |
| LinkedIn | Peu de commerçants y sont actifs | Automatisation interdite |
| Courrier postal | 2 à 5 % (ANA, source secondaire) | Peu encadré, et rare donc remarqué |
| Partenaires locaux (comptables, imprimeurs) | Non chiffré | Meilleur levier de confiance pour un prestataire étranger |
| Publicité Meta | Variable | Légale, à relier au diagnostic gratuit |

L'e-mail, zone par zone :
- **Royaume-Uni (PECR)** : vers une société ou une LLP, l'opt-out suffit (identification et désinscription). Les sole traders et les partnerships sont traités comme des particuliers : il faut leur consentement, et c'est le piège principal.
- **France** : l'opt-out suffit vers une adresse professionnelle si le message porte sur l'activité du destinataire, avec information, opposition et intérêt légitime (https://www.cnil.fr/fr/node/84701). Une adresse Gmail personnelle relève des règles des particuliers.
- **Allemagne (§7 UWG)** : consentement exprès, même entre professionnels. **L'e-mail à froid y est de fait interdit.**
- **États-Unis (CAN-SPAM)** : opt-out, objet non trompeur, adresse postale, désinscription traitée sous 10 jours ouvrés, amende jusqu'à 53 088 $ par e-mail (https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business).
- **Canada (CASL)** : consentement requis. Le consentement tacite n'existe que si l'adresse a été publiée par l'intéressé, sans mention de refus, et que le message concerne son rôle. Amende de 50 000 $ dans l'affaire Blackstone.
- **Australie (Spam Act)** : même logique de publication bien visible (à vérifier sur acma.gov.au).

## 4. Modèles (résumé)
- **E-mail** : « [Nom] sur Google Maps à [Ville] ». En navigation privée, le [date], la recherche « [métier] [ville] » montre trois concurrents en tête, et vous en position X, sans site ni photos (capture jointe). Suivent trois corrections gratuites, puis « répondez "oui" pour le diagnostic complet gratuit », l'adresse postale et « répondez "stop" ».
- **Relance unique à J+5** : « avez-vous vu la capture ? Sinon je ne vous écrirai plus. »
- **Message court sur les réseaux** : capture et 3 conseils gratuits.
- **Script d'appel** : « Je ne suis pas Google et je ne vends rien au téléphone. Puis-je vous envoyer la capture et 3 conseils par e-mail ? »
- Versions anglaises équivalentes.

## 5. Entonnoir
- Seul le taux de réponse est sourcé : 1 à 4 %, jusqu'à 5,8 % en petits lots.
- Rendez-vous (50 % des réponses) et signature (25 % des rendez-vous) : **hypothèses non sourcées**.
- Hypothèse prudente : 0,4 % des contacts deviennent clients, donc environ 270 contacts par semaine pour 4 clients par mois.
- Hypothèse favorable : 0,75 %, donc environ 135 contacts par semaine.
- Méthode : un premier message léger (capture seule), puis l'audit complet seulement pour ceux qui répondent. Mesurer ses propres taux dès 200 envois.

## 6. Risques et parades
- Ressembler aux arnaques « Google » : identité réelle, mentions légales, donner avant de demander.
- Blocage des comptes : domaine secondaire préchauffé, 30 à 50 e-mails par jour et par boîte, aucun WhatsApp à froid.
- Droit : appliquer la règle du pays du destinataire, exclure l'Allemagne de l'e-mail, filtrer les sole traders au Royaume-Uni, tenir une liste d'exclusion commune.
- Prix de 199 € suspect au Royaume-Uni ou en Australie : mettre en avant le pack à 549 € et l'abonnement à 129 €, avec des études de cas chiffrées.
- Prestataire étranger : horaires couverts, paiement Stripe, références vérifiables, partenaires locaux.
- Honnêteté : dire « en position X » plutôt que « absent » quand c'est le cas.

**Verdict de l'agent** : la bonne idée, à condition de travailler en petits lots très personnalisés, avec une conformité stricte par pays. Pour démarrer : e-mail et téléphone au Royaume-Uni (sociétés seulement), en France et aux États-Unis, plus des partenaires locaux.
