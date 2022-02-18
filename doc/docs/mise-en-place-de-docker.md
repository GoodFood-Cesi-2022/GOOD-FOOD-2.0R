# Mise en place de Docker

## Création de l'image Docker de l'application
### Création du Dockerfile  

A la racine du projet où se trouve le fichier package.json, il faut créer un fichier "Dockerfile" sans extension.

A l'intérieur, enregistrer le code suivant :  

`FROM node:16.13.2
WORKDIR /GOOD-FOOD-2.0R
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
CMD ["npm", "start"]`

### Build de l'image
#### Création de l'image
Pour builder l'image décrite dans le Dockerfile, il faut simplement taper la commande suivante.

`docker build -t goodfood .`


#### Démarrage du container avec l'image
Nous exécutons le nouveau conteneur en mode "détaché" (en arrière-plan) et créons un mappage entre le port 3000 de l'hôte et le port 3000 du conteneur. Sans le mappage de port, nous ne pourrions pas accéder à l'application.
Ne pas oublier le flag "-d" (detached) et le flag "-p" (port)

`docker run --publish 19002:19002 goodfood tail -f /dev/null`

Après 30 secondes, il suffit de se rendre dans un navigateur à l'adresse :

http://localhost:3000/