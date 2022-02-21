import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");

    const navigation = useNavigation();

    const OnSignUpPressed = () => {
        navigation.navigate('ConfirmEmail');
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
                placeholder="Username"
                value={username}
                setValue={setUsername}
                secureTextEntry={false}
            />
            <CustomInput
                placeholder="Email"
                value={email}
                setValue={setEmail}
                secureTextEntry={false}
            />
            <CustomInput
                placeholder="Password"
                value={password}
                setValue={setPassword}
                secureTextEntry={true}
            />
            <CustomInput
                placeholder="Repeat password"
                value={passwordRepeat}
                setValue={setPasswordRepeat}
                secureTextEntry={true}
            />
            <CustomButton 
                text="S'enregistrer" 
                onPress={OnSignUpPressed}
            />
            <Text style={styles.text}>En vous enregistrant, vous confirmez l'acceptation de nos <Text style={styles.link} onPress={OnCGUPressed}>CGU</Text> ainsi que notre <Text style={styles.link} onPress={OnRGPDPressed}>politique RGPD</Text>.</Text>
            <SocialSignInButtons />
            <CustomButton 
                text="Vous avez un compte ? Connectez vous !" 
                onPress={OnSignUpPressed} 
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