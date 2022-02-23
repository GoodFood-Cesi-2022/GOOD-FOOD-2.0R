import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const NewPasswordScreen = () => {
    const {control, handleSubmit} = useForm();

    const navigation = useNavigation();

    const OnEnvoyerPressed = (data) => {
        console.log(data);
        navigation.navigate('HomeScreen');
    }
    const OnBackSignInPressed = () => {
        navigation.navigate('SignIn');
    }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Changez votre mot de passe</Text>
            <CustomInput
                name="code"
                control={control}
                placeholder="Code reçu par mail"
                secureTextEntry={true}
                rules={{
                    required: "Le code est requis"
                }}
            />
            <CustomInput
                name="new-password"
                control={control}
                placeholder="Nouveau mot de passe"
                secureTextEntry={true}
                rules={{
                    required: "Votre nouveau mot de passe est requis", 
                    minLength:{
                        value:8, 
                        message: "Le mot de passe doit contenir 8 caractères minimum"},
                    maxLength:{
                        value:24, 
                        message: "Le mot de passe doit contenir 24 caractères maximum"},
                }}
            />
            <CustomButton 
                text="Envoyer" 
                onPress={handleSubmit(OnEnvoyerPressed)}
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