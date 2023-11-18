import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Carpentry from './carpentry'
import Welding from './welding'

export default function VocationalHome({navigation}) {
  return (
    <View>
      <Text style={styles.texts} onPress={() => navigation.navigate('Carpentry')}>Carpentry</Text>
      <Text style={styles.texts} onPress={() => navigation.navigate('Welding')}>Welding</Text>
    </View>
  )
}


const styles=StyleSheet.create({

    texts: {
        padding:10,
        height:60,
        width:'100%',
        marginBottom:20,
        fontSize:34,
        fontWeight:'bold',
        textAlign:'left',
        backgroundColor:'black',
        color:'white'
    }
})