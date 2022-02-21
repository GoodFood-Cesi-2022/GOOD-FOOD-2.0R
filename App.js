import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import SignInScreen from './src/screens/SignInScreen/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen/SignUpScreen';
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen/ConfirmEmailScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen/ForgotPasswordScreen';
import NewPasswordScreen from './src/screens/NewPasswordScreen/NewPasswordScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <NewPasswordScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root:{
    flex:1,
    backgroundColor:'#F9FBFC',
  },
});
