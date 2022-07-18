import { Alert, Image, StyleSheet,Button, Text, TouchableOpacity, View } from 'react-native';
import * as AuthSession from "expo-auth-session";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
// import * as Linking from 'expo-linking';
// import Auth0 from 'react-native-auth0';
// const auth0 = new Auth0({ domain: 'alexriera.eu.auth0.com', clientId: 'b9ikUE4VztSa4wXxLQgWelc68yrtRXID' });


// You need to swap out the Auth0 client id and domain with the one from your Auth0 client.
// In your Auth0 client, you need to also add a url to your authorized redirect urls.
//
// For this application, I added https://auth.expo.io/@arielweinberger/with-auth0 because I am
// signed in as the 'arielweinberger' account on Expo and the name/slug for this app is 'with-auth0'.
//
// You can open this app in the Expo client and check your logs to find out your redirect URL.

const auth0ClientId = "b9ikUE4VztSa4wXxLQgWelc68yrtRXID";
const authorizationEndpoint = "https://alexriera.eu.auth0.com";

const useProxy = Platform.select({ web: false, default: true });
const redirectUri = AuthSession.makeRedirectUri({ useProxy });

export default function App() {
  const [name, setName] = useState(null);

  const [request, result, promptAsync] = AuthSession.useAuthRequest(
    {
      redirectUri,
      clientId: auth0ClientId,
      // id_token will return a JWT token
      responseType: "id_token",
      // retrieve the user's profile
      scopes: ["openid", "profile"],
      extraParams: {
        // ideally, this will be a random value
        nonce: "nonce",
      },
    },
    { authorizationEndpoint }
  );

  // Retrieve the redirect URL, add this to the callback URL list
  // of your Auth0 application.
  console.log(`Redirect URL: ${redirectUri}`);

  useEffect(() => {
    if (result) {
      if (result.error) {
        Alert.alert(
          "Authentication error",
          result.params.error_description || "something went wrong"
        );
        return;
      }
      if (result.type === "success") {
        // Retrieve the JWT token and decode it
        const jwtToken = result.params.id_token;
        const decoded = jwtDecode(jwtToken);

        const { name } = decoded;
        setName(name);
      }
    }
  }, [result]);

  return (
    <>
        <View style={styles.main}>
                <View>
                    <Text style={styles.h1}>Bienvenue sur Good Food !</Text>
                </View>
                <View>
                    <Image style={styles.image} source={require('../../../assets/logo-Good-Food.png')} />
                </View>
        </View>
        <View style={styles.container}>
        {name ? (
            <>
            <Text style={styles.title}>You are logged in, {name}!</Text>
            <Button title="Log out" onPress={() => setName(null)} />
            </>
        ) : (
            <Button
            disabled={!request}
            title="Log in with Auth0"
            onPress={() => promptAsync({ useProxy })}
            />
        )}
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 40,
  },
  main:{
        flex:3,
        justifyContent:'center',
        alignItems:'center'
    },
    h1:{
        fontSize:22,
        marginTop:50,
    },
});

// const LogMeIn = () => {
//     const REGISTER_URL = "http://192.168.210.190:8085/register";

//     const handleLoginSubmit = async () => {
//         auth0
//         .webAuth
//         .authorize({scope: 'openid profile email'})
//         .then(credentials =>
//         // Successfully authenticated
//         // Store the accessToken
//         this.setState({ accessToken: credentials.accessToken })
//         )
//         .catch(error => console.log(error));
//     }

//     const handleRegisterSubmit = async () =>{
//         Linking.openURL(REGISTER_URL);
//     }
//     return (
//         <View style={styles.main}>
//             <View>
//                 <Text style={styles.h1}>Bienvenue sur Good Food !</Text>
//             </View>
//             <View>
//                 <Image style={styles.image} source={require('../../../assets/logo-Good-Food.png')} />
//             </View>
//             <TouchableOpacity style={styles.button} onPress={() => {handleLoginSubmit()}}>
//                 <Text style={styles.textButton}>Log Me In !</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.button} onPress={() => {handleRegisterSubmit()}}>
//                 <Text style={styles.textButton}>Sign Me In !</Text>
//             </TouchableOpacity>
//         </View>
//     )
// }

// export default LogMeIn

// const styles = StyleSheet.create({
//     main:{
//         flex:1,
//         justifyContent:'center',
//         alignItems:'center'
//     },
//     h1:{
//         fontSize:22,
//         marginBottom:50,
//     },
//     button:{
//         borderWidth:1,
//         borderColor:'black',
//         borderRadius:50,
//         width:150,
//         height:50,
//         justifyContent:'center',
//         marginTop:30,
//         backgroundColor:'black'
//     },
//     textButton:{
//         textAlign:'center',
//         fontSize:20,
//         color:'white'
//     }
// })