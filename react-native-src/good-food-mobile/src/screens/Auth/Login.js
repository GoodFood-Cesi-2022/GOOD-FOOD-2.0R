import React, {useEffect, useState} from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { Button, View, Text, StyleSheet, Image } from 'react-native';
import { pkceChallenge } from 'react-native-pkce-challenge';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

WebBrowser.maybeCompleteAuthSession();

const IPAdress = '10.138.128.76';
// Endpoint
const discovery = {
  authorizationEndpoint: `http://${IPAdress}:8085/oauth/authorize`,
  tokenEndpoint: `http://${IPAdress}:8085/oauth/token`,
};

export default function Login({route}) {
  const nav = useNavigation();

  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: '96d93f8c-3f63-472f-81f9-b58f0612fbf8',
      scope: [],
      // In order to follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
      
      usePKCE: true,
      redirectUri: makeRedirectUri({
        scheme: 'goodfood'
        }),
    },
    discovery
  );

  
   
  const [authorizationCode, setAuthorizationCode] = useState('');
  const [state, setState] = useState('Je suis un state de youf');
  const [codeVerif, setCodeVerif] = useState('');
  const challenge = pkceChallenge();
  const [user1Token, setUser1Token] = useState({});
  useEffect(() => {
    console.log(response?.type)
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
    

    // let codeVerifier = challenge.codeVerifier;

    if (!codeVerif && !state) {
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
    
    const token = await
    axios.post(`http://${IPAdress}:8085/oauth/token`,config)
    .then((response) => setUser1Token(response.data))
    .then(() => {
      console.log(`User token 1 : ${user1Token.access_token}`)
    })
    .catch((e) => {
      console.error(e);
    });


    if (user1Token !== undefined) {
      nav.navigate('HomeScreen', {
        route:route,
        token: user1Token.access_token,
        IPAdress: IPAdress
      })
    }

  }
  authorizationCodeToAccessToken();

  const redirect_uri = makeRedirectUri({
    scheme: 'goodfood'
    });

  return (
    <>
    <View style={styles.container}>
      <View style={styles.main}>
        <View>
            <Text style={styles.h1}>Bienvenue sur Good Food !</Text>
        </View>
        <View>
            <Image style={styles.image} source={require('../../../assets/logo-Good-Food.png')} />
        </View>
      </View>
      <Button
        style={styles.button}
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
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-around",
  },
  h1:{
    marginBottom:100
  },
  button:{
    width:200
  },
  main:{
    justifyContent:'space-between',
    alignItems:'center'
  },
  h1:{
      fontSize:22,
      fontWeight:'bold'
  },
  image:{
    marginTop:100
  }
})