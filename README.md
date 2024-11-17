# 🌟 Projet de gestion et de création de client avec Airtable

Ce projet est une application de gestion et de création de client développée en **React**, qui permet aux utilisateurs de soumettre leurs informations personnelles. Les données sont ensuite enregistrées dans une base **Airtable**.

## 📖 Description du projet

Ce projet a été réalisé dans le cadre d'un projet scolaire et n'a aucun but commercial. L'application permet aux utilisateurs de :

- 📝 Remplir un formulaire en plusieurs étapes
- ✅ Soumettre leurs informations personnelles et leurs informations de contact
- 🚨 Avertir l'équipe de support par email des nouvelles soumissions

Tous les emails envoyés depuis cette application sont à la décharge des utilisateurs qui ont rempli le formulaire.

## ⚙️ Fonctionnalités

- **Formulaire Multi-Étapes :** Les utilisateurs peuvent naviguer entre différentes étapes pour compléter leur inscription.
- **Validation des Données :** Chaque champ du formulaire est validé pour s'assurer que les informations saisies sont correctes.
- **Intégration avec Airtable :** Les informations soumises sont enregistrées dans une base de données Airtable.
- **Emails Automatisés :** L'équipe de support reçoivent des emails de confirmation.

## 🛠️ Technologies utilisées

- **Frontend :** React
- **Gestion de l'état :** React Hooks
- **Base de données :** Airtable
- **Styles :** Tailwind CSS

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

3. Créez un fichier .env à la racine du projet et ajoutez vos clés Airtable _(si ce n'est pas déjà fait)_ :

   ```bash
   AIRTABLE_API_KEY=your_api_key
   AIRTABLE_BASE_ID=your_base_id
   ```

4. Démarrez l'application :
   ```bash
   npm run dev
   ```

## ⚠️ Avertissement

**Ce projet est uniquement à des fins éducatives. Toute utilisation commerciale est interdite. Les emails envoyés via cette application sont à la responsabilité des utilisateurs ayant rempli le formulaire et copier le projet.**
**L'API du projet est public et n'est utilisable que pour faire des tests. Merci de ne pas surcharger les demandes.**
