import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MyOrdersScreen = () => {
     
    const list = [
        {
          title: 'Restaurant "Chez Gino"',
          price: '89,50€'
        },
        {
          title: 'Asia Trips',
          price: '34,70€'
        },
        // more items
      ]
  return (
        <>
            <View>
                <Text style={[styles.title, {marginTop:20, textDecorationLine:'underline'}]}>Mes commandes</Text>
            </View>
            <View style={{width:'100%', backgroundColor:'#ebedf0'}}>
                <View style={{flexDirection:'row', width:'100%', justifyContent:'space-around', padding:10}}>
                    <Text style={styles.text}>{list[0].title}</Text>
                    <Text style={styles.text}>{list[0].price}</Text>
                </View>
                <View style={{flexDirection:'row', width:'100%', justifyContent:'space-around', padding:10}}>
                    <Text style={styles.text}>{list[1].title}</Text>
                    <Text style={styles.text}>{list[1].price}</Text>
                </View>
            </View>
        </>
  )
}

export default MyOrdersScreen

const styles = StyleSheet.create({
    title:{
        textAlign:'center',
        fontSize:22,
    },
    text:{
        fontSize:18,
        marginTop:15,
    }
})