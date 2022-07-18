# Architecture des dossiers de travail

* ## Les principaux dossiers sources
    * ../App.js
    * android
    * ios
    * ./src/ :
        * components
        * navigation
        * screens
        * tests
    * ./assets

* ## Définition des dossiers
    * ../App.js est le point d'entrée de l'application mobile quand elle est lancée
    * ./src/ :
        * components  
            Sont toutes les parties autonomes des screens (CustomInput, Logo, CustomButton,...).  
            Un component gérera son affichage, son style et son export.
        * navigation  
            Contient un fichier index.js renseignant tout les screens de l'application mobile qui seront affichés.
        * screens  
            Un screen est un 'template' sur lequel on vient charger des components.
        * tests
            Sont les fichiers de tests qui seront utilisés par Jest.
    * ./assets  
        Le dossier des assets contiendra les images et le fichier data des franchisés