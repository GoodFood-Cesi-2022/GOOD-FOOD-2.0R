import { StyleSheet, Text, ScrollView, Image, View } from 'react-native';
import React from 'react';

const HomeScreen = () => {
  const { faker } = require('@faker-js/faker');
  let contractors =[
      {
          "id": 1,
          "name": faker.name.firstName(),
          "phone_number": faker.phone.phoneNumber(),
          "created_at": faker.datatype.datetime(),
          "updated_at": faker.datatype.datetime(),
          "deleted_at": faker.datatype.datetime(),
          "created_by": faker.name.firstName(),
          "adress_id": 1,
          "email_id": 1,
          "contractor_group_id": 1,
          "timezone": faker.address.timeZone(),
          "max_delivery_radius": 50,
          "avatar": faker.image.avatar()
      },
      {
          "id": "2",
          "name": faker.name.firstName(),
          "phone_number": faker.phone.phoneNumber(),
          "created_at": faker.datatype.datetime(),
          "updated_at": faker.datatype.datetime(),
          "deleted_at": faker.datatype.datetime(),
          "created_by": faker.name.firstName(),
          "adress_id": 2,
          "email_id": 2,
          "contractor_group_id": 2,
          "timezone": faker.address.timeZone(),
          "max_delivery_radius": 20,
          "avatar": faker.image.avatar()
      },
      {
          "id": 3,
          "name": faker.name.firstName(),
          "phone_number": faker.phone.phoneNumber(),
          "created_at": faker.datatype.datetime(),
          "updated_at": faker.datatype.datetime(),
          "deleted_at": faker.datatype.datetime(),
          "created_by": faker.name.firstName(),
          "adress_id": 3,
          "email_id": 3,
          "contractor_group_id": 3,
          "timezone": faker.address.timeZone(),
          "max_delivery_radius": 70,
          "avatar": faker.image.avatar()
      }];

  const contractorsData = () => {
    let result = contractors.map(function(contractorItem) {
      const imageUrl = "https://baconmockup.com/250/250";
      return (
          <>
            <View style={[styles.contractorsContainer, styles.shadow]}>
              <Image style={styles.image} source={{uri: imageUrl}} />
              <Text style={styles.text}>Restaurant {contractorItem.name}</Text>
              <Text style={styles.text}>Tél. : {contractorItem.phone_number}</Text>
              <Text />
            </View>
          </>
        );
    });

    return result;
  };

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
    {contractorsData()}
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  contractorsContainer:{
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    maxWidth: '100%',
    margin: 10,
    alignItems:"center",
  },
  shadow:{
    elevation: 11,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
  },
  image:{
    height:250, 
    width:250,  
    marginBottom:10
  }
  ,
  text:{
    fontSize:18,
    fontWeight:"bold"
  }
})