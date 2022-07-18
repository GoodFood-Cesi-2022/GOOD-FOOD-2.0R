import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

const CustomButton = ({onPress, text, type="PRIMARY", bgColor, fgColor }) => {
      
        return (
          <View>
            <TouchableOpacity
              onPress={onPress}
              style={{width:200}}
            >
                <View style={[
                styles.container, 
                styles[`container_${type}`],
                bgColor ? {backgroundColor: bgColor} : {}
                ]}>
                    <Text style={[
                        styles.text, 
                        styles[`text_${type}`],
                        fgColor ? {color: fgColor} : {}
                        ]}>{text}
                    </Text>
                </View>
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
    container_SECONDARY:{
        borderColor:"#5D38F0",
        borderWidth:2,
        borderRadius:5,
    },
    container_TERTIARY:{
        borderWidth:0,
    },
    text:{
        fontWeight:'bold',
        color:'white',
    },
    text_SECONDARY:{
        fontWeight:'bold',
        color:'#5D38F0',
    },
    text_TERTIARY:{
        fontWeight:'bold',
        color:'black',
    },
})