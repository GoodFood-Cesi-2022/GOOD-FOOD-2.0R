import { Image,ImageBackground, StyleSheet, Text, View, ScrollView, Button} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header/Header';
import Recipes from '../../components/Recipes/Recipes';
import { useNavigation } from '@react-navigation/native';

const ContractorScreen = ({route}) => {
    const {contractorName,contractorPhoneNumber} = route.params;
    const navigation = useNavigation();
    const [shopCart, updateShopCart] = useState([]);

    return (
        <>
            <Header />
            <ScrollView>
                <View style={styles.main}>
                    <View style={styles.container}>
                        <ImageBackground source={require('../../../assets/data/food/salade-verte.jpg')} style={[styles.contractor_header]}>
                            <View>
                                <Text style={[styles.contractor_name, styles.text]}>{contractorName}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View>
                        <Text style={[styles.text, styles.titre_section]}>Notre sélection pour vous</Text>
                    </View>
                    <Text style={styles.titre_section}>Entrées</Text>
                    <View>
                        <Recipes urlImage={require('../../../assets/data/food/poulet-wings.jpeg')} name='Chicken wings' price= '3.90' updateCart={updateShopCart} cart={shopCart}/>
                        <Recipes urlImage={require('../../../assets/data/food/mozzarella.jpg')} name='Mozzarella sticks' price= '3.90' updateCart={updateShopCart} cart={shopCart}/>
                        <Recipes urlImage={require('../../../assets/data/food/salade-verte.jpg')} name='Salade verte' price= '2.00' updateCart={updateShopCart} cart={shopCart}/>
                    </View>
                    <Text style={styles.titre_section}>Plats</Text>
                    <View>
                        <Recipes urlImage={require('../../../assets/data/food/saumon.jpg')} name='Saumon au beurre blanc' price= '17.50' updateCart={updateShopCart} cart={shopCart}/>
                        <Recipes urlImage={require('../../../assets/data/food/entrecote.jpg')} name='Entrecôte XXL' price= '23.50' updateCart={updateShopCart} cart={shopCart}/>
                        <Recipes urlImage={require('../../../assets/data/food/caille.jpg')} name='Caille farcie foie gras' price= '27.50' updateCart={updateShopCart} cart={shopCart}/>
                    </View>
                    <Text style={styles.titre_section}>Desserts</Text>
                    <View>
                        <Recipes urlImage={require('../../../assets/data/food/brioche.jpg')} name='Brioche perdue' price= '7.50' updateCart={updateShopCart} cart={shopCart}/>
                        <Recipes urlImage={require('../../../assets/data/food/mille-feuille.jpg')} name='Mille-feuilles' price= '7.50' updateCart={updateShopCart} cart={shopCart}/>
                        <Recipes urlImage={require('../../../assets/data/food/creme-brulee.jpg')} name='Crème brulée' price= '7.50' updateCart={updateShopCart} cart={shopCart}/>
                    </View>
                    <Text style={styles.titre_section}>Boissons</Text>
                    <View>
                        <Recipes urlImage={require('../../../assets/data/food/coca.jpg')} name='Coca-Cola 33cl' price= '2.00' updateCart={updateShopCart} cart={shopCart} />
                        <Recipes urlImage={require('../../../assets/data/food/orangina.jpg')} name='Orangina 33cl' price= '2.00' updateCart={updateShopCart} cart={shopCart} />
                        <Recipes urlImage={require('../../../assets/data/food/ice-tea.jpg')} name='Ice-tea 33cl' price= '2.00' updateCart={updateShopCart} cart={shopCart} />
                    </View>
                    <View style={[styles.container_bottom]}>
                        <Button 
                        textID='voir_mon_panier'
                        title="Voir mon panier"
                        style={styles.title_button} 
                        onPress={() => navigation.navigate('CartScreen',{
                            shoppingCart: shopCart,
                        })} />
                    </View>
                </View>
            </ScrollView>
            
        </>
    )
}

export default ContractorScreen

const styles = StyleSheet.create({
    container:{
       borderBottomWidth: 2,
    },
    main:{
        backgroundColor:'rgb(230,237,249)',
    },
    contractor_header:{
        flexDirection:'row',
        zIndex:1,
    },
    image:{
        width: 200,
        height:200,
        borderRadius: 100,
        marginBottom:20,
    },
    contractor_name:{
        marginTop:80,
        marginLeft: 30,
        fontSize:24,
        alignSelf: 'center',
        height:40,
        backgroundColor:'rgba(255,255,255,0.4)',
        fontWeight:'bold',
        zIndex:2000
    },
    contractor_phone_number:{
        marginTop:20,
        marginLeft: 30,
    },
    text:{
        fontWeight:'bold',
    },
    titre_section:{
        fontSize:18,
        marginTop:10,
        fontWeight:'bold',
    },
    title_button:{
        fontSize:16,
        textAlign:'center',
        fontWeight:'bold',
        color:'white'
    },
    container_bottom:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal: '30%',
        flexDirection:'row',
        marginTop:30,
        marginBottom:30,
    }
})