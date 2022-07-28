import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View, LogBox } from 'react-native';
import {
  useStripe,
  BillingDetails,
  Address,
  PaymentSheetError,
} from '@stripe/stripe-react-native';
import Button from '../components/Button';
import PaymentScreen from '../components/PaymentScreen';
import { API_URL } from '../Config';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header/Header';

LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message

export default function PaymentsUICompleteScreen({route}) {
  const {shoppingCarts, totalOrder} = route.params;
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [paymentSheetEnabled, setPaymentSheetEnabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState<string>();

  const navigation = useNavigation();

  const fetchPaymentSheetParams = async () => {
    const response = await fetch(`${API_URL}/payment-sheet`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { paymentIntent, ephemeralKey, customer } = await response.json();
    setClientSecret(paymentIntent);
    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };
  };

  const openPaymentSheet = async () => {
    if (!clientSecret) {
      return;
    }
    setLoading(true);
    const { error } = await presentPaymentSheet();

    if (!error) {
      Alert.alert('Success', 'The payment was confirmed successfully');
      setTimeout(() => navigation.navigate('WebSocketScreen'), 3000);
    } else if (error.code === PaymentSheetError.Failed) {
      Alert.alert(
        `PaymentSheet present failed with error code: ${error.code}`,
        error.message
      );
    } else if (error.code === PaymentSheetError.Canceled) {
      Alert.alert(
        `PaymentSheet present was canceled with code: ${error.code}`,
        error.message
      );
    }
    setPaymentSheetEnabled(false);
    setLoading(false);
  };

  const initialisePaymentSheet = async () => {
    const { paymentIntent, ephemeralKey, customer } =
      await fetchPaymentSheetParams();

    const address: Address = {
      city: 'San Francisco',
      country: 'AT',
      line1: '510 Townsend St.',
      line2: '123 Street',
      postalCode: '94102',
      state: 'California',
    };
    const billingDetails: BillingDetails = {
      name: 'Jane Doe',
      email: 'foo@bar.com',
      phone: '555-555-555',
      address: address,
    };

    const { error } = await initPaymentSheet({
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      customFlow: false,
      merchantDisplayName: 'Example Inc.',
      applePay: true,
      merchantCountryCode: 'US',
      style: 'automatic',
      googlePay: true,
      testEnv: true,
      primaryButtonColor: '#635BFF', // Blurple
      returnURL: 'stripe-example://stripe-redirect',
      defaultBillingDetails: billingDetails,
      allowsDelayedPaymentMethods: true,
    });
    if (!error) {
      setPaymentSheetEnabled(true);
    } else if (error.code === PaymentSheetError.Failed) {
      Alert.alert(
        `PaymentSheet init failed with error code: ${error.code}`,
        error.message
      );
    } else if (error.code === PaymentSheetError.Canceled) {
      Alert.alert(
        `PaymentSheet init was canceled with code: ${error.code}`,
        error.message
      );
    }
  };

  return (
    // In your app’s checkout, make a network request to the backend and initialize PaymentSheet.
    // To reduce loading time, make this request before the Checkout button is tapped, e.g. when the screen is loaded.
    <>
      <Header navigation={navigation} route={navigation} userToken={navigation} />
      <View style={styles.container}>
        <Text style={styles.text}>Vous allez vous régaler !</Text>
        <Text style={styles.text}>Merci de nous faire confiance</Text>
      
      </View>
      <View style={styles.button_regler_commande}>
        <PaymentScreen onInit={initialisePaymentSheet}>
          <Button
            variant="primary"
            loading={loading}
            disabled={!paymentSheetEnabled}
            title="Réglez votre commande"
            onPress={openPaymentSheet}
          />
        </PaymentScreen>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  text:{
    textAlign:'center',
    fontSize:25,
  },
  container:{
    marginTop:150,
    alignContent:'center',
    justifyContent:'center'
  },
  button_regler_commande:{
    height:100,
    marginTop:250
  }
})
