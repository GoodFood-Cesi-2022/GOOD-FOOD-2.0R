import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import React, {useState} from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
   
  const navigation = useNavigation();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.main}>
      <View>
          <Image style={styles.image} source={require('../../../assets/logo-Good-Food.png')} />
      </View>
      <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Email."
        placeholderTextColor="#003f5c"
        onChangeText={(email) => setEmail(email)}
      />
    </View>
      
    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Password."
        placeholderTextColor="#003f5c"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />
    </View>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={() => {navigation.navigate('HomeScreen')}}>
        <Text style={[styles.loginText, {color:'black', fontWeight:'bold', fontSize:22}]}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LoginScreen

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
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    color:'black',
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
})