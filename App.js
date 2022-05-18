import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { SafeAreaView, Text } from "react-native";

import Navigation from './src/navigation/index';
import { StripeProvider } from "@stripe/stripe-react-native";

export default function App() {
 const [publishableKey, setPublishableKey] = useState('');
  return (
    <StripeProvider publishableKey={publishableKey}>
        <Navigation/>
    </StripeProvider>
  );
}