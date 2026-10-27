# Les agents de prospection : mode d'emploi

Trois agents se passent un même fichier, `prospection/prospects.xlsx`. Ce fichier n'est pas envoyé sur GitHub, car le dépôt est public.

| Agent | Ce qu'il fait | Ce qu'il ne fait jamais |
|---|---|---|
| **prospection** | Cherche de vrais commerces peu visibles, vérifie qu'ils existent, que ce sont des sociétés et qu'ils ont une adresse e-mail générique, les note et rédige l'e-mail | Envoyer quoi que ce soit ; inventer un prospect ou un chiffre |
| **lancer** | Prépare un lot (20 e-mails au plus), vous montre la liste et un **code**, puis envoie quand vous répondez avec ce code. Fait la relance unique à 5 jours ouvrés | Envoyer sans votre accord ; écrire sur WhatsApp ou les réseaux sociaux |
| **réponses** | Lit votre boîte mail (sans rien marquer ni supprimer), rattache chaque réponse au bon prospect, la classe, et vous dit qui a répondu et quoi faire, avec un brouillon de réponse | Répondre à votre place |

Les prospects sans adresse e-mail générique passent en statut **« manuel »** : vous les appelez, ou vous leur écrivez sur Facebook ou Instagram, vous-même.

## Mise en route (une seule fois, environ 30 minutes)

### 1. Envoyer depuis votre domaine (Resend)
Votre formulaire de contact utilise déjà Resend.
1. Sur [resend.com](https://resend.com), allez dans **Domains**, puis **Add domain**, et saisissez `netwave-studio.company`.
2. Resend affiche 3 ou 4 enregistrements DNS (SPF, DKIM). Ajoutez-les là où se gère votre domaine (Vercel, dans **Domains**, ou votre registrar), puis cliquez sur **Verify**.
3. Créez une clé API (**API Keys**, autorisation « Sending access »).

Conseil de professionnel : beaucoup de studios prospectent depuis un **deuxième domaine** (par exemple `netwave-studio.co`), pour protéger la réputation du domaine principal. C'est facultatif au début, avec de petits volumes.

### 2. Lire les réponses (Gmail)
Les réponses arrivent dans votre Gmail (adresse « Répondre à »).
1. Activez la **validation en deux étapes** sur votre compte Google.
2. Créez un **mot de passe d'application** : [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords), nom « Prospection ».
3. Dans Gmail, allez dans **Paramètres**, puis **Transfert et POP/IMAP**, et vérifiez que **IMAP est activé**.

Le mot de passe d'application ne sert qu'à **lire** la boîte. Vous pouvez le révoquer à tout moment.

### 3. Remplir le fichier `.env.local`
À la racine du projet, créez (ou complétez) le fichier `.env.local`, **vous-même**. Ne collez jamais ces valeurs dans une conversation.

```
RESEND_API_KEY=re_…
PROSPECTION_FROM=Albéric de NetWave Studio <hello@netwave-studio.company>
PROSPECTION_REPLY_TO=netwave.studio.web@gmail.com
PROSPECTION_SENDER_NAME=Albéric
PROSPECTION_POSTAL_ADDRESS=[votre adresse postale complète, Cotonou, Bénin]
IMAP_USER=netwave.studio.web@gmail.com
IMAP_APP_PASSWORD=[le mot de passe d'application de 16 lettres]
```

L'**adresse postale** est obligatoire : la loi exige une adresse réelle de l'expéditeur dans un e-mail commercial. Sans elle, l'agent « lancer » refuse de préparer un lot.

## Au quotidien
Dans Claude Code, demandez simplement :

1. **« Agent prospection : trouve 20 prospects dans le comté de Kerry »**. La première fois, il peut aussi reprendre et vérifier les 50 prospects de `prospects-irlande.xlsx`.
2. **« Agent lancer : prépare un lot »**. Il vous montre les destinataires, un e-mail complet et un code. Pour envoyer, répondez exactement : **« envoie le lot L20261027-1030 code 7KQ2PX »**. Pour annuler : « annule le lot … ».
3. **« Agent réponses : qui a répondu ? »**. Vous recevez la liste des intéressés avec un brouillon de réponse, les questions, les refus, les relances dues et les prospects à appeler vous-même.
4. 5 jours ouvrés après un envoi : **« Agent lancer : prépare les relances »**.

Rythme conseillé : un lot de 20 par jour ouvré au plus. Le script bloque à 30 e-mails par jour.

## Les protections intégrées au script
- **Aucun envoi sans le code du lot.** Un lot préparé un autre jour ne part pas : il faut en préparer un nouveau.
- **Irlande et Royaume-Uni** : seulement des sociétés (Ltd, DAC, LLP…), jamais d'indépendants.
- **Seulement des adresses génériques** (info@, bookings@…), jamais d'adresses nominatives.
- **Pays bloqués pour l'e-mail** : Allemagne, Autriche, Canada, Australie, Suisse et États-Unis (règles à part ou non vérifiées).
- **Un prospect non vérifié, ou sans source, ne part jamais.**
- **« STOP », refus et rebonds** vont dans une liste d'exclusion : ces adresses ne sont plus jamais contactées.
- **Une seule relance.** Pied de page légal automatique : identité, adresse, « nous ne sommes pas Google », désinscription.
- **Plafond de 30 e-mails par jour.** Le fichier est sauvegardé après chaque envoi.

## Commandes du script (pour information)
`python scripts/prospection/pipeline.py --help` liste les commandes :
- `init`, `import-irlande`, `add`, `update`, `list` ;
- `prepare`, `send`, `cancel` ;
- `fetch-replies`, `classify`, `report`.

Fermez `prospects.xlsx` dans Excel avant de lancer un agent : Excel bloque l'écriture.
