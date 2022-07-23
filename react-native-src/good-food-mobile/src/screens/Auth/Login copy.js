import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useRef, useEffect } from 'react';
import { pkceChallenge } from 'react-native-pkce-challenge';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WebView from 'react-native-webview';

const Login = () => {
  const [state, setState] = useState('Something basic state');
  const challenge = pkceChallenge();
  
  let codeVerifier = challenge.codeVerifier;
  let codeChallenge = challenge.codeChallenge;
  //   client_id: '96d8f2d9-29c8-42a1-bd30-07c4b3e67230'

    const getPkce = function() {
        AsyncStorage.setItem('@CODE_VERIFY', codeVerifier);
        AsyncStorage.setItem('@STATE', state);
        let redirect = encodeURI('http://192.168.1.54:19000')

        const query = new URLSearchParams({
          client_id: '96d9228d-e641-4e10-9b5f-d4e85cf54ea4',
          redirect_uri: redirect,
          response_type: 'code',
          scope: '',
          state: state,
          code_challenge: codeChallenge,
          code_challenge_method: 'S256',
        });
      let uri = encodeURI(`http://192.168.1.54:8085/oauth/authorize?${query.toString()}`);
      return uri
    }
    let pkceURi = getPkce();
    console.log(pkceURi)
    console.log(AsyncStorage.getItem('@STATE'))
    return (
      <WebView style={styles.web} source={{uri: pkceURi}} />
    )
}

export default Login

const styles = StyleSheet.create({
  web:{
    height:'100%',
    width:'100%',
  }
})