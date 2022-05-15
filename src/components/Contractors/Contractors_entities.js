import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Contractors_entities = () => {
    const { faker } = require('@faker-js/faker');
    faker.setLocale('fr');
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
    
    const renderContractors = contractors_entities.map(contractor => {
        const imageUrl = faker.image.food(300, 200, true);
        const navigation = useNavigation();
        return(
            <>
                <View 
                key={contractor.id} 
                style={styles.contractorsContainer}
                >
                    <Image style={styles.image} source={{uri: imageUrl}} />
                    <View key={contractor.id} style={styles.textOverflow}>
                        <Text 
                        style={styles.text} 
                        onStartShouldSetResponder={() => navigation.navigate('ContractorScreen',{
                            contractorName: contractor.name,
                            contractorAvatar: contractor.avatar,
                            contractorPhoneNumber: contractor.phone_number,
                        })}>
                            Restaurant {contractor.name}
                        </Text>
                    </View>
                    <Text />
                </View>
            </>
        )
    });

    return (
        <View style={styles.container_contractors_entities}>
            {renderContractors}
        </View>
    )
}

export default Contractors_entities

const styles = StyleSheet.create({
    main:{
        marginTop:30,
        alignItems:"center",
        flexDirection:'column',
        width:'100%',
    },
    contractorsContainer:{
        paddingVertical:20,
        width: '100%',
    },
    image:{
        height:200,
        marginBottom:10,
    },
    text:{
        fontSize:18,
        fontWeight:"bold",
        color:"black",
    },
    textOverflow:{
        width:200,
        height:50,
        right:0,
    }
})