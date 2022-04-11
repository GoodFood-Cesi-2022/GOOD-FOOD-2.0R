import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import MapScreen from '../screens/MapScreen/MapScreen';
import UsersScreen from '../screens/UsersScreen/UsersScreen';
import ContractorScreen from '../screens/ContractorScreen/ContractorScreen';

const Stack = createNativeStackNavigator();const StackMain = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false }}>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="ContractorScreen" component={ContractorScreen} />
            <Stack.Screen name="MapScreen" component={MapScreen}  />
            <Stack.Screen name="UsersScreen" component={UsersScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;