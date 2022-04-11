import { StyleSheet, Text, View, Image } from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header/Header';
//Import moment for date and time
import moment from 'moment';
import 'moment/locale/fr';

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
  return (
      <>
        <Header />
        <View style={styles.title_container}>
            <Text style={styles.title}>Mon compte</Text>
        </View>
        <View style={styles.informations_container}>
            <View style={styles.avatar_container}>
                <Image style={styles.avatar} source={{uri:avatar}} />
            </View>
            <View style={styles.text_container}>
                <Text style={styles.text}>{users[0].firstname} {users[0].lastname}</Text>
                <Text style={styles.text}>{users[0].phone_number}</Text>
                <Text style={styles.text}>{users[0].firstname}.{users[0].lastname}@viacesi.fr</Text>
            </View>
        </View>
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
        marginTop:80,
        marginLeft: 30,
    },
    text_container:{
        marginLeft: 30,
        marginTop:40
    },
    text:{
        fontSize:20,
        marginTop:30,
    }
})