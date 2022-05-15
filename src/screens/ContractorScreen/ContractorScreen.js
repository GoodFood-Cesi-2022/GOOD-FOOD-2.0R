import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity,Button} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header/Header';
import Recipes from '../../components/Recipes/Recipes';
import { useNavigation } from '@react-navigation/native';

const ContractorScreen = ({route}) => {
    const {contractorName, contractorAvatar, contractorPhoneNumber} = route.params;
    const [cart, updateCart] = useState([]);
    const navigation = useNavigation();
    console.log(cart.length);

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
                <View>
                    <Recipes name='Chicken wings' price= '3.90' updateCart={updateCart} cart={cart} />
                </View>
                <View>
                    <Recipes name='Bucket duo' price= '17.50' updateCart={updateCart} cart={cart} />
                </View>
                <View style={[styles.container_bottom, styles.container_button_order]}>
                    <Text 
                    style={styles.title_button} 
                    onStartShouldSetResponder={() => navigation.navigate('CartScreen',{
                        shoppingCart: cart,
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
        flexDirection:'row',
        marginTop:30
    }
})