import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Contractors = () => {
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
        let result = contractors.map(function(contractorItem, index) {
        const imageUrl = "https://baconmockup.com/250/250";
        return (
            <>
                <View  key={index} style={styles.contractorsContainer}>
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
    <View>
      {contractorsData()}
    </View>
  )
}

export default Contractors

const styles = StyleSheet.create({
    contractorsContainer:{
        backgroundColor: 'rgba(229, 228, 241, 0.7)',
        borderRadius: 8,
        maxHeight: 350,
        paddingVertical:20,
        margin: 10,
        alignItems:"center",
        justifyContent:"center",
        marginHorizontal:"10%"
      },
      image:{
        height:200, 
        width:200,  
        marginBottom:10,
        borderRadius: 30
      },
      text:{
        fontSize:18,
        fontWeight:"bold",
        color:"black",
      }
})