import { StatusBar } from 'expo-status-bar';
import {StyleSheet, View, Text, TouchableOpacity, Alert} from 'react-native';
import Logo from './Logo';

const Accueil = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Logo />
            <Text style={styles.text}>Bienvenue sur Good Food</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigation.navigate('LogIn')}
                    >
                    <Text>Se connecter</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigation.navigate('Profile')}
                    >
                    <Text>Créer un compte</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      button: {
        margin: 20,
        padding:10,
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        backgroundColor:'grey',
      },
      text: {
        fontSize: 20,
      },
      buttonContainer: {
        flexDirection: 'row',
      },
  });
export default Accueil;