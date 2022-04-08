import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {MapView, Marker } from 'react-native-maps';
import UserLocation from '../../components/UserLocation/UserLocation';

const MapScreen = (props) => {
  const { faker } = require('@faker-js/faker');
  faker.setLocale('fr');
  
  const [region, setRegion] = useState({
    latitude: 45.2022863,
    longitude: 5.7731590,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const [contractor, setContractor] = useState({
    latitude: 45.1666700,
    longitude: 5.7166700,
  });

  let contractors_adresses = [
    {
        "id": 1,
        "first_line": faker.address.streetName(),
        "second_line": faker.address.secondaryAddress(),
        "zip_code": faker.address.zipCode(),
        "country": faker.address.country(),
        "city": faker.address.cityName(),
        "lat": 45.982456,
        "lng": 5.7166700
    },
    {
        "id": 2,
        "first_line": faker.address.streetName(),
        "second_line": faker.address.secondaryAddress(),
        "zip_code": faker.address.zipCode(),
        "country": faker.address.country(),
        "city": faker.address.cityName(),
        "lat": 43.357951,
        "lng": 5.7166700
    },
    {
        "id": 3,
        "first_line": faker.address.streetName(),
        "second_line": faker.address.secondaryAddress(),
        "zip_code": faker.address.zipCode(),
        "country": faker.address.country(),
        "city": faker.address.cityName(),
        "lat": 44.654789,
        "lng": 5.7166700
    },
    ];

  let marker = 
    contractors_adresses.map((item) => {
      const [contractor, setContractor] = useState({
        latitude: item.lat,
        longitude: item.lng,
      });
      return <Marker coordinate={contractor} />;
    })
    ;
  return(
    <>
      <UserLocation />
      <MapView
        style={{ flex: 1 }}
        showsUserLocation
        initialRegion={{
        latitude: 45.1666700,
        longitude: 5.7166700,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
        }}
        //onRegionChangeComplete runs when the user stops dragging MapView
        onRegionChangeComplete={(region) => setRegion(region)}
      >
      {marker}
      </MapView>
    </>)
}

export default MapScreen

const styles = StyleSheet.create({
  
})