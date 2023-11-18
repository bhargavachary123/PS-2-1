import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import OpenDegree from './opendegree'
import OpenMBA from './openmba'

export default function EducationHome({navigation}) {
  return (
    <View>
      <Text style={styles.texts} onPress={() => navigation.navigate('OpenDegree')}>Open-Degree</Text>
      <Text style={styles.texts} onPress={() => navigation.navigate('OpenMBA')}>Open-MBA</Text>
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