<header style="background-color:#37a7e8;">
    <div style="text-align:center;">
        <h1 style="color:black">Bienvenue sur GOOD FOOD V2</h1>
        <img style="border-radius:20%" src="img/logo-Good-Food.png" alt="" />
    </div>
</header>
## Installation de l'environnement de l'application mobile

## Prérequis
* [NodeJS](https://nodejs.org/en/) # Contenant également le gestionnaire de paquet NPM.
* [Expo](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=fr&gl=US) # Pour émuler l'application mobile sur vos devices Android et IOS
* Installer "Expo CLI" : ```npm install -g expo-cli```

## Création du projet React-Native avec Expo

    * ### Commandes à taper dans le terminal
    ```expo init GoodFood```  
    ```cd GoodFood```  
    ```npm start```  # On peut aussi utiliser expo start  
    Cela démarrera un serveur pour nous

    * ### Visualiser le projet sur son device
        * Installer Expo sur son device
        * Ouvrir Expo et flasher le QRcode généré par la commande npm start  
        (Pour IOS, utiliser le lecteur de QRcode intégré à l'appareil photo) 

C'est tout ! Il suffit maintenant de modifier le fichier App.js pour commencer à développer  
l'application et voir en temps réel les changements effectués.  

## Les dépendences installées
Afin de gérer la gestion de l'application Good Food, les dépendances contenues dans le fichier package.json  
sont à installer à l'aide de la commande ```npm install```

Exemple du fichier package.json :  
```{
  "name": "goodfood",
  "version": "1.0.0",
  "main": "node_modules/expo/AppEntry.js",
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web",
    "eject": "expo eject"
  },
  "dependencies": {
    "@react-navigation/native": "^6.0.8",
    "@react-navigation/native-stack": "^6.5.0",
    "expo": "~44.0.0",
    "expo-status-bar": "~1.2.0",
    "react": "17.0.1",
    "react-dom": "17.0.1",
    "react-hook-form": "^7.27.1",
    "react-native": "0.64.3",
    "react-native-safe-area-context": "3.3.2",
    "react-native-screens": "~3.10.1",
    "react-native-web": "0.17.1"
  },
  "devDependencies": {
    "@babel/core": "^7.12.9",
    "@types/jest": "^27.4.0",
    "@types/react": "^17.0.39",
    "@types/react-native": "^0.66.16",
    "@types/react-test-renderer": "^17.0.1"
  },
  "private": true
}
``` 
