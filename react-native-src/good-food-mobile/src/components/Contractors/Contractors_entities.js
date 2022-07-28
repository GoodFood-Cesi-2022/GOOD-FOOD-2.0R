import { StyleSheet, Text, View, Image, Button } from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import fr_crous_restauration_france_entiere from '../../../assets/data/fr_crous_restauration_france_entiere.json';

const SortContractorsByCity = (city) => {
    
    let theRestaurants = [];
    
    // Sort Contractors by user's city
    let nearestRestaurants = fr_crous_restauration_france_entiere.map((restaurant, index) => {
        if (restaurant.fields.zone.indexOf(city) !== -1) {
            theRestaurants.push(restaurant);
            return restaurant;   
        }
    })
    return theRestaurants;
}

const RenderOneContractor = ({cart, urlImage, random}) => {
    const [isFavorite, setIsFavorite] = useState(true);
    const [favorites, setFavorites] = useState();
    const { faker } = require('@faker-js/faker');
    faker.setLocale('fr');
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

    const navigation = useNavigation();

    let restaurants = SortContractorsByCity("Grenoble");
    const arr = Array.from(restaurants);
    return(
        <>
            <View 
            key={random} 
            style={styles.contractorsContainer}
            >
                <Image style={styles.image} source={urlImage} />
                <View
                onStartShouldSetResponder={() => {
                    setIsFavorite(!isFavorite);
                }} 
                >
                    <Image 
                        style={styles.favorite_logo}  
                        source={isFavorite ?  require('../../../assets/etoile_pleine.png') : require('../../../assets/etoile_vide.png')} 
                    />
                </View>
                <View style={styles.textOverflow} >
                    <Button
                        title={arr[random].fields.title}
                        onPress={() => navigation.navigate('ContractorScreen',{
                            contractorName: arr[random].fields.title,
                            contractorPhoneNumber: contractorEntity.phone_number,
                            cart: cart
                        })}
                        style={styles.button_title}
                    />
                    
                </View>
                    <Text>{arr[random].fields.infos}</Text>
            </View>
        </>
    )
}

const Contractors_entities = ({cart, updateCart}) => {
    const { faker } = require('@faker-js/faker');
    const [isFavorite, setIsFavorite] = useState(true);
    faker.setLocale('fr');
    
    
    const RenderRestaurant = () => {
        let min=0; 
        let max=7;  
        let random =  Math.floor(Math.random()) * (max - min) + min;
        switch(random){
            case 0:
                return <RenderOneContractor urlImage={require("../../../assets/data/food/saumon.jpg")} random={random} />
                break;
            case 1:
                return <RenderOneContractor urlImage={require("../../../assets/data/food/entrecote.jpg")} random={random} />
                break;
            case 2:
                return <RenderOneContractor urlImage={require("../../../assets/data/food/chicken.jpg")} random={random} />
                break;
            case 3:
                return <RenderOneContractor urlImage={require("../../../assets/data/food/czech.jpg")} random={random} />
                break;
            case 4:
                return <RenderOneContractor urlImage={require("../../../assets/data/food/salade-verte.jpg")} random={random} />
                break;
            case 5:
                return <RenderOneContractor urlImage={require("../../../assets/data/food/poulet-wings.jpeg")} random={random}  />
                break;
            case 6:
                return <RenderOneContractor urlImage={require("../../../assets/data/food/caille.jpg")} random={random} />
                break;
            case 7:
                return <RenderOneContractor urlImage={require("../../../assets/data/food/burger.jpg")} random={random} />
                break;
            default:
                break;
            }
    }
    return (
        <View style={styles.container_contractors_entities}>
            <RenderRestaurant />
            <RenderRestaurant />
            <RenderRestaurant />
            <RenderRestaurant />
            <RenderRestaurant />
            <RenderRestaurant />
            <RenderRestaurant />
            <RenderRestaurant />
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
        right:0,
        top:0,
        position:"absolute"
    },
    text:{
        fontSize:18,
        fontWeight:"bold",
        color:"black",
    },
    textOverflow:{
        flexDirection:'row',
        justifyContent:'space-between',
        height:50,
        right:0,
    },
    button_title:{
        height:60,
    }
})