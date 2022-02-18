import {React} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


const Logo = () => {
    return (
        <View style={styles.container}>
            <Image
            style={styles.logo}
            source={require('../img/logoChat.png')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
      paddingBottom: 50,
    },
    logo: {
      width: 300,
      height: 300,
    },
  });
  export default Logo;