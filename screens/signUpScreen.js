import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';
const image = {uri:"https://wallpapers.com/images/featured/jail-background-qbmoztosi7bm3tcu.jpg"}

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ImageBackground
      source={image}
      resizeMode='cover'
      style={styles.backgroundImage}
    >  
      <View style={styles.container}>
        <Text style={styles.title}>REGISTER NOW</Text>
        <TextInput
          style={styles.inp}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.inp}
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          style={styles.inp}
          placeholder="Confirm Password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <View style={styles.butt}>
          <Button title="Back to Login Screen" onPress={() => navigation.navigate('LoginScreen')} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
  },
  container: {
    padding: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  title: {
    fontSize: 30,
    fontFamily: 'Roboto',
    marginBottom: 20,
    color: '#fff', 
  },
  inp: {
    borderRadius: 5,
    borderWidth: 2,
    height: 40,
    width: 200,
    padding: 10,
    marginVertical: 10,
    borderColor: '#ccc',
    backgroundColor: '#fff', 
    color: '#333', 
  },
  butt: {
    width: 250,
    marginVertical: 20,
  },
});

export default SignupScreen;