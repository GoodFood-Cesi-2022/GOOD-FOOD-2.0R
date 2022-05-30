import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState(null);
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [address, setAddress] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setLongitude(JSON.stringify(location['coords'].longitude));
      setLatitude(JSON.stringify(location['coords'].latitude));

      let reqUserAddress = await Location.reverseGeocodeAsync(location['coords']);
      setAddress(reqUserAddress[0].name + ", " + reqUserAddress[0].street + " " + reqUserAddress[0].postalCode + " " + reqUserAddress[0].city);
      
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{address}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    marginTop:20,
    marginLeft:20,
  },
  paragraph:{
    fontSize:18,
    fontWeight:"bold",
  }
});