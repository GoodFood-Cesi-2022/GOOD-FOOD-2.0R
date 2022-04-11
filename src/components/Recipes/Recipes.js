import { Image, StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';

const Recipes = (props) => {
  return (
    <View style={styles.container}>
        <View style={styles.image_container}>
            <Image style={styles.image} source={{uri:'https://picsum.photos/200'}} />
        </View>
        <View style={styles.recipe_container}>
            <Text style={[styles.text, styles.recipe_name]}>{props.name}</Text>
            <Text style={[styles.text, styles.recipe_price]}>{props.price} €</Text>
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
    },
    recipe_container:{
        marginRight:30,
        width:150
    },
    image_container:{
        width:'50%',
        marginLeft:10,
        marginTop:15
    },
    image:{
        height: 150,
        width: 150,
    },
    text:{
        fontSize: 18,
    },
    recipe_name:{
        fontWeight:'bold',
    },
    recipe_price:{

    }
})