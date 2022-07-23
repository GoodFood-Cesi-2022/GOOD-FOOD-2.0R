import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { authorize } from 'react-native-app-auth';

const Login = async () => {
  // base config
  const config = {
    clientId: '96d9346f-15d8-4b9b-b0c5-904899442587', // available on the app page
    clientSecret: '', // click "show client secret" to see this
    redirectUrl: 'goodfood://oauth', // the redirect you defined after creating the app
    scopes: ['api'], // the scopes you need to access
    serviceConfiguration: {
      authorizationEndpoint: 'http://192.168.1.54:8085/oauth/authorize',
      tokenEndpoint: 'http://192.168.1.54:8085/oauth/token',
    },
  };

  // use the client to make the auth request and receive the authState
  try {
    const result = await authorize(config);
    // console.log(result);
    // result includes accessToken, accessTokenExpirationDate and refreshToken
  } catch (error) {
    console.log(error);
  }

  return
}

export default Login

const styles = StyleSheet.create({})