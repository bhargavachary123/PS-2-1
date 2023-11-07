import React, { useState } from 'react';
import { View, Text, TextInput, Button , StyleSheet } from 'react-native';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <View style={styles.container1}>
      <Text style={styles.hea1}>Register Here..</Text>
      <TextInput style={styles.inp1}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput style={styles.inp1}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
        <TextInput style={styles.inp1}
        placeholder="Confirm Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <View style={styles.butt1}>
      <Button  title="Back to Login in Screen" onPress={() => navigation.navigate('LoginScreen')}  />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    padding: 50,
  },
  hea1: {
    padding: 30,
     fontSize: 30,
     fontFamily: "Roboto",
  },
  inp1: {
    borderRadius: 5,
    borderWidth: 2,
    height: 40,
    width: 200,
    padding: 5,
    margin: 20,
  },
  butt1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:"center",
  },
});


export default SignupScreen;