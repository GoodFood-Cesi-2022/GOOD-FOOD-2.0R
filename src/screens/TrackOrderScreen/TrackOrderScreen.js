import { StyleSheet, Text, View, Alert } from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';

const TrackOrderScreen = () => {

  return (
    <View>
        <Header />
        <Text>Où en est ma commande ?</Text>
        <Text>STEP 1 | Commande reçue</Text>
        <Text>STEP 2 | Commande en préparation</Text>
        <Text>STEP 3 | Commande confiée au livreur</Text>
        <Text>STEP 4 | Commande livrée</Text>
    </View>
  )
}

export default TrackOrderScreen

const styles = StyleSheet.create({})