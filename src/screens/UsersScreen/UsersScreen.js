import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
//Import moment for date and time
import moment from 'moment';
import 'moment/locale/fr';

const UsersScreen = (props) => {
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
        let listUsers = users.map(userInfo => {
            return (
            <View>
                <Text>{userInfo.firstname + " " + userInfo.lastname}</Text>
                <Text>L'utilisateur a été créé à {userInfo.created_at}</Text>
            </View>
                )
        })
  return (
    <View>
      {listUsers}
    </View>
  )
}

export default UsersScreen

const styles = StyleSheet.create({})