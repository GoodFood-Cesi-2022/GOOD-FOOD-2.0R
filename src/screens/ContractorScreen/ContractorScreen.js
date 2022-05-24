import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity,Button} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header/Header';
import Recipes from '../../components/Recipes/Recipes';
import { useNavigation } from '@react-navigation/native';

const ContractorScreen = ({route, cart}) => {
    const {contractorName, contractorAvatar, contractorPhoneNumber} = route.params;
    const navigation = useNavigation();
    const [shopCart, updateShopCart] = useState([]);
    const [wingsCounter, setWingsCounter] = useState(0);
    const [bucketDuoCounter, setbucketDuoCounter] = useState(0);

    console.log("Longueur du panier: "+ shopCart.length);

    return (
        <>
            <Header />
            <View style={styles.container}>
                <View style={styles.contractor_header}>
                    <Image style={styles.image} source={{uri: contractorAvatar}} />
                    <View>
                        <Text style={[styles.contractor_name, styles.text]}>Restaurant {contractorName}</Text>
                        <Text style={[styles.contractor_phone_number, styles.text]}>{contractorPhoneNumber}</Text>
                    </View>
                </View>
            </View>
            <View>
                <Text style={[styles.text, styles.titre_section]}>Notre sélection pour vous</Text>
            </View>
            <ScrollView>
                <Text style={styles.titre_section}>Entrées</Text>
                <View>
                    <Recipes name='Chicken wings' price= '3.90' updateCart={updateShopCart} cart={shopCart} setWingsCounter={setWingsCounter} wingsCounter={wingsCounter} />
                    <Recipes name='Mozzarella sticks' price= '3.90' updateCart={updateShopCart} cart={shopCart} setWingsCounter={setWingsCounter} wingsCounter={wingsCounter} />
                    <Recipes name='Salade verte' price= '2.00' updateCart={updateShopCart} cart={shopCart} setWingsCounter={setWingsCounter} wingsCounter={wingsCounter} />
                </View>
                <Text style={styles.titre_section}>Plats</Text>
                <View>
                    <Recipes name='Saumon au beurre blanc' price= '17.50' updateCart={updateShopCart} cart={shopCart} setbucketDuoCounter={setbucketDuoCounter} bucketDuoCounter={bucketDuoCounter} />
                    <Recipes name='Entrecôte XXL' price= '23.50' updateCart={updateShopCart} cart={shopCart} setbucketDuoCounter={setbucketDuoCounter} bucketDuoCounter={bucketDuoCounter} />
                    <Recipes name='Caille farcie foie gras' price= '27.50' updateCart={updateShopCart} cart={shopCart} setbucketDuoCounter={setbucketDuoCounter} bucketDuoCounter={bucketDuoCounter} />
                </View>
                <Text style={styles.titre_section}>Desserts</Text>
                <View>
                    <Recipes name='Brioche perdue' price= '7.50' updateCart={updateShopCart} cart={shopCart} setbucketDuoCounter={setbucketDuoCounter} bucketDuoCounter={bucketDuoCounter} />
                    <Recipes name='Mille-feuilles' price= '7.50' updateCart={updateShopCart} cart={shopCart} setbucketDuoCounter={setbucketDuoCounter} bucketDuoCounter={bucketDuoCounter} />
                    <Recipes name='Crème brulée' price= '7.50' updateCart={updateShopCart} cart={shopCart} setbucketDuoCounter={setbucketDuoCounter} bucketDuoCounter={bucketDuoCounter} />
                </View>
                <Text style={styles.titre_section}>Boissons</Text>
                <View>
                    <Recipes name='Coca-Cola 33cl' price= '2.00' updateCart={updateShopCart} cart={shopCart} setbucketDuoCounter={setbucketDuoCounter} bucketDuoCounter={bucketDuoCounter} />
                    <Recipes name='Orangina 33cl' price= '2.00' updateCart={updateShopCart} cart={shopCart} setbucketDuoCounter={setbucketDuoCounter} bucketDuoCounter={bucketDuoCounter} />
                    <Recipes name='Ice-tea 33cl' price= '2.00' updateCart={updateShopCart} cart={shopCart} setbucketDuoCounter={setbucketDuoCounter} bucketDuoCounter={bucketDuoCounter} />
                </View>
                <View style={[styles.container_bottom, styles.container_button_order]}>
                    <Text 
                    style={styles.title_button} 
                    onStartShouldSetResponder={() => navigation.navigate('CartScreen',{
                        shoppingCart: shopCart,
                    })}>
                        Voir mon panier
                    </Text>
                </View>
            </ScrollView>
            
        </>
    )
}

export default ContractorScreen

const styles = StyleSheet.create({
    container:{
       borderBottomWidth: 2,
    },
    contractor_header:{
        flexDirection:'row',
    },
    image:{
        width: 200,
        height:200,
        borderRadius: 100,
        marginBottom:20,
    },
    contractor_name:{
        marginTop:80,
        marginLeft: 30,
    },
    contractor_phone_number:{
        marginTop:20,
        marginLeft: 30,
    },
    text:{
        fontWeight:'bold',
    },
    titre_section:{
        fontSize:18,
        marginTop:10,
        fontWeight:'bold',
    },
    container_button_order:{
        height:40,
        width:150,
        backgroundColor:'grey',
        borderWidth:1,
        padding:5
    },
    title_button:{
        fontSize:16,
        textAlign:'center',
        fontWeight:'bold',
        color:'white'
    },
    container_bottom:{
        width:'100%',
        height:60,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal: '30%',
        flexDirection:'row',
        marginTop:30,
    }
})