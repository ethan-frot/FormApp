# 🌟 Projet de gestion et de création de client avec Airtable

Ce projet est une application de gestion et de création de clients développée en **React**, permettant aux utilisateurs de soumettre leurs informations personnelles, lesquelles sont ensuite enregistrées dans une base **Airtable**.

## 📖 Description du projet

Ce projet a été réalisé dans le cadre d'un projet scolaire et n'a aucun but commercial. L'application permet aux utilisateurs de :

- 📝 Remplir un formulaire pour soumettre leurs informations personnelles
- ✅ Modifier et supprimer des informations existantes via une interface d'administration
- 📊 Visualiser des statistiques clients sous forme de graphiques dynamiques

Les informations soumises sont stockées dans Airtable, et l'application propose une interface simple pour gérer ces données.

## 🎯 Objectifs du projet

### Page Admin
- Créer une page permettant d'afficher la liste des clients.
- Intégrer des fonctionnalités pour modifier et supprimer des clients directement depuis l'interface d'administration.
- La fonctionnalité de modification permet de modifier uniquement les champs **Notes** et **Statut** des clients.

### Page Formulaire Client
- Créer un formulaire permettant aux clients de soumettre leurs informations (nom, prénom, email, numéro de téléphone).
- Lors de la soumission du formulaire, une automatisation dans Airtable est déclenchée pour enregistrer ces informations.

### Statistiques Clients
- Utiliser les fonctionnalités d'Airtable pour créer une interface de visualisation sous forme de graphiques.
- Ces graphiques afficheront des statistiques sur les clients : nombre total de clients, nombre par statut, etc.

## ⚙️ Fonctionnalités

- **Formulaire de soumission des informations :** Permet aux clients de soumettre leurs données personnelles telles que le nom, prénom, email, et téléphone.
- **Page d'Administration :** Interface permettant de gérer les clients, avec des options pour modifier et supprimer les informations des clients.
- **Modification des informations clients :** Le statut et les notes peuvent être modifiés directement depuis l'interface admin.
- **Suppression des clients :** Possibilité de supprimer les clients directement de la base de données via l'interface admin.
- **Validation des données :** Validation des informations du formulaire pour garantir la précision et l'intégrité des données soumises.
- **Automatisation Airtable :** Envoi automatisé des données vers Airtable lors de la soumission du formulaire client.

## 🛠️ Technologies utilisées

- **Frontend :** React
- **Gestion de l'état :** React Hooks
- **Base de données :** Airtable
- **Graphiques :** Airtable API pour les statistiques et visualisation des données
- **Styles :** Tailwind CSS
- **Icones :** FontAwesome (pour les icônes des boutons)

## 📥 Installation

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/ethan-frot/AirtableCustomerManagement.git
   cd AirtableCustomerManagement
   ```

2. Installez les dépendances :

   ```bash
   npm install
   ```

3. Créez un fichier .env à la racine du projet et ajoutez vos clés Airtable :
   ```bash
   AIRTABLE_API_KEY=your_api_key
   AIRTABLE_BASE_ID=your_base_id
   ```

4. Démarrez l'application :
   ```bash
   npm run dev
   ```

## ⚠️ Avertissement
**Ce projet est uniquement à des fins éducatives. Toute utilisation commerciale est interdite.**
Les emails envoyés via cette application sont à la responsabilité des utilisateurs ayant rempli le formulaire et copié le projet.
L'API du projet est publique et n'est utilisable que pour faire des tests. Merci de ne pas surcharger les demandes.
