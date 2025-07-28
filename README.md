# Projet Upload Photo de Profil après Connexion

## Description

Ce projet automatise le test suivant sur le site [welcometothejungle.com](https://www.welcometothejungle.com/fr/me/profile) :

- Visiter la page profil utilisateur  
- Cliquer sur le bouton **Se connecter**  
- Remplir les champs **Email** et **Mot de passe**  
- Cliquer sur les boutons **Se connecter** puis **Modifier**  
- Télécharger une photo de profil  
- Cliquer sur le bouton **Enregistrer**

## Technologies utilisées

- JavaScript  
- Dotenv (gestion des variables d'environnement)

## Installation

1. Cloner le dépôt :
   ```bash
   git clone https://github.com/Vianney97/Profile_upload.git
Aller dans le dossier du projet :

cd Profile_upload
## Installer les dépendances :

```bash
npm install

Configuration
Créer un fichier .env à la racine du projet avec le contenu suivant :

EMAIL=email@exemple.com
PASSWORD=MotDePasse

Installation des navigateurs:
npx playwright install

Exécution des tests

npx playwright test
