import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../CustomButton/CustomButton';

const SocialSignInButtons = () => {
    const OnSignInFacebook = () => {
        console.log("Signed in with Facebook !");
    }
    const OnSignInGoogle = () => {
        console.log("Signed in with Google !");
    }
    const OnSignInApple = () => {
        console.log("Signed in with Apple !");
    }
  return (
    <>
        <CustomButton 
            text="Se connecter avec Facebook" 
            onPress={OnSignInFacebook}
            bgColor="#E7EAF4"
            fgColor="#4765A9"
        />
        <CustomButton 
            text="Se connecter avec Google"
            onPress={OnSignInGoogle}
            bgColor="#FAE9EA"
            fgColor="#DD4D44"
        />
        <CustomButton 
            text="Se connecter avec Apple" 
            onPress={OnSignInApple}
            bgColor="#e3e3e3"
            fgColor="#363636"
        />
    </>
  )
}

export default SocialSignInButtons

const styles = StyleSheet.create({})