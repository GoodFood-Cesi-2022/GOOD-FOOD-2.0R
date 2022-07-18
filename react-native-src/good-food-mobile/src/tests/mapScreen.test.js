import MapScreen from '../screens/MapScreen/MapScreen';
import {useNavigation} from "@react-navigation/native";

it('MapScreen can load it', () => {
  const goBack = () => {
    const navigation = useNavigation();
    if (navigation.goBack() === false) { navigation.navigate('MapScreen');}
    };
});