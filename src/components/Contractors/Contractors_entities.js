import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const Contractors_entities = () => {
    const { faker } = require('@faker-js/faker');
    let contractors_entities =[
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
    let contractors_adresses = [
        {
            "id": 1,
            "first_line": faker.address.streetName(),
            "second_line": faker.address.secondaryAddress(),
            "zip_code": faker.address.zipCode(),
            "country": faker.address.country(),
            "city": faker.address.cityName(),
            "lat": faker.address.latitude(),
            "lng": faker.address.longitude()
        },
        {
            "id": 2,
            "first_line": faker.address.streetName(),
            "second_line": faker.address.secondaryAddress(),
            "zip_code": faker.address.zipCode(),
            "country": faker.address.country(),
            "city": faker.address.cityName(),
            "lat": faker.address.latitude(),
            "lng": faker.address.longitude()
        },
        {
            "id": 3,
            "first_line": faker.address.streetName(),
            "second_line": faker.address.secondaryAddress(),
            "zip_code": faker.address.zipCode(),
            "country": faker.address.country(),
            "city": faker.address.cityName(),
            "lat": faker.address.latitude(),
            "lng": faker.address.longitude()
        },
        ];

    const contractorsData = () => {
        const imageUrl = "https://baconmockup.com/250/250";
        return (
            <>
                <View style={styles.main}>
                    <Image style={styles.image} source={{uri: imageUrl}} />
                    <View  key={contractors_entities[0].id} style={styles.contractorsContainer}>
                        <View style={styles.textOverflow}>
                            <Text style={styles.text}>Restaurant {contractors_entities[0].name}</Text>
                            <Text style={styles.text}>{contractors_adresses[0].zip_code + " " + contractors_adresses[0].city}</Text>
                            <Text style={styles.text}>Rayon de livraison : {contractors_entities[0].max_delivery_radius} km</Text>
                            <Text style={styles.text}>Tél. : {contractors_entities[0].phone_number}</Text>
                        </View>
                        <Text />
                    </View>
                    <Image style={styles.image} source={{uri: imageUrl}} />
                    <View  key={contractors_entities[1].id} style={styles.contractorsContainer}>
                        <View style={styles.textOverflow}>
                            <Text style={styles.text}>Restaurant {contractors_entities[1].name}</Text>
                            <Text style={styles.text}>{contractors_adresses[1].zip_code + " " + contractors_adresses[1].city}</Text>
                            <Text style={styles.text}>Rayon de livraison : {contractors_entities[1].max_delivery_radius} km</Text>
                            <Text style={styles.text}>Tél. : {contractors_entities[1].phone_number}</Text>
                        </View>
                        <Text />
                    </View>
                    <Image style={styles.image} source={{uri: imageUrl}} />
                    <View  key={contractors_entities[2].id} style={styles.contractorsContainer}>
                        <View style={styles.textOverflow}>
                            <Text style={styles.text}>Restaurant {contractors_entities[2].name}</Text>
                            <Text style={styles.text}>{contractors_adresses[2].zip_code + " " + contractors_adresses[2].city}</Text>
                            <Text style={styles.text}>Rayon de livraison : {contractors_entities[2].max_delivery_radius} km</Text>
                            <Text style={styles.text}>Tél. : {contractors_entities[2].phone_number}</Text>
                        </View>
                        <Text />
                    </View>
                </View>
            </>
        );
    };
    

    return (
        <View style={styles.container_contractors_entities}>
            <>
                {contractorsData()}
            </>
        </View>
    )
}

export default Contractors_entities

const styles = StyleSheet.create({
    main:{
        marginTop:30,
        alignItems:"center",
    },
    contractorsContainer:{
        flexDirection:'column',
        paddingVertical:20,
        maxWidth:'100%'
    },
    image:{
        height:200,
        width:200,  
        marginBottom:10,
        marginLeft:20,
        borderRadius: 30,
    },
    text:{
        fontSize:18,
        fontWeight:"bold",
        color:"black",
    },
    textOverflow:{
        maxWidth:"60%",
        position:"relative",
        marginRight:0,
        marginTop:-80,
        backgroundColor:"white",
    }
})