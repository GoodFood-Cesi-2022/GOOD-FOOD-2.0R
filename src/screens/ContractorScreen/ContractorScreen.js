import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';
import Recipes from '../../components/Recipes/Recipes';

const ContractorScreen = ({route}) => {
    const {contractorName, contractorAvatar, contractorPhoneNumber} = route.params;

    return (
        <>
            <Header />
            <View style={styles.container}>
                <View style={styles.contractor_header}>
                    <Image style={styles.image} source={{uri: contractorAvatar}} />
                    <View>
                        <Text style={[styles.contractor_name, styles.text]}>Restaurant {contractorName}</Text>
                        <Text style={[styles.contractor_phone_number, styles.text]}>{contractorPhoneNumber}</Text>
                    </View>
                </View>
            </View>
            <View>
                <Text style={[styles.text, styles.titre_section]}>Notre sélection pour vous</Text>
            </View>
            <ScrollView>
                <Recipes name='Chicken wings' price= '3,90' />
                <Recipes name='Bucket duo' price= '17,50' />
            </ScrollView>
        </>
    )
}

export default ContractorScreen

const styles = StyleSheet.create({
    container:{
       borderBottomWidth: 2,
    },
    contractor_header:{
        flexDirection:'row',
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
    }
})