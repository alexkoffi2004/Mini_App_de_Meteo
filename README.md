# 🌤️ Mini Application Météo

Une application météo simple et interactive construite avec **React**, **Vite**, et **React Router DOM**. Elle permet de rechercher la météo actuelle d'une ville, d'afficher les informations météo, et de garder un historique des recherches.

## 🚀 Fonctionnalités

- 🔍 Recherche de la météo par ville
- 📍 Affichage de la météo actuelle (température, météo, humidité, vent…)
- 🕓 Historique des villes recherchées
- 🧠 Utilisation d’un hook personnalisé `useWeather` pour gérer les appels API
- 📦 Stockage local de l’historique avec `localStorage`
- 🌐 Navigation entre la page d'accueil et la page historique via `React Router DOM`

## 📸 Aperçu

![screenshot](./screenshot.png) <!-- Ajoute une capture d’écran ici si tu veux -->

---

## 🧑‍💻 Technologies utilisées

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- [OpenWeatherMap API](https://openweathermap.org/api)

---

## 🛠️ Installation

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/ton-utilisateur/mini-meteo-app.git
   cd mini-meteo-app

2. **Installer les dépendances**

```npm install```

3. **Ajouter votre clé API météo**

API_KEY = ta_clef_openweather

4. **ancer le projet**

```npm run dev```

# 🔗 API utilisée

Cette application utilise l’API OpenWeatherMap :

- Endpoint utilisé : ```https://api.openweathermap.org/data/2.5/weather```

- Exemple de requête :
```https://api.openweathermap.org/data/2.5/weather?q=Abidjan&appid=API_KEY&units=metric```

# 📌 Astuce

Le hook ```useWeather.js``` centralise la logique de récupération de la météo et permet de garder le code plus propre et réutilisable.

# 🙌 Auteur
Développé avec passion par Kouadio Jean Alex Koffi
✨ Fullstack Web Developer | Formation @GoMyCode

# 📜 Licence
Ce projet est open-source et libre d’utilisation.