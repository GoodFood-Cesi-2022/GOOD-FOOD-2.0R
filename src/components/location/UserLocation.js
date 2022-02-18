import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

export default function UserLocation() {
  const [location, setLocation] = useState(null);
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
    })();
  }, []);

  let text = 'Waiting..';
  let lat = 0;
  let long = 0;
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location['coords']);
    lat = JSON.stringify(location['coords'].latitude);
    long = JSON.stringify(location['coords'].longitude);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Vous êtes à la latitude {lat}</Text>
      <Text style={styles.paragraph}>Vous êtes à la longitude {long}</Text>
    </View>
  );
}

const styles = StyleSheet.create({

});