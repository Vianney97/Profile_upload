Projet Upload photo de profil après connexion 

Le test couvre le scébario suivant:

- after visiting [www.welcometothejungle.com/fr/me/profile] webpage, clicking on [Se connecter] button, filling [Email, Mot de passe] inputs, clicking on [Se connecter> Modifier] buttons, uploading a [Photo de profil] file and clicking on [Enregistrer] button

Stack technique

- Javascript
- Dotenv pour la gestion des variables d'environnement


Installation et execution
- git clone https://github.com/Vianney97/Profile_upload
- cd nom-du-repo

Dépendances
- npm install

Créer un fichier .env
- Email= email@exemple.com
- PASSWORD=MotDePasse

Execution des tests
- npx playwright test
