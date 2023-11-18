import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';
const image = {uri:"https://wallpapers.com/images/featured/jail-background-qbmoztosi7bm3tcu.jpg"}


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ImageBackground
      source={image} 
      resizeMode='cover'
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>UNDERTRIAL PRISONERS</Text>
        <View style={styles.content}>
          <Text style={styles.hea}></Text>
          <TextInput
            style={styles.inp}
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.inp}
            placeholder="Password"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
          />
          <View style={styles.butt}>
            <Button title="Login" onPress={() => navigation.navigate('DrawerScreen')} />
          </View>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
          <View style={styles.signupContainer}>
            <Text style={styles.bothea}>Don't have an account?</Text>
            <Text style={styles.signupText} onPress={() => navigation.navigate('SignUpScreen')}>
              Sign up here
            </Text>
          </View>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50, 
    color: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hea: {
    fontSize: 30,
    fontFamily: 'Roboto',
    marginBottom: 30,
    color: '#fff',
  },
  inp: {
    borderRadius: 5,
    borderWidth: 2,
    height: 40,
    width: 300,
    padding: 10,
    marginVertical: 10,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    color: '#333', 
  },
  butt: {
    width: 200,
    marginVertical: 20,
  },
  forgotPassword: {
    color: '#3498db',
    fontSize: 16,
    marginBottom: 20,
    color: '#fff',
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bothea: {
    fontSize: 16,
    marginRight: 5,
    color: '#fff',
  },
  signupText: {
    fontSize: 16,
    color: '#3498db',
  },
});

export default LoginScreen;