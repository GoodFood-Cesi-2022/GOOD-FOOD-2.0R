import { Alert, Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const LogMeIn = () => {
    
  const navigation = useNavigation();
  return (
    <View style={styles.main}>
        <View>
            <Text style={styles.h1}>Bienvenue sur Good Food !</Text>
        </View>
        <View>
            <Image style={styles.image} source={require('../../../assets/logo-Good-Food.png')} />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('HomeScreen')}}>
            <Text style={styles.textButton}>Log Me In !</Text>
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