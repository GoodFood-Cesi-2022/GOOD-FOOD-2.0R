import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const WebSocketScreen = () => {
  const [serverState, setServerState] = React.useState('Loading...');
  const [messageText, setMessageText] = React.useState('');
  const [disableButton, setDisableButton] = React.useState(true);
  const [inputFieldEmpty, setInputFieldEmpty] = React.useState(true);
  const [serverMessages, setServerMessages] = React.useState([]);
  const navigation = useNavigation();
  //   var ws = React.useRef(new WebSocket('ws://w567l.sse.codesandbox.io/')).current;
//   var ws = React.useRef(new WebSocket('wss://demo.piesocket.com/v3/channel_1?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self')).current;
  let ws = React.useRef(new WebSocket('wss://javascript.info/article/websocket/chat/ws')).current;
  
    let messagesArray = ["Commande reçue", "Commande en préparation", "Commande confiée au livreur", "Commande livrée, bon appétit !"];
  
  React.useEffect(() => {
      const serverMessagesList = [];
      ws.onopen = () => {
          setServerState('Connected to the server')
        setDisableButton(false);
        ws.send('La commande sera bientôt chez vous ! :)');
        ws.send('Commande reçue');
        setTimeout(() => {
            ws.send('Commande en préparation')
        }, 30000);
        
        setTimeout(() => {
            ws.send('Commande confiée au livreur')
        }, 60000);
        setTimeout(() => {
            ws.send('Commande livrée, bon appétit !')
        }, 90000);
    };
    ws.onclose = (e) => {
      setServerState('Disconnected. Check internet or server.')
      setDisableButton(true);
    };
    ws.onerror = (e) => {
      setServerState(e.message);
    };
    ws.onmessage = (e) => {
      serverMessagesList.push(e.data);
      setServerMessages([...serverMessagesList]);
    };
  }, [])
  

    // const submitMessage = () => {
    //       ws.send(messageText);
    //       setMessageText('');
    //       setInputFieldEmpty(true);
    // }


  return (
      <View style={styles.container}>
          <View style={styles.logo_container}>
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                <Image 
                    style={styles.logo}
                    source={require('../../../assets/logo-Good-Food-150x150.png')}
                />
            </TouchableOpacity>
          </View>
        <View style={{marginTop:40, marginBottom:30}}>
            <Text style={{fontSize:22, textAlign:'center'}}>Merci pour votre commande !</Text>
        </View>
        <View style={{
            height: 30,
            backgroundColor: '#eeceff',
            padding: 5,
            marginBottom:30,
        }}>
            {/* Permet d'envoyer l'état du serveur*/}
            <Text>{serverState}</Text>
        </View>
        
        <View>
            <ScrollView>
            {
                serverMessages.map((item, ind) => {
                return (
                    <View style={styles.textBubble_container}>
                        <Text style={styles.textBubble} key={ind}>{item}</Text>
                    </View>
                )
                })}
            </ScrollView>
        </View>
        <View style={{flexDirection: 'row'}}>
            {/* <TextInput style={{
                borderWidth: 1,
                borderColor: 'black',
                flexGrow: 1,
                padding: 5
            }} 
            placeholder={'Add Message'} 
            onChangeText={text => {
                setMessageText(text);
                setInputFieldEmpty(text.length > 0 ? false : true);
            }}
            value={messageText}
            />
            <Button
            onPress={submitMessage}
            title={'Submit'} 
            disabled={disableButton || inputFieldEmpty}
            /> */}
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    paddingTop: 30,
    padding: 8,
  },
  logo_container:{
      marginLeft:'30%',
  },
  textBubble_container:{
      padding:5,
      borderBottomWidth:1,
      borderRightWidth:1,
      borderRadius:50,
      width: 150,
      marginBottom:30,
      alignItems:'center',
      backgroundColor:'rgba(125,125,125,0.2)',
  },
  textBubble:{
      fontSize:18,
      fontWeight:'bold',
      color:'black',
  }
});

export default WebSocketScreen;