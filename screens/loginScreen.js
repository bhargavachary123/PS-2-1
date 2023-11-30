import React, { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, ImageBackground } from 'react-native';
const image = {uri:"https://wallpapers.com/images/featured/jail-background-qbmoztosi7bm3tcu.jpg"}


const LoginScreen = ({ navigation }) => {
  const [fdata, setFdata] = useState({
    email: '',
    password: ''
  })

  const [errormsg, setErrormsg] = useState(null);

  const Sendtobackend = () => {
    // console.log(fdata);
    if (fdata.email == '' || fdata.password == '') {
      setErrormsg('All fields are required');
      return;
    }
    else {
      fetch('http://10.0.2.2:3000/signin', {
        method:'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body:JSON.stringify(fdata)
      })
      .then(res => res.json()).then(
        data => {
          // console.log(data);
          if(data.error) {
            setErrormsg(data.error);
        }
        else {
          Alert.alert('Logged in Successfully..!!');
          navigation.navigate('DrawerScreen');

        }
      }
      )
    }

  }
  return (
    <ImageBackground
      source={image} 
      resizeMode='cover'
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>UNDERTRIAL PRISONERS</Text>
        <View style={styles.content}>
        {
        errormsg ? <Text style={styles.errormessage}>{errormsg}</Text> : null
      }
          <Text style={styles.hea}></Text>
          <TextInput
            style={styles.inp}
            placeholder="Email"
            onChangeText={(text) => setFdata({...fdata,
            email: text})}
            keyboardType="email-address"
            autoCapitalize="none"
            onPressIn={() => setErrormsg(null)}
          />
          <TextInput
            style={styles.inp}
            placeholder="Password"
            secureTextEntry
            onChangeText={(text) => setFdata({...fdata,
              password: text})}
              onPressIn={() => setErrormsg(null)}

          />
          <View style={styles.butt}>
            <Text  style={styles.buttontext}
            onPress={() => Sendtobackend()}>LOGIN</Text>
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
    // borderRadius: 5,
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
    backgroundColor:'skyblue',
    padding:10,
    
  },
  buttontext: {
    textAlign:'center',
    fontWeight:'bold',
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
  errormessage: {
    color: 'red',
    textAlign: 'center',
    fontSize:18,
  },

});

export default LoginScreen;