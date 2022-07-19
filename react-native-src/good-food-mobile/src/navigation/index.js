import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from '../screens/MapScreen/MapScreen';
import LogMeIn from '../screens/LoginScreen/LogMeIn';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ContractorScreen from '../screens/ContractorScreen/ContractorScreen';
import AccountScreen from '../screens/AccountScreen/AccountScreen';
import CartScreen from '../screens/CartScreen/CartScreen';
import WebSocketScreen from '../screens/TrackOrderScreen/WebSocketScreen';
import PaymentsUICompleteScreen from '../screens/PaymentsUICompleteScreen';
import { StyleSheet, Text, View, SafeAreaView, Linking, Button } from 'react-native';
import { StripeProvider } from "@stripe/stripe-react-native";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <StripeProvider publishableKey="pk_test_51L0QCZCjzbol7otB5MhP3f9bzUU33PwjSmWBqsokuL2dxxSfcXyrrmcX1Rp7AfS21rnibbgdIv1jtU9UaRWcysO700PW4s5V9U">
      <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false }}>
              {/* <Stack.Screen name="LogMeIn" component={LogMeIn} /> */}
              <Stack.Screen name="HomeScreen" component={HomeScreen} />
              <Stack.Screen name="ContractorScreen" component={ContractorScreen} />
              <Stack.Screen name="MapScreen" component={MapScreen}  />
              <Stack.Screen name="AccountScreen" component={AccountScreen} />
              <Stack.Screen name="CartScreen" component={CartScreen} />
              <Stack.Screen name="PaymentsUICompleteScreen" component={PaymentsUICompleteScreen} />
              <Stack.Screen name="WebSocketScreen" component={WebSocketScreen} />
          </Stack.Navigator>
      </NavigationContainer>
    </StripeProvider>
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

