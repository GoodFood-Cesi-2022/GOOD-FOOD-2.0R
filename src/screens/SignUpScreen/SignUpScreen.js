import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const SignUpScreen = () => {
    const {control, handleSubmit, watch} = useForm();
    const pwd = watch('password');
    const navigation = useNavigation();

    const OnSignUpPressed = () => {
        navigation.navigate('ConfirmEmail');
    }
    const OnSignInPressed = () => {
        navigation.navigate('SignIn');
    }
    const OnCGUPressed = () => {
        console.log("Voici les CGU !");
    }
    const OnRGPDPressed = () => {
        console.log("Voici la politique RGPD !");
    }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Créer un compte</Text>
            <CustomInput
                name="username"
                control={control}
                placeholder="Username"
                rules={
                    {
                    required: "Le nom d'utilisateur est requis", 
                    minLength:{
                        value:6, 
                        message: "Le nom d'utilisateur doit contenir 6 caractères minimum"},
                    maxLength:{
                        value:24, 
                        message: "Le nom d'utilisateur doit contenir 24 caractères maximum"},
                    }
                }
                secureTextEntry={false}
            />
            <CustomInput
                name="email"
                control={control}
                placeholder="Email"
                rules={{pattern: {value: EMAIL_REGEX, message: "L'email est incorrect"}}}
                secureTextEntry={false}
            />
            <CustomInput
                name="password"
                control={control}
                placeholder="Password"
                secureTextEntry={true}
                rules={{
                    required: "Le mot de passe est requis", 
                    minLength:{
                        value:8, 
                        message: "Le mot de passe doit contenir 8 caractères minimum"},
                    maxLength:{
                        value:24, 
                        message: "Le mot de passe doit contenir 24 caractères maximum"},
                    }}
                
            />
            <CustomInput
                name="password-repeat"
                control={control}
                placeholder="Repeat password"
                secureTextEntry={true}
                rules={{
                    validate: value => value == pwd || "Le mot de passe ne correspond pas au premier !",
                }}
            />
            <CustomButton 
                text="S'enregistrer" 
                onPress={handleSubmit(OnSignUpPressed)}
            />
            <Text style={styles.text}>En vous enregistrant, vous confirmez l'acceptation de nos <Text style={styles.link} onPress={OnCGUPressed}>CGU</Text> ainsi que notre <Text style={styles.link} onPress={OnRGPDPressed}>politique RGPD</Text>.</Text>
            <SocialSignInButtons />
            <CustomButton 
                text="Vous avez un compte ? Connectez vous !" 
                onPress={OnSignInPressed} 
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

export default SignUpScreen;