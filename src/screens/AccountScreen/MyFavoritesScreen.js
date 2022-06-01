import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const MyFavoritesScreen = () => {
    const [favorites, setFavorites] = useState(["Le Rousseau", "L'envie", "La café du port"]);
  return (
        <>
            <View>
                <Text style={[styles.title, {marginTop:20, textDecorationLine:'underline'}]}>Mes Favoris</Text>
            </View>
            <View style={{width:'100%', paddingLeft:30, backgroundColor:'#ebedf0'}}>
                {
                    favorites.map(function(favori, ind){
                        return(
                            <View key={ind}>
                                <Text style={styles.text} key={ind+1}>{favori}</Text>
                            </View>
                        )
                    })
                }
            </View>
        </>
  )
}

export default MyFavoritesScreen;

const styles = StyleSheet.create({
    title:{
        textAlign:'center',
        fontSize:22,
    },
    text:{
        fontSize:18,
        marginTop:30,
    }
})