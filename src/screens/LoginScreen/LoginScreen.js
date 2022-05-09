import React, {useState, useEffect } from 'react';
import { StyleSheet, Text, View, Linking, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginClassAuth from './LoginClassAuth';
import { AuthSession } from 'expo';
import { pkceChallenge } from 'react-native-pkce-challenge';
import axios from 'axios';
const useMount = func => useEffect(() => func(), []);

// COMPONENT DU BOUTON DE CONNEXION REGISTER
const OpenRegisterButton = ({ registerUrl, children }) => {
  
  function getAuthorizationCode(){
      // const { url: initialUrl, processing } = useInitialURL();
      const state = Math.random(40);
      const oAuthProviderBaseUrl = 'http://localhost:8085/oauth/authorize';
      const oAuthClientId = '962429b0-b243-4841-bbee-a8960dd9d9af';
      const oAuthCallbackUri = 'http://localhost:19006';
      const challenge = pkceChallenge();
  
      axios.get(oAuthProviderBaseUrl)
      .then(function({data}){
         console.log(data)
        })
      .catch(function(error){
        console.log("Pas de code authorization : "+error)
      });
    }
    return(
        <Button style={styles.marginLeft}  title={children} onPress={getAuthorizationCode} />);
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
    const registerUrl = 'http://localhost:8085/register';
    // const { url: initialUrl, processing } = useInitialURL();

    return (
      <View  style={styles.container}>
        {/* <Text>
          {processing
            ? `Processing the initial url from a deep link`
            : `The deep link is: ${initialUrl || "None"}`}
        </Text> */}
        <View style={styles.button}>
          <LoginClassAuth />
          {/* <OpenLoginButton loginUrl={loginUrl} redirUrl={initialUrl} baseUrl={baseUrl}>Se loguer</OpenLoginButton> */}
          <OpenRegisterButton registerUrl={registerUrl}>S'enregistrer</OpenRegisterButton>
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