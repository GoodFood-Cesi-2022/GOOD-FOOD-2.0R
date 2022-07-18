import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState, document } from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

WebBrowser.maybeCompleteAuthSession();

const LogMeIn = () => {
    const [result, setResult] = useState();
    const LOGIN_URL = `http://192.168.154.190:8085/login`;
    const REGISTER_URL = "http://192.168.154.190:8085/register";

    const handleLoginSubmit = async () => {
        axios.request({
            url: "/oauth/token",
            method: "post",
            baseURL: "http://sample.oauth.server.com/",
            auth: {
              username: "myUsername", // This is the client_id
              password: "" // This is the client_secret
            },
            data: {
              "grant_type": "client_credentials",
              "scope": "public"    
            }
          }).then(respose => {
            console.log(respose);  
          }); 
    }

    const handleRegisterSubmit = async () =>{
        Linking.openURL(REGISTER_URL);
    }
    return (
        <View style={styles.main}>
            <View>
                <Text style={styles.h1}>Bienvenue sur Good Food !</Text>
            </View>
            <View>
                <Image style={styles.image} source={require('../../../assets/logo-Good-Food.png')} />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => {handleLoginSubmit()}}>
                <Text style={styles.textButton}>Log Me In !</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {handleRegisterSubmit()}}>
                <Text style={styles.textButton}>Sign Me In !</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LogMeIn

const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    h1:{
        fontSize:22,
        marginBottom:50,
    },
    button:{
        borderWidth:1,
        borderColor:'black',
        borderRadius:50,
        width:150,
        height:50,
        justifyContent:'center',
        marginTop:30,
        backgroundColor:'black'
    },
    textButton:{
        textAlign:'center',
        fontSize:20,
        color:'white'
    }
})