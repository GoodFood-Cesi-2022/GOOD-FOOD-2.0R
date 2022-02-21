import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';


const ForgotPasswordScreen = () => {
    const [username, setUsername] = useState("");

    const navigation = useNavigation();

    const OnEnvoyerPressed = () => {
        navigation.navigate('NewPassword');
    }
    const OnBackSignInPressed = () => {
        navigation.navigate('SignIn');
    }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Mot de passe oublié</Text>
            <CustomInput
                placeholder="Username *"
                value={username}
                setValue={setUsername}
                secureTextEntry={false}
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

export default ForgotPasswordScreen;