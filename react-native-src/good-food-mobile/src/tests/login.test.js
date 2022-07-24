import {authorizationCodeToAccessToken} from '../screens/Auth/Login';
import {useNavigation} from "@react-navigation/native";

it('LogMeIn can\'t go back', () => {
  const goBack = () => {
    const navigation = useNavigation();
    if (navigation.goBack() === false) { navigation.navigate('HomeScreen');}
    };
});

it('Change screen if token'), () => {
  const goForwardIfTokenNorUndefined = () => {
    const navigation = useNavigation();
    if (authorizationCodeToAccessToken !== undefined) { navigation.navigate('HomeScreen');}
    };
}