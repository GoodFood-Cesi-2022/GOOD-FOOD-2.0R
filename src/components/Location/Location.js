import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      Location.enableNetworkProviderAsync();
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
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location.coords);
  }
  let latitude = JSON.stringify(location.coords.latitude);
  let longitude = JSON.stringify(location.coords.longitude);
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