import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, Switch } from 'react-native';
import React, {useState} from 'react';
import logoGf from '../../../assets/images/logo-Good-Food.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
// import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import {useForm, Controller, watch} from 'react-hook-form';

const SignInScreen = () => {
    const {height} = useWindowDimensions();
    const navigation = useNavigation();
    const [rememberMe, setRememberMe] = useState(false);

    const {
        control, 
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm();
    console.log(errors);

     // Function when switch is used
    const toggleSwitch = () => {
        setRememberMe(rememberMe => !rememberMe);
    };
    console.log("L'état du toggle rememberMe est " + rememberMe);

    // --------------------End Switch logic

    const OnSignInPressed = (data) => {
        console.log(data);
        // Validate user then
        navigation.navigate('HomeScreen');
    }
    const OnSignUpPressed = () => {
        // Validate user then
        navigation.navigate('SignUp');
    }
    const OnForgotPasswordPressed = () => {
        navigation.navigate('ForgotPassword');
    }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Image 
                source={logoGf} 
                style={[styles.logo, 
                {height: height * 0.3}]} 
                resizeMode='contain' 
            />
            <CustomInput
                name="username"
                placeholder= "Nom d'utilisateur"
                secureTextEntry={false}
                control={control}
                rules= {{required: "Le nom d'utilisateur est requis"}}
            />
            <CustomInput
                name="password"
                placeholder="Mot de passe"
                secureTextEntry={true}
                control={control}
                rules= {{required:  "Le mot de passe est requis"}}
            />
            <CustomButton 
                text="Se connecter" 
                onPress={handleSubmit(OnSignInPressed)}
            />
            <View style={styles.switchContainer}>
                <Switch
                    value =  {rememberMe}
                    onValueChange = {toggleSwitch}
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                />
                <Text style={styles.switchText}>Se souvenir de moi</Text>
            </View>
            <View style={styles.footerContainer}>
                <CustomButton 
                    text="Mot de passe oublié ?" 
                    onPress={OnForgotPasswordPressed} 
                    type="TERTIARY" 
                />
                {/* Connection by Facebook/Google/Apple for future development */}
                {/* <SocialSignInButtons /> */}
                <CustomButton 
                    text="Créer un compte !" 
                    onPress={OnSignUpPressed} 
                    type="TERTIARY"
                    bgColor="transparent"
                />
            </View>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    root:{
        alignItems:'center',
        padding: "20%",
        marginHorizontal:-50,
        marginVertical:0,
    },
    logo:{
        width:'50%',
        minWidth:300,
        maxWidth:300,
        maxHeight:300,
        marginBottom:10,
    },
    footerContainer:{
        alignItems:'center',
        justifyContent:'center',
        height:200,
    },
    switchContainer:{
        flexDirection:'row',
        justifyContent: 'space-around',
        width:'50%',
        marginBottom:-50,
    },
    switchText:{
        marginTop:15,
    },
})

export default SignInScreen;