import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { render, fireEvent, queryByAttribute } from '@testing-library/react-native';
import Header from '../components/Header/Header';
import {useNavigation} from "@react-navigation/native";
import Recipes from '../components/Recipes/Recipes';
import ContractorScreen from '../screens/ContractorScreen/ContractorScreen';

const onPressMock = jest.fn();

it('render Header Component properly', () => {
  const loadOK = () => { 
      render(<Header />)
  };
});

it('render Recipes Component properly', () => {
  const loadOK = () => { 
      render(<Recipes />)
  };
});

it('Navigate to cart if pressed', () => {
    

    const { getByText } = render(
      <View>
          <Text
          onStartShouldSetResponder={() => navigation.navigate('CartScreen',{
              shoppingCart: shopCart,
          })}>
              Voir mon panier
          </Text>
      </View>
    );

    const navigateToCartOK = () => {
      const navigation = useNavigation();
      fireEvent.press(getByText('Voir mon panier'));
      expect(navigation.navigate('CartScreen',{
          shoppingCart: shopCart,
      }));
    };
});