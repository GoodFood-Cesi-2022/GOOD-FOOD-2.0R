import { View, Text, Button } from 'react-native';
import { render, fireEvent } from '@testing-library/react-native';
import {useNavigation} from "@react-navigation/native";
import HomeScreen from '../screens/HomeScreen/HomeScreen';

const onPressMock = jest.fn();

it('render HomeScreen Component properly', () => {
    const loadOK = () => { 
        render(<HomeScreen />)
    };
})

it('Login TouchableOpacity', () => {
    const goTo = () => {
        const navigation = useNavigation();
        expect(navigation.navigate('ContractorScreen'));
    };
});