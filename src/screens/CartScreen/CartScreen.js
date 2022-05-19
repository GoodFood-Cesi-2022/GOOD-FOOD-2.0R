import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Linking } from 'react-native';
import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import { useNavigation } from '@react-navigation/native';

const CartScreen = ({route}) => {
    const navigation = useNavigation();
    const {shoppingCart} = route.params;
    console.log("Ceci est le panier :" + shoppingCart);
    
    let totalOrder = 0;

    const cartItems = shoppingCart.map(cartItem => {
        totalOrder += parseFloat(cartItem.price);
        
        console.log('this is total order : ' + totalOrder);
        return(
            <>
                <View key={Math.random(1000)*159*15} style={styles.cartItemsContainer}>
                    <View style={styles.info_item} key={cartItem.name}>
                        <Text style={[styles.text, styles.text_item_name]}>
                            {cartItem.name}
                        </Text>
                    </View>
                    <View style={styles.info_item} key={cartItem.name}>
                        <Text style={[styles.text, styles.text_item_price]}>
                            {cartItem.price} €
                        </Text>
                    </View>
                    <Text />
                </View>
            </>
        )
    });
    
  return (
        <>
            <Header />
            <Text style={styles.title}>Votre commande</Text>
            <ScrollView>
                <View style={[styles.cartItemsContainer, styles.main_container]}>
                    <Text style={[styles.heading_name, styles.text_item_name]}>Vos plats</Text>
                    <Text style={[styles.heading_price, styles.text_item_price]}>Prix</Text>
                </View>
                <View style={styles.container}>
                    {cartItems}
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.text}> Total de votre commande : </Text>
                    <Text style={styles.text}> {totalOrder.toFixed(2)} €</Text>
                </View>
                <View style={styles.button_container}>
                    <TouchableOpacity onPress={() => navigation.navigate('PaymentsUICompleteScreen', {totalOrder: totalOrder, shoppingCart: shoppingCart})} style={styles.button_to_pay}>
                        <Text style={styles.text_button_to_pay}>Payer</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
  )
}

export default CartScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'rgba(193,227,250, 0.5)',
    },
    main_container:{
    },
    cartItemsContainer:{
        width:'100%',
        height:50,
        flexDirection:'row',
        justifyContent:'space-around',
    },
    text:{
        fontSize: 18
    },
    heading_name:{
        fontSize: 18,
        marginRight:140,
        fontWeight:'bold'
    },
    heading_price:{
        fontSize: 18,
        fontWeight:'bold'
    },
    text_item_name:{
        textAlign:'left',
        marginLeft:15
    },
    text_item_price:{
        textAlign:'right',
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center'
    },
    info_item:{
        width: '45%',
        marginTop:5
    },
    button_container:{
        width:'100%',
        alignItems: 'center',
        marginTop:30
    },
    button_to_pay:{
        height: 40,
        width: 150,
        padding:5,
        borderRadius:50,
        backgroundColor: 'gray',
    },
    text_button_to_pay:{
        fontSize:15,
        textAlign:'center'
    },
    bottom:{
        borderTopWidth:2,
        flexDirection:'row',
        justifyContent:'flex-end',
        marginRight:20,
        paddingTop:15
    }
})