import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header/Header';
import MyOrdersScreen from './MyOrdersScreen';
import MyFavoritesScreen from './MyFavoritesScreen';
//Import moment for date and time
import moment from 'moment';
import 'moment/locale/fr';
import axios from 'axios';

const AccountScreen = ({navigation, route}) => {
    const { faker } = require('@faker-js/faker');
    const [currentUser, setCurrentUser] = useState({});
    faker.setLocale('fr');
    let locale = moment();
    locale.locale('fr');
    locale.format('LLL');
    const {userToken} = route.params;

    
    const BASEURLAPI = 'http://192.168.1.54:8080/api';

    if (userToken !== '') {
        axios.get(`${BASEURLAPI}/users/current`,{
        headers: {
            'Authorization': 'Bearer ' + userToken
        }
        })
        .then((response) => setCurrentUser(response.data));
    }else{
        console.log('Je n\'ai pas reçu le token');
    }

    const[firstname,setFirstname] = useState("Roberto");
    const[lastname,setLastname] = useState("Carlos");
    const[phoneNumber,setPhoneNumber] = useState("07.59.46.13.79");
    
    let avatar = faker.image.people();
    
  return (
      <>
        <Header navigation={navigation} route={route} userToken={userToken}/>
        <ScrollView>
            <View>
                <Text style={[styles.title, {textDecorationLine:'underline'}]}>Mon compte</Text>
            </View>
            <View style={styles.informations_container}>
                <View style={styles.avatar_container}>
                    <Image style={styles.avatar} source={require('../../../assets/data/avatar.png')} />
                </View>
                <View style={styles.text_container}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.text}>Prénom: </Text>
                        <TextInput
                            style={styles.text} 
                            onChangeText={setFirstname}
                            value={currentUser.firstname !== '' ? currentUser.firstname : ''}
                        />
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.text}>Nom: </Text>
                        <TextInput
                            style={styles.text} 
                            onChangeText={setLastname}
                            value={currentUser.lastname !== '' ? currentUser.lastname : ''}
                        />
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.text}>Téléphone: </Text>
                        <TextInput
                            style={styles.text} 
                            onChangeText={setPhoneNumber}
                            value={phoneNumber}
                        />
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.text}>Email: </Text>
                        <TextInput
                            style={styles.text}
                            value={currentUser.email !== '' ? currentUser.email : ''}
                        />
                    </View>
                </View>
            </View>
            <MyOrdersScreen />
            <MyFavoritesScreen />
        </ScrollView>
      </>
  )
}

export default AccountScreen

const styles = StyleSheet.create({
    title:{
        textAlign:'center',
        fontSize:22,
        fontWeight:'bold'
    },
    avatar_container:{
        alignItems:'center'
    },
    avatar:{
        width:150,
        height: 150,
        marginRight:30,
        borderRadius:50,
        marginTop:-50,
        marginBottom:-20,
        marginLeft:20
    },
    informations_container:{
        marginTop:60,
        paddingBottom:20,
        width:'100%',
        backgroundColor:'#ebedf0',
        borderTopWidth:1,
        borderTopColor:'black'
    },
    text_container:{
        marginLeft: 30,
        marginTop:25,
    },
    text:{
        fontSize:18,
        marginTop:30,
    }
})