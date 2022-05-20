import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header/Header';
//Import moment for date and time
import moment from 'moment';
import 'moment/locale/fr';
import { ListItem } from 'react-native-elements'

const AccountScreen = () => {
    const { faker } = require('@faker-js/faker');
    faker.setLocale('fr');
    var locale = moment();
    locale.locale('fr');
    locale.format('LLL');

    const [user, setUser] = useState({
        id: 1,
        firstname: "",
        lastname: "",
        password: "",
        created_at: "",
        updated_at: "",
        phone_number: 0,
        email_id: 1
    });
    let users = [
        {
            "id": 1,
            "firstname": faker.name.firstName(),
            "lastname": faker.name.lastName(),
            "password": faker.internet.password(),
            "created_at": moment(1316116057189).fromNow(),
            "updated_at": moment().startOf('day').fromNow(),
            "phone_number": faker.phone.phoneNumber(),
            "email_id": 1
        },
        {
            "id": 2,
            "firstname": faker.name.firstName(),
            "lastname": faker.name.lastName(),
            "password": faker.internet.password(),
            "created_at": moment(6001).fromNow(),
            "updated_at": moment().startOf('day').fromNow(),
            "phone_number": faker.phone.phoneNumber(),
            "email_id": 2
        },
        {
            "id": 3,
            "firstname": faker.name.firstName(),
            "lastname": faker.name.lastName(),
            "password": faker.internet.password(),
            "created_at": moment().startOf('day').fromNow(),
            "updated_at": moment().startOf('day').fromNow(),
            "phone_number": faker.phone.phoneNumber(),
            "email_id": 3
        },
        ];

    let avatar = faker.image.people();

    
        const list = [
            {
              title: 'Restaurant "Chez Gino"',
              price: '89,50€'
            },
            {
              title: 'Asia Trips',
              price: '34,70€'
            },
            // more items
          ]

  return (
      <>
        <Header />
        <ScrollView>
            <View style={styles.title_container}>
                <Text style={styles.title}>Mon compte</Text>
            </View>
            <View style={styles.informations_container}>
                <View style={styles.avatar_container}>
                    <Image style={styles.avatar} source={{uri:avatar}} />
                </View>
                <View style={styles.text_container}>
                    <Text style={styles.text}>Prénom: {users[0].firstname}</Text>
                    <Text style={styles.text}>Nom: {users[0].lastname}</Text>
                    <Text style={styles.text}>Téléphone: {users[0].phone_number}</Text>
                    <Text style={[styles.text, {marginRight:20}]}>Email: {users[0].firstname}.{users[0].lastname}@viacesi.fr</Text>
                </View>
            </View>
            <View>
                <Text style={[styles.title, {marginTop:20}]}>Mes commandes</Text>
            </View>
            <View style={{width:'100%'}}>
                <View style={{flexDirection:'row', width:'100%', justifyContent:'space-between', padding:10}}>
                    <Text style={styles.text}>{list[0].title}</Text>
                    <Text style={styles.text}>{list[0].price}</Text>
                </View>
                <View style={{flexDirection:'row', width:'100%', justifyContent:'space-between', padding:10}}>
                    <Text style={styles.text}>{list[1].title}</Text>
                    <Text style={styles.text}>{list[1].price}</Text>
                </View>
            </View>
        </ScrollView>
      </>
  )
}

export default AccountScreen

const styles = StyleSheet.create({
    title:{
        textAlign:'center',
        fontSize:22,
    },
    avatar_container:{
        alignItems:'center'
    },
    avatar:{
        width:150,
        height: 150,
        marginRight:30,
        borderRadius:50,
    },
    informations_container:{
        marginTop:60,
        paddingBottom:20,
        width:'100%',
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