import LogMeIn from '../screens/LoginScreen/LogMeIn';
import {useNavigation} from "@react-navigation/native";

it('LogMeIn can\'t go back', () => {
  const goBack = () => {
    const navigation = useNavigation();
    if (navigation.goBack() === false) { navigation.navigate('LoginScreen');}
    };
});