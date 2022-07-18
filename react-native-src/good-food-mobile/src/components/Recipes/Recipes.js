import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, {useState} from 'react';
const Recipes = ({name, price, updateCart, urlImage, cart}) => {
    function handleAddToCart(){
        updateCart([...cart, {name, price}]);
        console.log(cart);
    }
  return (
    <View style={styles.container}>
        <View style={styles.image_container}>
            <Image style={styles.image} source={require('../../../assets/data/food/chicken.jpg')} />
        </View>
        <View style={styles.recipe_container}>
            <Text style={[styles.text, styles.recipe_name]}>{name}</Text>
            <Text style={[styles.text, styles.recipe_price]}>{price} €</Text>
            <TouchableOpacity style={styles.add_button} onPress={() => {handleAddToCart()}}>
                <Text style={[styles.text, styles.text_add_button]}>Ajouter</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Recipes

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:2
    },
    recipe_container:{
        marginRight:30,
        marginLeft:30,
        width:150
    },
    image_container:{
        width:'50%',
        marginLeft:10,
        padding:10,
        borderRightColor:"black",
        borderRightWidth:1,
    },
    image:{
        height: 150,
        width: 150,
        borderRadius:50,
    },
    text:{
        fontSize: 18,
    },
    recipe_name:{
        fontWeight:'bold',
    },
    recipe_price:{

    },
    add_button:{
        backgroundColor: '#5998C5',
        width:80,
        padding:5,
        borderRadius:50,
        marginTop:20
    },
    text_add_button:{
        textAlign:'center',
    }
})