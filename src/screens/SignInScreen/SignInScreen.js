import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import React, {useState} from 'react';
import logoGf from '../../../assets/images/logo-Good-Food.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';

const SignInScreen = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {height} = useWindowDimensions();

    const OnSignInPressed = () => {
        console.log("Signed in !");
    }
    const OnSignUpPressed = () => {
        console.log("Signed up !");
    }
    const OnForgotPasswordPressed = () => {
        console.log("I forgot my password !");
    }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Image source={logoGf} style={[styles.logo, {height: height * 0.3}]} resizeMode='contain' />
            <CustomInput
                placeholder="Username"
                value={username}
                setValue={setUsername}
                secureTextEntry={false}
            />
            <CustomInput
                placeholder="Password"
                value={password}
                setValue={setPassword}
                secureTextEntry={true}
            />
            <CustomButton 
                text="Se connecter" 
                onPress={OnSignInPressed}
            />
            <CustomButton 
                text="Mot de passe oublié ?" 
                onPress={OnForgotPasswordPressed} 
                type="TERTIARY" 
            />
            <SocialSignInButtons />
            <CustomButton 
                text="Vous n'avez pas de compte ? Crééz en un !" 
                onPress={OnSignUpPressed} 
                type="TERTIARY"
                bgColor="transparent"
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
    logo:{
        width:'50%',
        minWidth:300,
        maxWidth:300,
        maxHeight:300,
        marginTop:80,
        marginBottom:20,
    }
})

export default SignInScreen;