import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';


const ConfirmEmailScreen = () => {
    const {control, handleSubmit} = useForm();

    const navigation = useNavigation();

    const OnConfirmPressed = (data) => {
        console.log(data);
        navigation.navigate('HomeScreen');
    }
    const OnNewCodePressed = () => {
        navigation.navigate('SignIn');
    }
    const OnBackSignInPressed = () => {
        navigation.navigate('SignIn');
    }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Confirmez votre email</Text>
            <CustomInput
                name={code}
                control={control}
                placeholder="Entrez votre code de confirmation"
                secureTextEntry={true}
                rules={{
                    required: "Le code de confirmation est requis"
                }}
            />
            <CustomButton 
                text="Confirmer" 
                onPress={handleSubmit(OnConfirmPressed)}
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