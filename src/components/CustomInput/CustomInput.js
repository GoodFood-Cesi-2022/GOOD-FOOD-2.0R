import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import {Controller} from 'react-hook-form';

const CustomInput = ({control, name, placeholder, secureTextEntry, rules = {}}) => {
  return (
    
      <Controller 
        control={control}
        name={name}
        rules={rules}
        render = {({field: {value, onChange, onBlur}, fieldState: {error}}) => { 
          return(
            <>
              <View style={[styles.container, {borderColor: error ? 'red' : '#6FE3F0'}]}>
                <TextInput 
                  value={value} 
                  onChangeText={onChange} 
                  onBlur={onBlur}
                  placeholder={placeholder}
                  style={styles.input}
                  secureTextEntry={secureTextEntry} />
              </View>
              { error && <Text style={{color: 'red', alignSelf:'stretch'}}>{error.message || 'Error' }</Text>}
            </>
            );
          }
        }
      />
  )
}

export default CustomInput

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        width:'100%',
        justifyContent:'center',
        height:40,
        borderColor:'#e8e8e8',
        borderWidth:1,
        borderRadius:5,
        paddingHorizontal:10,
        marginVertical:10,
    },
    input:{
    },
})