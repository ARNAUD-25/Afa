# AFA — Act for Agriculture (version sans Node.js)

Cette version tourne sans Node.js, sans npm, sans étape de build. React, Firebase et la transformation du JSX se font directement dans le navigateur (chargés depuis un CDN dans `index.html`).

**Seul prérequis : Python** (déjà installé sur la plupart des ordinateurs — macOS et Linux l'ont par défaut ; sur Windows, installable en quelques clics depuis le Microsoft Store, sans droits admin).

## Ouvrir dans VS Code

1. `File → Open Folder...` → sélectionnez le dossier `afa-static`
2. Ouvrez le terminal intégré (`` Ctrl+` ``)

## Configurer Firebase (une fois)

Utilisez les mêmes identifiants que vos autres versions (mobile/web), pour partager les mêmes comptes et données :

1. Ouvrez `firebaseConfig.js`
2. Remplacez les valeurs `VOTRE_...` par celles de votre projet ([console.firebase.google.com](https://console.firebase.google.com) → icône `</>`)
3. Assurez-vous que **Firestore Database** (mode test + règles de `firestore.rules`) et **Authentication** (E-mail/Mot de passe) sont activés dans la console

## Lancer le serveur

Dans le terminal, à la racine du dossier `afa-static/` :

```bash
python -m http.server 8000
```

Si `python` n'est pas reconnu, essayez `python3 -m http.server 8000`.

Puis ouvrez **http://localhost:8000** dans votre navigateur.

Pour arrêter le serveur : `Ctrl+C` dans le terminal.

## Pourquoi un serveur et pas juste double-cliquer le fichier ?

Le fichier `app.js` est chargé par `index.html` via une URL relative (`src="app.js"`). Les navigateurs bloquent ce type de chargement quand on ouvre un fichier directement (`file://...`) pour des raisons de sécurité — d'où le besoin d'un petit serveur local, même basique, pour que tout se charge correctement.

## Connexion par téléphone (plus d'e-mail)

L'inscription et la connexion se font maintenant uniquement avec **numéro de téléphone + mot de passe** — le mot "e-mail" n'apparaît plus nulle part pour l'utilisateur.

**Comment ça marche techniquement** : Firebase ne propose pas nativement "téléphone + mot de passe" (seulement "e-mail + mot de passe" ou "téléphone + code SMS", qui coûte de l'argent — voir plus bas). Le code convertit donc chaque numéro en un e-mail technique invisible (ex. `243812345678@afa-app.local`), utilisé uniquement en coulisses. La personne ne voit et ne tape jamais cet e-mail.

**Pourquoi pas la vraie authentification par SMS** : elle n'est plus gratuite depuis 2024 chez Firebase (forfait payant obligatoire + coût par SMS envoyé, entre 0,01 $ et 0,46 $ selon le pays). La solution actuelle (téléphone + mot de passe) reste entièrement gratuite.

**Nouveaux champs à l'inscription** : numéro RCCM (optionnel), ville, province — en plus du nom et du profil déjà présents. Visibles ensuite dans l'onglet Profil.

**Limite à connaître** : deux numéros légèrement différents pour la même personne (ex. avec ou sans le +243) sont automatiquement reconnus comme un seul et même compte pour les numéros congolais. Ce n'est pas garanti pour un numéro d'un autre pays écrit de façon inhabituelle.

## Mot de passe oublié — ce qui est possible et ce qui ne l'est pas

**Sans e-mail ni SMS, il n'existe aucun moyen automatique de récupérer un mot de passe oublié.** C'est une vraie limite du choix "téléphone + mot de passe, gratuit". Voici ce qu'on a mis en place :

**1. Changer son mot de passe préventivement** : dans l'onglet Profil, tant qu'on est encore connecté, un bouton "Changer mon mot de passe" existe. Utile pour éviter d'oublier, mais ne sert à rien si on est déjà bloqué dehors.

**2. Un code de récupération à 4 chiffres**, demandé à l'inscription. Il ne débloque rien tout seul — c'est un moyen pour l'équipe AFA de vérifier oralement (par téléphone) qu'elle parle bien à la bonne personne, avant de l'aider.

**3. La vraie procédure en cas de blocage total** (aucun autre moyen n'existe) :
   - La personne contacte l'équipe AFA (onglet Contact) et donne son numéro de téléphone + son code de récupération à 4 chiffres
   - Quelqu'un ayant accès à la **console Firebase** (pas juste le rôle "admin" dans l'app — un vrai accès au projet Firebase) va dans **Authentication**, retrouve le compte via l'e-mail technique (numéro + `@afa-app.local`), vérifie que le code de récupération stocké dans Firestore (`users/{uid}`, champ `recoveryPin`) correspond bien à ce que la personne a donné, puis **supprime ce compte**
   - La personne se réinscrit avec le **même numéro de téléphone** et un nouveau mot de passe → un nouveau compte est créé
   - **Limite** : ses anciennes annonces restent liées à l'ancien compte (supprimé) et ne sont plus modifiables par la personne. Si besoin de les récupérer, l'admin peut changer manuellement le champ `sellerUid` de chaque annonce concernée dans Firestore pour le faire pointer vers le nouveau compte

Ce n'est pas un processus fluide, mais c'est honnête : sans backend/serveur, il n'existe pas de meilleure option automatisée.

## Modération des annonces (nouveau)

Chaque nouvelle annonce démarre avec le statut **"en attente"** — elle n'est **pas visible** des acheteurs tant que l'équipe AFA ne l'a pas validée.

**Côté vendeur** (Espace Fournisseur → Mes annonces) : chaque annonce affiche son statut — "En attente de validation", "Visible sur le marché", ou "Refusée par l'équipe".

**Côté admin** : nouvel onglet **"Modération"**, qui liste toutes les annonces en attente avec deux boutons, **Valider** ou **Refuser**.

**Modifier une annonce déjà approuvée la repasse automatiquement "en attente"** — pour éviter qu'un vendeur change le contenu après validation sans nouvelle relecture par l'équipe.

**Sécurité** : c'est appliqué à la fois dans l'app et dans `firestore.rules` — un vendeur ne peut jamais s'auto-valider, même en contournant l'interface (vérifié : seul le compte admin peut faire passer une annonce à "approuve").

## Diagnostic IA (nouveau)

Dans l'onglet **Conseils**, un nouveau bouton "Diagnostic IA" permet à n'importe qui (tous profils) de prendre en photo une plante malade et de recevoir un premier avis généré par l'IA (Gemini, via Firebase AI Logic) : ce qu'elle observe, la maladie probable, un conseil pratique.

**⚠️ Cette fonctionnalité n'a pas pu être testée en conditions réelles avant de vous la donner** (pas d'accès réseau disponible pour ça pendant son développement) — elle nécessite une configuration côté Firebase, et il est possible qu'un ajustement soit nécessaire une fois testée chez vous.

**Configuration nécessaire (une fois)** :
1. Console Firebase → cherchez **"AI Logic"** ou **"Gemini"** dans le menu (parfois sous "Build")
2. Suivez l'assistant de configuration guidée — il peut vous demander d'activer **Firebase App Check** (protection contre les abus) : suivez ses instructions, ça reste gratuit pour démarrer
3. Aucune clé secrète à coller nulle part — contrairement à d'autres services IA, Firebase AI Logic est conçu pour être appelé en toute sécurité directement depuis le navigateur

**Si ça ne fonctionne pas du premier coup** : ouvrez la console du navigateur (F12) pendant que vous testez le diagnostic, et copiez-moi le message d'erreur exact — je pourrai ajuster le code en conséquence.

**Limite connue** : ce n'est qu'un premier avis automatique, pas un diagnostic médical/agronomique fiable à 100% — le texte affiché le rappelle à chaque utilisation.

## Photos de produits (upload réel)

Le vendeur peut maintenant prendre une photo (appareil photo) ou en choisir une depuis sa galerie lors de la publication d'une annonce — plus un simple bouton factice.

**Configuration nécessaire (une fois)** :
1. Console Firebase → **Storage** (menu de gauche) → **Commencer/Get started** si ce n'est pas encore activé
2. Onglet **Rules** → collez le contenu de `storage.rules` → **Publier**

Sans cette étape, la publication fonctionne quand même, mais sans photo (l'annonce garde l'emoji par défaut, avec un message d'erreur discret).

## Structure du projet

```
afa-static/
├── index.html          # charge React/Babel/Firebase (CDN) + nos fichiers
├── firebaseConfig.js    # vos identifiants Firebase (à compléter)
├── app.js               # toute l'application (React, JSX transformé par le navigateur)
└── firestore.rules      # règles de sécurité à coller dans la console Firebase
```

## Nouveautés (vidéos, financier, commande acheteur, contact)

- **Vidéos de formation — maintenant fonctionnel** :
  - Nouvel onglet **Contenus**, réservé à l'admin : formulaire pour publier un conseil/une vidéo (titre, catégorie, texte, lien YouTube optionnel), avec liste des contenus déjà publiés et bouton supprimer
  - Le **Centre de connaissances** (onglet Conseils, visible par tous) affiche maintenant ces contenus en temps réel depuis la base de données, avec la vidéo intégrée et jouable directement dans l'app si un lien YouTube a été fourni
  - **Comment publier une vidéo** : dans Contenus, collez le lien YouTube complet (ex. `https://www.youtube.com/watch?v=...`) dans le champ prévu — la vidéo apparaît automatiquement pour tout le monde dans l'onglet Conseils
  - Durée recommandée : **3 à 5 minutes maximum** par vidéo (voir le rappel affiché dans le formulaire)
- **Financier** : nouvel onglet "Toutes les demandes" dans Finances, en plus du résumé — vue complète et en lecture seule de toutes les demandes (tous statuts), comme l'admin, mais sans pouvoir envoyer de devis ni changer un statut
- **Acheteur peut confirmer sa commande** : une fois un devis reçu, l'acheteur voit le détail (prix, quantité, date) dans "Mes demandes" et peut cliquer "Confirmer ma commande" ou "Annuler" — avant, seul l'admin pouvait confirmer/refuser
- **Onglet Contact** : nouvel onglet visible par tous les profils, avec les coordonnées de l'équipe AFA (WhatsApp/appel, e-mail) — à modifier directement dans le code (constante `AFA_CONTACTS` en haut de `app.js`) avec les vraies coordonnées

## Deux espaces vraiment distincts (changement important)

Suite à une nouvelle relecture du document de référence, l'app distingue maintenant **deux espaces séparés**, pas juste des boutons différents sur un écran partagé :

- **Espace Fournisseur** (nouvel onglet) : réservé aux profils vendeurs (Agriculteur, Coopérative, PME agricole, Transformateur, Fournisseur d'intrants). On y gère ses annonces (voir/modifier/supprimer) et on y publie de nouvelles annonces, avec un champ **capacité de livraison** en plus (demandé par le document)
- **Espace Acheteur** (nouvel onglet) : réservé aux profils acheteurs (Restaurant, Supermarché, Exportateur, Consommateur). Deux vues internes : "Parcourir" (le marché) et "Mes demandes" (suivi des demandes envoyées)
- **Transporteur, ONG, Institution financière** : gardent leur propre espace comme avant (Livraisons, ou vue d'ensemble dans Profil) — ce sont des profils que le document ne couvre pas explicitement, donc on les traite à part plutôt que de les forcer dans l'un des deux groupes
- Le Profil devient un écran de compte simple (infos, déconnexion), sans plus dupliquer les listes d'annonces/demandes qui vivent maintenant dans leur espace dédié

## Modèle "intermédiaire de confiance" (changement important)

Cette version applique un modèle différent des précédentes : **les acheteurs et les vendeurs n'entrent jamais directement en contact sur la plateforme**. Il n'y a plus de messagerie interne ni de bouton "Contacter". À la place :

1. Un acheteur consulte une annonce et clique sur **"Faire une demande"** (quantité, date souhaitée, lieu de livraison, précisions)
2. La demande part vers l'équipe AFA (rôle **admin**) — jamais vers le vendeur
3. L'équipe consulte la demande dans l'onglet **Demandes** (visible uniquement pour les comptes admin), vérifie la disponibilité, puis répond avec un devis (quantité disponible, prix, date de livraison, conditions)
4. L'acheteur suit le statut de sa demande dans **Profil → Mes demandes**

### Deux rôles internes à l'équipe AFA (non auto-inscriptibles)

- **admin** : traite les demandes des acheteurs, envoie les devis, confirme/refuse
- **financier** : suit les transactions confirmées et les devis en attente (lecture seule, ne peut ni envoyer de devis ni changer un statut) — pour le volet commissions/finances de l'équipe

### Paiement Mobile Money (informatif, pas de débit automatique)

Quand un acheteur envoie une demande, il choisit son opérateur (Orange Money, Airtel Money, M-Pesa) et indique son numéro. Ces informations sont visibles par l'admin (pour organiser l'encaissement une fois le devis confirmé) et par le financier (dans le rapport). Aucun débit réel n'a lieu depuis l'app — comme précédemment, un vrai paiement in-app nécessiterait un compte marchand chez l'opérateur.

### Mobile Money du vendeur (pour le reverser)

Dans l'onglet **Profil**, un vendeur (profil Agriculteur, Coopérative, PME agricole, Transformateur, Fournisseur d'intrants) peut désormais enregistrer son numéro Mobile Money. Ce numéro est automatiquement rattaché à chaque nouvelle annonce publiée, puis à chaque demande le concernant — l'admin et le financier voient à la fois le numéro de **l'acheteur** (pour encaisser) et celui du **vendeur** (pour lui reverser l'argent). Si le vendeur n'a pas encore renseigné son numéro, un message le lui rappelle dans son Espace Fournisseur.

**Limite à connaître** : le numéro est figé sur l'annonce au moment de sa publication. Si le vendeur change son numéro après avoir publié, les annonces déjà en ligne gardent l'ancien jusqu'à ce qu'elles soient republiées.

### Rapport téléchargeable

Dans l'onglet Finances, le bouton "Télécharger le rapport (CSV)" exporte toutes les transactions confirmées et les devis en attente (produit, acheteur, prix, méthode et numéro de paiement, lieu de livraison) dans un fichier `.csv` qui s'ouvre dans Excel, Google Sheets ou LibreOffice Calc.

### Créer un compte "équipe AFA" (admin ou financier)

Il n'y a **pas d'auto-inscription** en tant qu'admin (sécurité : personne ne doit pouvoir s'attribuer ce rôle lui-même). Pour donner ce rôle à un compte :

1. Créez d'abord un compte normal dans l'app (n'importe quel profil, ex. "Consommateur")
2. Console Firebase → **Firestore Database** → collection `users`
3. Trouvez le document correspondant à ce compte (repérable par son e-mail)
4. Modifiez le champ `role` : remplacez sa valeur par `admin` (traitement des demandes) ou `financier` (suivi financier, lecture seule)
5. Déconnectez-vous puis reconnectez-vous dans l'app avec ce compte — vous arrivez directement sur l'onglet "Demandes"

### Ce qui n'est pas encore fait dans ce modèle

- Pas de notification automatique quand une nouvelle demande arrive (l'équipe doit consulter l'onglet Demandes régulièrement)
- Le paiement et la logistique de livraison restent à organiser en dehors de l'app une fois le devis accepté (pas de bouton "Payer" ou "Confirmer" côté acheteur pour l'instant — c'est du texte informatif uniquement)
- La vérification des fournisseurs (téléphone, adresse, visite terrain) n'est pas encore un champ ou un processus dans l'app — à ajouter

## Fonctionnalités incluses

- Connexion/inscription avec les 12 profils (+ le rôle admin, non auto-inscriptible)
- Marché + Annuaire (fournisseurs, transporteurs, ONG, institutions financières — listing informatif, sans contact direct)
- Système de demandes avec devis (voir ci-dessus), écran Livraisons (coordonnée par l'équipe), Centre de connaissances
- Restrictions par profil (Publier, Faire une demande) et tableau de bord différencié
- Modifier/supprimer ses propres annonces

## Différences avec les versions Node.js

- Les icônes sont soit de simples SVG faits main, soit des émojis (pas de librairie externe type lucide-react)
- Pas de rechargement automatique en modifiant le code — rafraîchissez la page (`F5`) après chaque modification de `app.js`
- Le build de production (minifié, optimisé) n'existe pas ici ; pour aller plus loin dans cette direction, il faudrait repasser par Node.js/Vite plus tard
