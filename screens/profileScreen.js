import React, {useState} from 'react';
import {Text, TextInput, View, Button,StyleSheet} from 'react-native';

export default function ProfileScreen() {
    return (
      <View style={styles.texts}>
      <Text>Hello User..!</Text>
        <Text>Profile Screen is under maintenance...
            please visit some other time..!!</Text>
      </View>
    );
  }
  const styles=StyleSheet.create({
    texts:{
      flex:1,
      alignItems:"center",
      justifyContent:"center",
    }
})