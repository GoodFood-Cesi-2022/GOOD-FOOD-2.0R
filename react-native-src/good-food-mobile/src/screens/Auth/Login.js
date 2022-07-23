import React, {useEffect, useState} from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { Button, View, Text, StyleSheet } from 'react-native';
import { pkceChallenge } from 'react-native-pkce-challenge';
import axios from 'axios';

WebBrowser.maybeCompleteAuthSession();

// Endpoint
const discovery = {
  authorizationEndpoint: 'http://192.168.1.54:8085/oauth/authorize',
  tokenEndpoint: 'http://192.168.1.54:8085/oauth/token',
};

export default function Login() {
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: '96d93f8c-3f63-472f-81f9-b58f0612fbf8',
      scope: [],
      // In order to follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
      // this must be set to false
      usePKCE: true,
      redirectUri: makeRedirectUri({
        scheme: 'goodfood'
        }),
    },
    discovery
  );

  
   
  const [authorizationCode, setAuthorizationCode] = useState('');
  const [state, setState] = useState('Je suis un state de youf');
  const [codeVerif, setCodeVerif] = useState('Je suis un state de youf');
  
  useEffect(() => {
    console.log(response?.type)
    // console.log(response.params)
    console.log('Je suis là connard !')
    if (response?.type === 'success') {
      const { code } = response.params;
      setCodeVerif(request.codeVerifier);
      console.log(`code verifier 1: ${codeVerif}`);
      console.log(`Code authorization : ${code}`);
      setAuthorizationCode(code);
      }
  }, [response]);

  const authorizationCodeToAccessToken = async () => {
    console.log('try to change authorization code into access token');
    const challenge = pkceChallenge();
    // const [userToken, setUserToken] = useState('');
    const [user1Token, setUser1Token] = useState({});

    let codeVerifier = challenge.codeVerifier;
    let codeChallenge = challenge.codeChallenge;

    if (!codeVerifier && !state) {
      console.error('Workflow auth is not inizialized');
    }

    const config = {
      grant_type: 'authorization_code',
      client_id: '96d93f8c-3f63-472f-81f9-b58f0612fbf8',
      redirect_uri:  makeRedirectUri({
        scheme: 'goodfood'
        }),
      code_verifier: codeVerif,
      code: authorizationCode,
    }

    // console.log(config);
    
    const token =
    axios.post('http://192.168.1.54:8085/oauth/token',config)
    .then((response) => {
      const data = response.data
      console.log(`axios response`)
      console.log(data);
      setUser1Token(data)
      }
    );

    console.log(`User token 1 : ${user1Token.access_token}`);

  }
  authorizationCodeToAccessToken();
  return (
    <>
    <View>
      <Text style={styles.text}>LOGIN</Text>
      <Button
        style={[styles.button,{marginTop:100}]}
        disabled={!request}
        title="Login"
        onPress={() => {
          promptAsync();
          }}
      />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  text:{
    flex:2,
  },
  button:{
  }
})