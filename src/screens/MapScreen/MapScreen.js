import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import UserLocation from '../../components/UserLocation/UserLocation';
import * as Location from 'expo-location';

const MapScreen = (props) => {
  const [location, setLocation] = useState();
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let locationRequest = await Location.getCurrentPositionAsync({});
      setLocation(locationRequest);
      setLongitude(parseFloat(JSON.stringify(locationRequest['coords'].longitude)));
      setLatitude(parseFloat(JSON.stringify(locationRequest['coords'].latitude)));
      })();
    }, []);
  return (
    <>
    <UserLocation />
      <MapView
         style={{ flex: 1 }}
         showsUserLocation
         initialRegion={{
         latitude: latitude ? latitude : 45.1666700,
         longitude: longitude ? longitude : 5.7166700,
         latitudeDelta: 0.0922,
         longitudeDelta: 0.0421}}
      />
    </>
  )
}

export default MapScreen

const styles = StyleSheet.create({})