import React, { useState } from 'react';
import { View, Text, TextInput, Button , StyleSheet } from 'react-native';


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <View style={styles.container}>
      <Text style={styles.hea}>Login Page</Text>
      <TextInput style={styles.inp}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput style={styles.inp}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <View style={styles.butt}>
        <Button title="Login" onPress={() => navigation.navigate('DrawerScreen')} />
      </View>
      <Text style={styles.bothea} onPress={() => navigation.navigate('SignUpScreen')}>Don't have an account? Sign up here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  hea: {
    padding: 30,
     fontSize: 30,
     fontFamily: "Roboto",
  },
  inp: {
    borderRadius: 5,
    borderWidth: 2,
    height: 40,
    width: 200,
    padding: 5,
    margin: 30,
  },
  butt: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:"center"
  },
  bothea: {
    fontSize: 20,
    padding: 30,
  },
});

export default LoginScreen;