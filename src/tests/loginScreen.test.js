import LoginScreen from '../screens/LoginScreen/LoginScreen';
import {useNavigation} from "@react-navigation/native";

it('LoginScreen if there\'s an email and a password typed', () => {
  const textInputNotEmpty = () => {
    const navigation = useNavigation();
    const email = "";

    if (email.toBe("azerty")) { navigation.navigate('HomeScreen')}
    };
});