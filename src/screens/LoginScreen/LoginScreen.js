import React, {useState, useEffect } from 'react';
import { StyleSheet, Text, View,Modal, Linking,Pressable, Button } from 'react-native';
import { pkceChallenge } from 'react-native-pkce-challenge';
import axios from 'axios';
import { NavigationContainer, useNavigation } from '@react-navigation/native';


const useMount = func => useEffect(() => func(), []);

// COMPONENT DU BOUTON DE CONNEXION REGISTER
const OpenRegisterButton = () => {
  function getAuthorizationCode(){
    const state = Math.ceil(Math.random(40))*1000;
    const oAuthProviderBaseUrl = 'http://localhost:8085/oauth';
    const oAuthCallbackUri = 'http://localhost:8085/login/redirect';
    // const oAuthClientId = '962e63ce-3ca3-4a95-818f-2d9bb2eedc02';
    const oAuthClientId = '962429b0-b243-4841-bbee-a8960dd9d9af';
    const challenge = pkceChallenge();
  
    const query = new URLSearchParams({ 
      client_id: oAuthClientId,
      redirect_uri: `${oAuthProviderBaseUrl}/authorize`,
      response_type: 'code',
      code_challenge: challenge.codeChallenge,
      code_challenge_method: 'S256'
    });
  
    axios.defaults.xsrfCookieName = 'XSRF-TOKEN';
    let url = `${oAuthProviderBaseUrl}/authorize?${query.toString()}`;
    // window.location.href = url;
    Linking.openURL(url);
  }
  
  async function authorizationCodeToAccessToken(code, state){
    console.log('try to change authorization code to access token');
    const oAuthPostTokenUrl = 'http://localhost:8085/oauth/token';
    const oAuthCallbackUri = 'http://localhost:4200/login/redirect';
    const oAuthClientId = '962e63ce-3ca3-4a95-818f-2d9bb2eedc02';
    const challenge = pkceChallenge();
    const navigation = useNavigation();
  
    await axios
    .post(oAuthPostTokenUrl, {
      grant_type: 'authorization_code',
      client_id: oAuthClientId,
      redirect_uri: oAuthCallbackUri,
      code_verifier: challenge.codeVerifier,
      code: code
    })
    .then(function(){
      navigation.navigate('HomeScreen');
    })
    .catch(function(error){
      console.log("Erreur suivante sur le token: " + error);
    })
  }
  return(
      <Button style={styles.marginLeft}  title="Click on me !" onPress={getAuthorizationCode} />
      );
}

// --- COMPONENT qui capture l'url générée par EXPO au lancement de l'app
// const useInitialURL = () => {
//   const [url, setUrl] = useState(null);
//   const [processing, setProcessing] = useState(true);

//   useMount(() => {
//     const getUrlAsync = async () => {
//       // Get the deep link used to open the app
//       const initialUrl = await Linking.getInitialURL();

//       // The setTimeout is just for testing purpose
//       setTimeout(() => {
//         setUrl(initialUrl);
//         setProcessing(false);
//       }, 1000);
//     };

//     getUrlAsync();
//   });

//   return { url, processing };
// };

const LoginScreen = () => {
    // const { url: initialUrl, processing } = useInitialURL();

    return (
      <View  style={styles.container}>
        <View style={styles.button}>
          {/* <OpenLoginButton>Se loguer</OpenLoginButton> */}
          <OpenRegisterButton>S'enregistrer</OpenRegisterButton>
        </View>
      </View>
    );
};


const styles = StyleSheet.create({
  container: { 
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  marginLeft:{
    marginLeft:30,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    flexDirection:'row',
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});


export default LoginScreen;