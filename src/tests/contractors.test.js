import React from 'react';
import renderer from 'react-test-renderer';
import Contractors_entities from '../components/Contractors/Contractors_entities'
import {useNavigation} from "@react-navigation/native";
import { render } from '@testing-library/react-native';

it('contractors go back', () => {
  const goBack = () => {
    const navigation = useNavigation();
    if (navigation.canGoBack()) { navigation.goBack();}
  };
});

it('Load Contractors_entities properly', () => {
  const loadProperly = () => {
    render(<Contractors_entities />)
  };
});