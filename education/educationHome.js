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

  textcont: {
    textAlign: 'center',
    padding: 2,
    fontWeight: 'bold',
  },

  works: {
    padding: 10,
    borderWidth: 2,
    borderColor: '#333',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    backgroundColor: 'white',
    // borderRadius:7,
  },

  headtext: {
    fontSize: 26,
    textAlign: 'left',
    fontWeight: 'bold',
    margin:10,
  },
  youtube: {
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 10,
    padding: 10,
  },
  buttonImage: {
    width: 70,  
    height: 70, 
    padding:5,
    margin:5,
    
  },
  buttonbox:{
    borderColor:'black',
    borderWidth:2,
    justifyContent:'center',
    alignItems:'center',
    // borderRadius:7,
  },
  buttonContainer: {
    padding: 50, 
    flexDirection:'column',
    textAlign:'center', 
    padding:10,
    width:120,
    marginRight:20,
    marginLeft:20,
  },
  screen: {
    backgroundColor: 'white',
  },
  works1: {
    padding: 60,
    borderWidth: 2,
    borderColor: '#eee',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    backgroundColor: 'white',
    flexDirection: 'row',
    // borderRadius:7,

  },
});
