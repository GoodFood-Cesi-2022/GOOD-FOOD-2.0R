import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, Switch } from 'react-native';
import React, {useState} from 'react';
import logoGf from '../../../assets/logo-Good-Food.png';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import {useForm, Controller, watch} from 'react-hook-form';

const SignInScreen = () => {
    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const {
        control, 
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm();
    if (errors) {
        console.log("SignIn errors : " + errors);
    }

    // --------------------End Switch logic

    const OnSignInPressed = () => {
        navigation.navigate('HomeScreen');
    }
  return (
    <View style={styles.root}>
        <Image 
            source={logoGf} 
            style={[styles.logo, 
            {height: height * 0.3}]} 
            resizeMode='contain' 
        />
        <CustomButton 
            text="Se connecter" 
            onPress={handleSubmit(OnSignInPressed)}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    root:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: "20%",
    },
    logo:{
        width:400,
        marginBottom:50,
    }
})

export default SignInScreen;