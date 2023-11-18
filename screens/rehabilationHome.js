import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


export default function RehabilationHome({navigation}) {
  return (
    <View>
      <Text style={styles.texts} onPress={() => navigation.navigate('VocationalStackScreen')}>Vocational-Training</Text>
      <Text style={styles.texts} onPress={() => navigation.navigate('EducationalStackScreen')}>Educational-Traning</Text>
      <Text style={styles.texts} onPress={() => navigation.navigate('MentalHealthStackScreen')}>MentalHealth-Support</Text>

    </View>
  )
}


const styles=StyleSheet.create({

    texts: {
        padding:10,
        height:60,
        width:'100%',
        marginBottom:20,
        fontSize:24,
        fontWeight:'bold',
        textAlign:'left',
        backgroundColor:'black',
        color:'white'
    }
})