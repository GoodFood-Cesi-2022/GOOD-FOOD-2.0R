import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const CustomInput = ({value, setValue, placeholder,secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput 
        value={value}
        onChangeText={setValue}
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry} />
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#6FE3F0',
        width:'100%',
        justifyContent:'center',
        height:40,
        borderColor:'#07C7F7',
        borderWidth:1,
        borderRadius:5,
        paddingHorizontal:10,
        marginVertical:10,
    },
    input:{
    },
})