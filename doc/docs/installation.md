# Installation de l'application mobile

## Prérequis
* [NodeJS](https://nodejs.org/en/) # Contenant également le gestionnaire de paquet NPM.
* [Expo](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=fr&gl=US) # Pour émuler l'application mobile sur vos devices Android et IOS
* Installer "Expo CLI" : npm install -g expo-cli
* [Docker pour Windows 10](https://hub.docker.com/editions/community/docker-ce-desktop-windows) # Permettra de créer un container et de lancer l'application à l'intérieur

## Création du projet React-Native avec Expo

### Commandes à taper dans le terminal
* expo init GoodFood
* cd GoodFood
* npm start  # On peut aussi utiliser expo start

Cela démarrera un serveur pour nous

### Visualiser le projet sur son device
* Installer Expo sur son device
* Ouvrir Expo et flasher le QRcode généré par la commande npm start (Pour IOS, utiliser le lecteur de QRcode intégré à l'appareil photo) 

C'est tout ! Il suffit maintenant de modifier le fichier App.js pour développer l'application et voir en temps réel les changements effectués.