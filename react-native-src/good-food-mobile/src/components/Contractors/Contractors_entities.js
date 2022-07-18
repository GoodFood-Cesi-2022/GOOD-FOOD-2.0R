import { StyleSheet, Text, View, Image, Button } from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import fr_crous_restauration_france_entiere from '../../../assets/data/fr_crous_restauration_france_entiere.json';

const Contractor = ({cart}) => {
    const { faker } = require('@faker-js/faker');
    const [isFavorite, setIsFavorite] = useState(true);
    
    faker.setLocale('fr');
    const navigation = useNavigation();

    // const [favorites, setFavorites] = useState();
    
    const [ contractorEntity, setContractorEntity] = useState([{
        "id": 1,
        "name": "",
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
    }])

    let theRestaurants = [];
    let foodArray = ["../../../assets/data/food/burger.jpg", "../../../assets/data/food/chicken.jpg", "../../../assets/data/food/cocktails.jpg", "../../../assets/data/food/czech.jpg", "../../../assets/data/food/latte.jpg", "../../../assets/data/food/rostbeef.jpg", "../../../assets/data/food/thai.jpg"];
    
    // Sort Contractors by user's city
    let nearestRestaurants = fr_crous_restauration_france_entiere.map((restaurant, index) => {
        if (restaurant.fields.zone.indexOf("Grenoble") !== -1) {
            
            theRestaurants.push(restaurant);
            return(
                <>
                    <View 
                    key={index} 
                    style={styles.contractorsContainer}
                    >
                        <Image style={styles.image} source={require("../../../assets/data/food/burger.jpg")} />
                        <View style={styles.textOverflow} >
                                <Button
                                    title={restaurant.fields.title}
                                    onPress={() => navigation.navigate('ContractorScreen',{
                                        contractorName: restaurant.fields.title,
                                        contractorPhoneNumber: contractorEntity.phone_number,
                                        cart: cart
                                    })}
                                    style={styles.button_title}
                                />
                            {/* <View
                            onStartShouldSetResponder={() => {
                                setIsFavorite(!isFavorite);
                            }} 
                            >
                                <Image 
                                    style={styles.favorite_logo}  
                                    source={isFavorite ?  require('../../../assets/etoile_pleine.png') : require('../../../assets/etoile_vide.png')} 
                                />
                            </View> */}
                        </View>
                    </View>
                </>
                )
        }else{
            return
        }
    })
    
    return nearestRestaurants
    
}
const Contractors_entities = ({cart, updateCart}) => {
    const { faker } = require('@faker-js/faker');
    const [isFavorite, setIsFavorite] = useState(true);
    faker.setLocale('fr');
    
    return (
        <View style={styles.container_contractors_entities}>
            <Contractor />
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
        backgroundColor:'rgb(230,237,249)'
    },
    image:{
        height:200,
        width:400,
        marginBottom:10,
    },
    favorite_logo:{
        width:30,
        height:30,
        marginLeft:125,
        marginTop: -5
    },
    text:{
        fontSize:18,
        fontWeight:"bold",
        color:"black",
    },
    textOverflow:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:200,
        height:50,
        right:0,
    },
    button_title:{
        height:80,
    }
})