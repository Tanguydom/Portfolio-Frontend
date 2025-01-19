# Utiliser une image officielle de Node.js
FROM node:18-alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier uniquement les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tous les fichiers du projet dans le conteneur
COPY . .

# Construire l'application pour la production
RUN npm run build

# Exposer le port 8080 pour Vite.js (ou le port défini dans vite.config.js)
EXPOSE 8080

# Commande pour démarrer l'application
CMD ["npm", "run", "dev"]
