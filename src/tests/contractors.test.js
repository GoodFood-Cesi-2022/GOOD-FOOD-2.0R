import React from 'react';
import renderer from 'react-test-renderer';
import Contractors from '../components/Contractors/Contractors';
import {useNavigation} from "@react-navigation/native";

it('contractors go back', () => {
  const goBack = () => {
    const navigation = useNavigation();
    if (navigation.canGoBack()) { navigation.goBack();}
    };
});