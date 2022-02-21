import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';

const ConfirmEmailScreen = () => {
    const [code, setCode] = useState("");

    const OnConfirmPressed = () => {
        console.log("Confirmed !");
    }
    const OnNewCodePressed = () => {
        console.log("Code renvoyé !");
    }
    const OnBackSignInPressed = () => {
        console.log("Retour vers page SignInScreen !");
    }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Confirmez votre email</Text>
            <CustomInput
                placeholder="Entrez votre code de confirmation"
                value={code}
                setValue={setCode}
                secureTextEntry={true}
            />
            <CustomButton 
                text="Confirmer" 
                onPress={OnConfirmPressed}
            />
            <CustomButton 
                text="Renvoyer le code" 
                onPress={OnNewCodePressed} 
                type="SECONDARY"
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

export default ConfirmEmailScreen;