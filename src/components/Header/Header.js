import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Header = (props) => {
    const navigation = useNavigation();
    
  return (
    <View style={styles.header_container}>       
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.goBack()}
        >
            <Text style={styles.text_button}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            <Image 
                style={styles.tinyLogo}
                source={require('../../../assets/tiny_logo_good_food.png')}
            />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AccountScreen')}>
            <Image 
                style={styles.tinyLogo}
                source={require('../../../assets/account.png')}
            />
        </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header_container:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        height:60,
        width:'100%',
        marginTop:50,
        paddingTop:15,
        backgroundColor:'#eee',
        borderBottomWidth:2,
        borderTopWidth:2,
        marginBottom:20,
    },
    tinyLogo:{
        marginTop:-10,
        width:40,
        height:40,
    },
    button:{
        width:40,
    },
    text_button:{
        fontWeight:'bold',
        fontSize: 16,
    }
})