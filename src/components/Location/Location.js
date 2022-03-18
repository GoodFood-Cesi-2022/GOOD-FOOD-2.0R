import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState();
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [status, requestPermission] = Location.useBackgroundPermissions();
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
      setLatitude(JSON.stringify(location.coords.latitude));
      setLongitude(JSON.stringify(location.coords.longitude));
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{longitude}</Text>
      <Text style={styles.paragraph}>{latitude}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{

  },
  paragraph:{

  }
});