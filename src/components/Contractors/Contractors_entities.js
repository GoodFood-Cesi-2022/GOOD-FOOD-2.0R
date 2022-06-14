import { StyleSheet, Text, View, Image } from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import fr_crous_restauration_france_entiere from '../../../assets/data/fr_crous_restauration_france_entiere.json';

// Contractors near to the user's city
// const FindNearRestaurants = () => { 
//     let nearestRestaurants = fr_crous_restauration_france_entiere.map((restaurant) => {
//         if (restaurant.fields.zone.indexOf("Grenoble") !== -1) {
//             setNearRestaurants(...nearRestaurants, restaurant);
//             console.log(nearRestaurants);
//         }else{
//             alert("Aucun restaurants trouvés dans votre zone");
//             return
//         }
//         return nearRestaurants;
//     })
//     return nearestRestaurants
// }

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

    // Sort Contractors by user's city
    let nearestRestaurants = fr_crous_restauration_france_entiere.map((restaurant) => {
        if (restaurant.fields.zone.indexOf("Grenoble") !== -1) {
            theRestaurants.push(restaurant);
            // console.log(theRestaurants)
            return(
                <>
                    <View 
                    key={10} 
                    style={styles.contractorsContainer}
                    >
                        <Image key={1} style={styles.image} source={{uri: restaurant.fields.photo}} />
                        <View key={1 + 1} style={styles.textOverflow}>
                            <Text
                                key={2 + 1 }  
                            style={styles.text} 
                            onStartShouldSetResponder={() => navigation.navigate('ContractorScreen',{
                                contractorName: restaurant.fields.title,
                                contractorAvatar: restaurant.fields.photo,
                                contractorPhoneNumber: contractorEntity.phone_number,
                                cart: cart
                            })}>
                                {restaurant.fields.title}
                            </Text>
                            <View
                            onStartShouldSetResponder={() => {
                                setIsFavorite(!isFavorite);
                            }} 
                            >
                                <Image
                                    key={3 + 1} 
                                    style={styles.favorite_logo}  
                                    source={isFavorite ?  require('../../../assets/etoile_pleine.png') : require('../../../assets/etoile_vide.png')} 
                                />
                            </View>
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
    },
    image:{
        height:200,
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
    }
})