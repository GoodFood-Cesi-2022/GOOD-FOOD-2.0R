import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';

const NewPasswordScreen = () => {
    const [code, setCode] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const OnEnvoyerPressed = () => {
        console.log("Nouveau mot de passe enregistré !");
    }
    const OnBackSignInPressed = () => {
        console.log("Retour à la page SignInScreen !");
    }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Changez votre mot de passe</Text>
            <CustomInput
                placeholder="Code reçu par mail *"
                value={code}
                setValue={setCode}
                secureTextEntry={true}
            />
            <CustomInput
                placeholder="Nouveau mot de passe *"
                value={newPassword}
                setValue={setNewPassword}
                secureTextEntry={true}
            />
            <CustomButton 
                text="Envoyer" 
                onPress={OnEnvoyerPressed}
            />
            <CustomButton 
                text="Retour à la page login !" 
                onPress={OnBackSignInPressed} 
                type="TERTIARY"
            />
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    root:{
        alignItems:'center',
        padding: "20%",
        margin:-35,
    },
    text:{
        color:'gray',
        marginVertical: 10,
    },
    link:{
        color: 'blue',
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },
})

export default NewPasswordScreen;