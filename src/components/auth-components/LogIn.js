import {React, useState} from 'react';
import { StyleSheet, SafeAreaView,Text, TextInput, View, TouchableOpacity } from 'react-native';
import CheckBox from './CheckBox';

const LogIn = ({navigation}) => {
    const [email, onChangeEmail] = useState("");
    const [password, onChangePassword] = useState("");

    return (
        <SafeAreaView style={styles.main}>
            <Text style={styles.title}>Se connecter</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeEmail}
                value={email}
                placeholder="E-mail"
            />
            <TextInput
                onChangeText={onChangePassword}
                placeholder="Password"
                secureTextEntry={true}
                style={styles.input}
            />
        
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigation.navigate('Home')}
                    >
                    <Text>Confirmer</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigation.navigate('Profile')}
                    >
                    <Text>Annuler</Text>
                </TouchableOpacity>
            </View>
            
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    main: {
        flex:1,
        justifyContent:'center',
    },
    container: {
      paddingTop: 50,
      paddingBottom: 50,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        margin: 20,
        padding:10,
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent:'center',
    },
    title: {
        fontSize: 30,
        textAlign:'center',
        marginBottom:40,
    },
    checkbox: {
        alignSelf: "center",
      },
  });
  export default LogIn;