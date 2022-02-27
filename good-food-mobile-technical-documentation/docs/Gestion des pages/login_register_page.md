<h1 style="text-align:center;">Gestion de la page d'accueil</h1>

## Les différents écrans
<img src="../../img/login.PNG" alt="" />
<img src="../../img/register.PNG" alt="" />
<img src="../../img/forgot_password.PNG" alt="" />
<img src="../../img/change_password.PNG" alt="" />

## La méthode de validation des champs
La validation des champs utilisateur (nom, email, mot de passe) se fait à l'aide du package 'react-hook-form'.

### L'écran du formulaire
Exemple :  
On importe useForm du package react-hook-form  
```
import {useForm} from 'react-hook-form';
```  

Dans notre composant fonctionnelle, on crée notre constante de state qui fera appel à la fonction useForm() :  

```
const {control, handleSubmit, formState: {errors}} = useForm();
```  

```control```, servira à enregistrer la valeur des champs du formulaire lorsque la fonction ```handleSubmit``` aura été lancée  
par l'appui sur le bouton valider.  

Exemple de l'écran du formulaire :  

```
import React from 'react';
import { View, ScrollView } from 'react-native';
import {useForm} from 'react-hook-form';

const SignInScreen = () => {
    const {control, handleSubmit, formState: {errors}} = useForm();
    const OnSignInPressed = (data) => {
        console.log(data);
        // Validate user then
        navigation.navigate('HomeScreen');
    }
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                <CustomInput
                    name="username"
                    placeholder= "Nom d'utilisateur"
                    secureTextEntry={false}
                    control={control}
                    rules= {{required: "Le nom d'utilisateur est requis"}}
                />
                <CustomButton 
                    text="Se connecter" 
                    onPress={handleSubmit(OnSignInPressed)}
                />
            </View>
        </ScrollView>
    )
}

export default SignInScreen;
``` 
### Le compososant CustomInput

Le composant CustomInput prendra en paramètres les valeurs qu'on lui aura passées :  
```
<CustomInput
    name="username"
    placeholder= "Nom d'utilisateur"
    secureTextEntry={false}
    control={control}
    rules= {{required: "Le nom d'utilisateur est requis"}}
/>
```

et il retournera le composant Controller qui traitera ces données  

```
import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import {Controller} from 'react-hook-form';

const CustomInput = ({control, name, placeholder, secureTextEntry, rules = {}}) => {
  return (
      <Controller 
        control={control}
        name={name}
        rules={rules}
        render = {({field: {value, onChange, onBlur}, fieldState: {error}}) => { 
          return(
            <>
              <View style={[styles.container, {borderColor: error ? 'red' : '#6FE3F0'}]}>
                <TextInput 
                  value={value} 
                  onChangeText={onChange} 
                  onBlur={onBlur}
                  placeholder={placeholder}
                  style={styles.input}
                  secureTextEntry={secureTextEntry} />
              </View>
              { error && <Text style={{color: 'red', alignSelf:'stretch'}}>{error.message || 'Error' }</Text>}
            </>
            );
          }
        }
      />
  )
}

export default CustomInput
```
