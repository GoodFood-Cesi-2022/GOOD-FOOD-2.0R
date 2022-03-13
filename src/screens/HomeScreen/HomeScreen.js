import { StyleSheet, Text, ScrollView, Image, View } from 'react-native';
import React from 'react';
import Contractors from '../../components/Contractors/Contractors';
import Location from '../../components/Location/Location';

const HomeScreen = () => {
  

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={[styles.text, styles.title]}>Notre sélection proche de chez vous !</Text>
        <Location/>
        <Contractors/>
      </View>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  root:{
    backgroundColor:"#FAF5FF",
  }
  ,
  text:{
    fontSize:18,
    fontWeight:"bold",
    color:"black",
  },
  title:{
    color:"#111112",
    fontSize:32,
    textAlign:"center",
  }
})