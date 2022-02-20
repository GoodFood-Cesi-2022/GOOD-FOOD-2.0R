import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

const CustomButton = ({onPress, text, type="PRIMARY", bgColor, fgColor }) => {
      
        return (
          <View style={[
              styles.container, 
              styles[`container_${type}`],
              bgColor ? {backgroundColor: bgColor} : {}
            ]}>
            <TouchableOpacity
              onPress={onPress}
            >
                <Text style={[
                    styles.text, 
                    styles[`text_${type}`],
                    fgColor ? {color: fgColor} : {}
                    ]}>{text}</Text>
            </TouchableOpacity>
          </View>
        );
}

export default CustomButton

const styles = StyleSheet.create({
    container:{
        width:'100%',
        marginVertical:5,
        alignItems:'center',
        borderWidth:1,
        borderRadius:5,
        padding:8,
    },
    container_PRIMARY:{
        backgroundColor:"#5D38F0",
    },
    container_TERTIARY:{
        borderWidth:0,
        marginBottom:10,
    },
    text:{
        color:'white',
    },
    text_TERTIARY:{
        fontWeight:'bold',
        color:'black',
    },
})