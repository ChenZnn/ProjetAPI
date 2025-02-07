Structure de l'application
Les pages suivantes sont disponibles pour interagir avec l'API et effectuer différentes actions :

userDashboard.html : Gérer les utilisateurs (ajout, modification, suppression).
PageUtilisateur.html : S'inscrire ou se connecter.
PagePersonnage.html : Gérer les personnages (création, modification, suppression).
PageMessages.html : Gérer les messages.
PageConversation.html : Gérer les conversations entre utilisateurs et personnages.
PageJeu.html : Gérer les jeux (création, modification, suppression).
addJeu.html : Ajouter un nouveau jeu.

Fonctionnalités de l'API
1. Gestion des utilisateurs
POST /users : Créer un nouvel utilisateur (via userDashboard.html).
GET /users : Récupérer tous les utilisateurs.
GET /users/:id : Récupérer un utilisateur spécifique par son ID.
PUT /users/:id : Mettre à jour les informations d'un utilisateur.
DELETE /users/:id : Supprimer un utilisateur.
2. Inscription et Connexion
POST /auth/register : Inscription d'un utilisateur (via PageUtilisateur.html).
POST /auth/login : Connexion d'un utilisateur (via PageUtilisateur.html).
3. Gestion des personnages
POST /personnages : Créer un personnage (via PagePersonnage.html).
GET /personnages : Récupérer tous les personnages.
GET /personnages/:id : Récupérer un personnage spécifique par son ID.
PUT /personnages/:id : Mettre à jour les informations d'un personnage.
DELETE /personnages/:id : Supprimer un personnage.
4. Gestion des messages
POST /messages : Envoyer un message (via PageMessages.html).
GET /messages : Récupérer tous les messages.
GET /messages/:id : Récupérer un message spécifique par son ID.
DELETE /messages/:id : Supprimer un message.
5. Gestion des conversations
POST /conversations : Créer une conversation (via PageConversation.html).
GET /conversations : Récupérer toutes les conversations.
GET /conversations/:id : Récupérer une conversation spécifique par son ID.
DELETE /conversations/:id : Supprimer une conversation.
6. Gestion des jeux
POST /jeu : Ajouter un nouveau jeu (via PageJeu.html et addJeu.html).
GET /jeu : Récupérer tous les jeux.
GET /jeu/:id : Récupérer un jeu spécifique par son ID.
PUT /jeu/:id : Mettre à jour les informations d'un jeu.
DELETE /jeu/:id : Supprimer un jeu.


Étapes pour démarrer l'application
--------------------------------------------------------------------------------------------------
1.Extraire ou Cloner le Dossier de l'Application

Récupérez le dossier contenant tous les fichiers nécessaires à l'application. Si vous recevez un fichier compressé, extrayez-le dans un répertoire de votre choix.
--------------------------------------------------------------------------------------------------
2.Naviguer dans le Dossier du Projet

Ouvrez un terminal (ou une invite de commande) et allez dans le répertoire du projet où vous avez extrait ou cloné l'application :

cd chemin/vers/le/dossier
--------------------------------------------------------------------------------------------------
3.Installer les Dépendances

Installez toutes les dépendances nécessaires en exécutant la commande suivante :
npm install
--------------------------------------------------------------------------------------------------
4.Démarrer le Serveur

Une fois toutes les dépendances installées et la configuration terminée, vous pouvez démarrer l'application en exécutant la commande suivante :

npm start
Cette commande démarrera l'application et le serveur sera disponible sur http://localhost:3000.
--------------------------------------------------------------------------------------------------

ATTENTION ! 
Les options liés à l'ia (création d'image et communication) ne sont pas disponibles !