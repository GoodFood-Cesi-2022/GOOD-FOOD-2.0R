import React, {useState} from 'react';
import { 
  Text, 
  View,
  Image,
  StyleSheet,
  ImageBackground,
  Button,
  Alert,
  TouchableOpacity,
  TextInput
} from 'react-native';
import Header from '../../components/Header/Header';

const StripePayment = (props) => {
  const [cardName, onChangeText] = useState("");
  const [cardNumber, onChangeText1] = useState("");
  const [cardDate, onChangeText2] = useState("");
  const [cardCVV, onChangeText3] = useState("");

  const [error, setError] = useState({cardName:false,cardNumber:false,cardDate:false,cardCVV:false});


  function handleBackButtonClick() {
    props.history.goBack(null);
    return true;
  }

  const handleClick = async () => { 
    let i = 0;

    if(cardName === ""){
      setError(prev => ({...prev,cardName:true}));
      i++;
    } else setError(prev => ({...prev,cardName:false})); 

    if(cardNumber === ""){
      setError(prev => ({...prev,cardNumber:true}));
      i++;
    }else if(cardNumber.toString().length !== 19){
      setError(prev => ({...prev,cardNumber:true}));
      i++;
    } else setError(prev => ({...prev,cardNumber:false}));   


    if(cardDate === ""){
      setError(prev => ({...prev,cardDate:true}));
      i++;
    } else setError(prev => ({...prev,cardDate:false})); 


    if(cardCVV === ""){
      setError(prev => ({...prev,cardCVV:true}));
      i++;
    } else setError(prev => ({...prev,cardCVV:false}));        
    

    if(i === 0){
      await submitForm();
    }else {     
      return;
    }
  }

 async function getStripeTokenWithCreditCardInformations() {
    let lnum = cardDate.split('/')
    let genCard = {
      'card[number]': cardNumber,
      'card[exp_month]': parseInt(lnum[0]),
      'card[exp_year]': parseInt(lnum[1]),
      'card[cvc]': cardCVV
    }

    let results = await fetch("https://api.stripe.com/v1/tokens", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer sk_test_51L0QCZCjzbol7otBfNfQxt1IGiu81qnU2kw1PCWeei3KVRpNPftPNB5jsi5Y9xOIQ0cRO305NKtMhcbHUwnhYdkY008KCKodbb`,
      },
      body: Object.keys(genCard)
        .map(key => key + '=' + genCard[key])
        .join('&'),
    }).then(response => response.json())

    console.log("Voilà le token Alex: "+results['id'])

    return results['id'];
  }

  const submitForm = async () => {
    let cardnum = cardDate.split('/')
    console.log(cardnum);
    getStripeTokenWithCreditCardInformations();

    // Écrire une fonction await en envoyant le token recu juste au dessus
  }

  const handleChangeCard = (value) => {

    //if(value.length>16) return

    var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    var matches = v.match(/\d{4,16}/g);
    var match = matches && matches[0] || ''
    var parts = []

    for (let i=0, len=match.length; i<len; i+=4) {
        parts.push(match.substring(i, i+4))
    }

    if (parts.length) {
        value = parts.join(' ')
    } /*else {
        return value
    }*/

    onChangeText1(value);    

  }

  const handleChangeCVV = (text) => {
      if(text.length>3) return
      onChangeText3(text);    
  }

  const handleChangeDate = (text) => {
      if(text.length>5) return

      if(text.length == 2 && cardDate.length == 1){
        text += '/'
      }else if(text.length == 2 && cardDate.length == 3){
        text = text.substring(0 , text.length-1)
      }

      onChangeText2(text);    
  }

  return (
    <View style={styles.mainBoxOuter}>
          <View style={styles.mainHeaderOuter}>           
      <Header />
            
              <Text style={styles.headerTitle}>Add Card</Text>
          
          </View>
          <View style={styles.mainBody}>
            <View style={styles.centerBoxNo}>
              <View style={styles.centerBox}>
                <Text style={[styles.mainTitle, styles.blackText]}>Add Payment Card</Text>
                <Text style={[styles.subTitle, styles.greyText]}>Please fill the detail  below if you want to add card</Text>
              </View>
              <View style={styles.formOuter}>
                <View style={styles.formGroupDiv}>
                  <View style={styles.formGroupNew}>
                    <Text style={styles.formLabelNew}>Cardholder Name</Text>
                    <TextInput
                      style={[styles.formControlNew, { borderColor: error.cardName ? 'red' : '#b2b2b2'}]}
                      value={cardName}
                      onChangeText={onChangeText}
                      placeholder=""
                      placeholderTextColor = "#fbfbfb"
                    />                    
                  </View>
                </View>
                <View style={styles.formGroupDiv}>
                  <View style={styles.formGroupNew}>
                     {/* Cartes Bancaires/Visa	4000 0025 0000 1001	 */}
                    <Text style={styles.formLabelNew}>Card Number</Text>
                    <TextInput
                      style={styles.formControlNew}
                      value={cardNumber}
                      onChangeText={handleChangeCard}
                      placeholder=""
                      placeholderTextColor = "#fbfbfb"
                      keyboardType='numeric'
                    />
                 
                  </View>
                </View>
                <View style={styles.formGroupDiv}>
                  <View style={styles.formGroupNew}>
                    {/* 06/25 */}
                    <Text style={styles.formLabelNew}>Expiry Date</Text>
                    <TextInput
                      style={styles.formControlNew}
                      value={cardDate}
                      onChangeText={handleChangeDate}
                      placeholder=""
                      placeholderTextColor = "#fbfbfb"
                      keyboardType='numeric'
                    />
                    
                  </View>
                  <View style={styles.formGroupNew}>
                       {/* 425 */}
                    <Text style={styles.formLabelNew}>CVV</Text>
                    <TextInput
                      style={styles.formControlNew}
                      value={cardCVV}
                      onChangeText={handleChangeCVV}
                      placeholder=""
                      placeholderTextColor = "#fbfbfb"
                      keyboardType='numeric'
                    />
                   
                  </View>
                </View>
                <View style={styles.formBtn}>
                    <TouchableOpacity style={styles.btnGradientDiv} onPress={handleClick}>                        
                            <Text style={[styles.TextStyle, styles.pay_button]}>PAYER</Text>                       
                    </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
       
   );
 }

 const styles = StyleSheet.create({
  mainBoxOuter:{
    flex:1,
    width:'100%',
    justifyContent:'center'
  },
  mainHeaderOuter:{

  },
  headerTitle:{
    fontSize:18,
    marginBottom:30
  },
  mainBody:{

  },
  centerBoxNo:{

  },
  centerBox:{
    height:100,
    textAlign:'center'
  },
  mainTitle:{
    fontSize:18
  },
  blackText:{
    fontSize:16
  },
  greyText:{
    fontSize:16
  },
  subTitle:{

  },
  formOuter:{
    width:'100%',
    justifyContent:'center'
  },
  formGroupDiv:{
  },
  formGroupNew:{

  },
  formLabelNew:{
    fontSize:16,
    marginTop:25
  },
  formControlNew:{
    backgroundColor:'#c0ccda',
    width:'70%',
  },
  btnGradientDiv:{

  },
  pay_button:{
    borderColor:'#000',
    backgroundColor:'#37a7e8',
    width:'30%',
    textAlign:'center',
    marginLeft:'35%',
    marginTop:30,
    height:40,
    paddingVertical:5
  },
 })
 export default StripePayment