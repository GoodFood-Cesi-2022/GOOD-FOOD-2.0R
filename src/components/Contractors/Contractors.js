import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Contractors_entities from './Contractors_entities';


const Contractors = ({cart, updateCart}) => {
  return (
    <View style={styles.main}>
      <Contractors_entities  updateCart={updateCart} cart={cart} />
    </View>
  )
}

export default Contractors

const styles = StyleSheet.create({
  main:{
    maxWidth:"100%",
  }
})