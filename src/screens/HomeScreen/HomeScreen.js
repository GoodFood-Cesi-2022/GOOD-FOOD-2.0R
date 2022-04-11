import { StyleSheet, Text, ScrollView, Button, View, Image } from 'react-native';
import React from 'react';
import Contractors from '../../components/Contractors/Contractors';
import UserLocation from '../../components/UserLocation/UserLocation';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      <Image 
          style={styles.tinyLogo}
          source={require('../../../assets/tiny_logo_good_food.png')}
      />
      <ScrollView contentContainerStyle={styles.root} showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1}}>
          <Text style={[styles.text, styles.title]}>Les restaurants près de chez vous !</Text>
          <Button
            title="Voir la carte"
            onPress={() => navigation.navigate('MapScreen')}
          />
          <UserLocation/>
          <Contractors/>
        </View>
      </ScrollView>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  root:{
    alignItems: 'center',
    justifyContent: 'center'
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
  },
  tinyLogo:{
    marginTop:30,
    alignSelf:'center'
  }
})