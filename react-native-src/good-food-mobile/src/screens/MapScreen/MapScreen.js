import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import UserLocation from '../../components/UserLocation/UserLocation';
import Header from  '../../components/Header/Header';
import fr_crous_restauration_france_entiere from '../../../assets/data/fr_crous_restauration_france_entiere.json';

const MapScreen = ({navigation, route, userToken}) => {
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
    {
        "id": 4,
        "first_line": faker.address.streetName(),
        "second_line": faker.address.secondaryAddress(),
        "zip_code": faker.address.zipCode(),
        "country": faker.address.country(),
        "city": faker.address.cityName(),
        "lat": 45.188529,
        "lng": 5.724524
    },
    {
        "id": 5,
        "first_line": faker.address.streetName(),
        "second_line": faker.address.secondaryAddress(),
        "zip_code": faker.address.zipCode(),
        "country": faker.address.country(),
        "city": faker.address.cityName(),
        "lat": 45.183529,
        "lng": 5.7266700
    },
    {
        "id": 6,
        "first_line": faker.address.streetName(),
        "second_line": faker.address.secondaryAddress(),
        "zip_code": faker.address.zipCode(),
        "country": faker.address.country(),
        "city": faker.address.cityName(),
        "lat": 45.180529,
        "lng": 5.7206700
    },
    ];

  let myRestaurants = fr_crous_restauration_france_entiere.map((restaurant, ind) => {
    const [contractor, setContractor] = useState({
        latitude: restaurant.fields.geolocalisation[0],
        longitude: restaurant.fields.geolocalisation[1],
      })
    return <Marker 
      key={ind}
      coordinate={contractor}
      title={restaurant.fields.title}
    />;
  })

  return(
    <>
      <Header route={route} userToken={userToken} />
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
      {myRestaurants}
      </MapView>
    </>)
}

export default MapScreen
