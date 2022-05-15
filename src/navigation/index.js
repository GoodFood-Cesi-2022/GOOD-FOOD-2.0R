import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import MapScreen from '../screens/MapScreen/MapScreen';
import ContractorScreen from '../screens/ContractorScreen/ContractorScreen';
import AccountScreen from '../screens/AccountScreen/AccountScreen';
import CartScreen from '../screens/CartScreen/CartScreen';
import { StyleSheet, Text, View, SafeAreaView, Linking, Button } from 'react-native';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false }}>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="ContractorScreen" component={ContractorScreen} />
            <Stack.Screen name="MapScreen" component={MapScreen}  />
            <Stack.Screen name="AccountScreen" component={AccountScreen} />
            <Stack.Screen name="CartScreen" component={CartScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default Navigation;

