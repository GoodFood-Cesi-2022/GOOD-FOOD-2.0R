import {React} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import UserLocation from './location/UserLocation';

const Home = () => {
    return (
        <View style={styles.container}>
            <UserLocation />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
      paddingBottom: 50,
    },
  });
  export default Home;