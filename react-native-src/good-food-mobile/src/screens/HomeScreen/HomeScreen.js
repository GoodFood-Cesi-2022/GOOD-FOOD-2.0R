import { StyleSheet, Text, ScrollView, Button, View, Image, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import Contractors from '../../components/Contractors/Contractors';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const HomeScreen = ({ navigation, route }) => {
  /* 2. Get the param */
  const { userToken } = route.params;
  const nav = useNavigation();
  const [cart, updateCart] = useState([]);
  const [users, setUsers] = useState();

  // const BASEURLAPI = 'http://192.168.1.54:8080/api';

  // if (userToken !== '') {
  //   axios.get(`${BASEURLAPI}/users`,{
  //     headers: {
  //       'Authorization': 'Bearer ' + userToken
  //     }
  //   })
  //   .then((response) => console.log(response.data));
  // }else{
  //   console.log('Je n\'ai pas reçu le userToken');
  // }
  
  return (
    <>
      <View style={{flexDirection:'row', justifyContent:'space-evenly', borderBottomWidth:2, paddingBottom:10, marginTop:30}}>
        <Image 
            style={styles.tinyLogo}
            source={require('../../../assets/tiny_logo_good_food.png')}
        />
        <TouchableOpacity onPress={() => nav.navigate('AccountScreen',{
          userToken: userToken,
          route:route,
        })}>
            <Image 
                style={styles.tinyLogo}
                source={require('../../../assets/account.png')}
            />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.root} showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1}}>
          <Text style={[styles.text, styles.title]}>Les restaurants près de chez vous !</Text>
          <Button
            title="Voir la carte"
            onPress={() => nav.navigate('MapScreen',{
              userToken: userToken,
              navigation: navigation,
              route:route,
            })}
            testID={'seeMapButton'}
            // disabled={true}
          />
          <Contractors  updateCart={updateCart} cart={cart} />
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
    width:40,
    height:40,
  }
})