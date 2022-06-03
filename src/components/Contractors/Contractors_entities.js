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

const Contractor = ({name, cart}) => {
    const { faker } = require('@faker-js/faker');
    const [isFavorite, setIsFavorite] = useState(true);
    faker.setLocale('fr');
    const imageUrl = faker.image.food(300, 200, true);
    const navigation = useNavigation();
    
    const [favorites, setFavorites] = useState();
    
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

    let nearestRestaurants = fr_crous_restauration_france_entiere.map((restaurant) => {
        let theRestaurants = [];
        if (restaurant.fields.zone.indexOf("Grenoble") !== -1) {
            theRestaurants.push(restaurant);
            console.log(theRestaurants)
        }else{
            return
        }
        return nearestRestaurants;
    })

    return(
        <>
            <View 
            key={10} 
            style={styles.contractorsContainer}
            >
                {nearestRestaurants}
                <Image style={styles.image} source={{uri: imageUrl}} />
                <View key={1} style={styles.textOverflow}>
                    <Text
                        key={2}  
                    style={styles.text} 
                    onStartShouldSetResponder={() => navigation.navigate('ContractorScreen',{
                        contractorName: name,
                        contractorAvatar: contractorEntity.avatar,
                        contractorPhoneNumber: contractorEntity.phone_number,
                        cart: cart
                    })}>
                        {`Restaurant ${name}`}
                    </Text>
                    {
                        isFavorite ? 
                            <Image 
                                onStartShouldSetResponder={() => {
                                    setIsFavorite(!isFavorite); 
                                    // setFavorites(...favorites, [name]);
                                    // console.log(favorites);
                                }}  
                                key={3} 
                                style={styles.favorite_logo}  
                                source={require('../../../assets/etoile_vide.png')} 
                            />
                        :
                            <Image 
                                onStartShouldSetResponder={() => {
                                    setIsFavorite(!isFavorite);
                                    // let favoriIndex = favorites.indexOf({ ${name}});
                                    // favorites.splice( favoriIndex, 1);
                                }
                                }  
                                key={3} 
                                style={styles.favorite_logo}  
                                source={require('../../../assets/etoile_pleine.png')} 
                            />
                    }
                </View>
                <Text />
            </View>
        </>
    )
}
const Contractors_entities = ({cart, updateCart}) => {
    const { faker } = require('@faker-js/faker');
    const [isFavorite, setIsFavorite] = useState(true);
    faker.setLocale('fr');
    
    return (
        <View style={styles.container_contractors_entities}>
            <Contractor name="Le Rousseau"/>
            <Contractor name="La Corne d'Or"/>
            <Contractor name="Chavant"/>
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