import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { Button, Linking, Platform } from 'react-native';
import axios from 'axios';


WebBrowser.maybeCompleteAuthSession();
const useProxy = Platform.select({ web: false, default: true });

const LoginClassAuth = () => {
    const oAuthClientId = '962429b0-b243-4841-bbee-a8960dd9d9af';
    const redirectUri = 'http://localhost:19006';
    const state = Math.random(40);



    
    function login(){
        // Request
        const postData = { oAuthClientId: '962429b0-b243-4841-bbee-a8960dd9d9af', redirectUri: 'http://localhost:19006', email: 'alex@alex.fr', password: 'alexalex' };
        const apiURL = 'http://localhost:8085/oauth/authorize';
        axios.defaults.xsrfHeaderName = "X-CSRFToken";
        axios.get(apiURL, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        ...postData
        })
        .then(response => console.log('Success: ', response))
        .catch(error => console.log('Error: ', error));
    }
  return (
    <Button
      title="Login"
      onPress={login}
    />
  );
}

export default LoginClassAuth;