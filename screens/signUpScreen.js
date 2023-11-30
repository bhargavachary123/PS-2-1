import React, { useState } from 'react';
import { View, Text, TextInput, Button , StyleSheet, TouchableOpacity, Alert , ImageBackground} from 'react-native';

const SignupScreen = ({ navigation }) => {
  const [fdata, setFdata] = useState({
      name: '',
      email: '',
      password: '',
      cpassword: '',
      dob: '',
  })
  const [errormsg, setErrormsg] = useState(null);
  const Sendtobackend = () => {
    // console.log(fdata);
    if(fdata.name == '' || fdata.email == '' ||
        fdata.password == '' || fdata.cpassword == '' ||
        fdata.dob == ''
      ) {
      setErrormsg('All fields are required');
      return;
    }
    else {
      if (fdata.password != fdata.cpassword) {
        setErrormsg('Password and Confirm password must be same');
        return;
      }
      else {
        fetch('http://10.0.2.2:3000/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(fdata)
          })
          .then(res => res.json()).then(
            data => {
              // console.log(data);
              if (data.error) {
                setErrormsg(data.error);
              }
              else {
                Alert.alert('account created successfuy..!!');
                navigation.navigate('LoginScreen')
              }
            }
          )
      }
    }
  }

  return (
    <ImageBackground>
    <View style={styles.container1}>
      {
        errormsg ? <Text style={styles.errormessage}>{errormsg}</Text> : null
      }
      <Text style={styles.hea1}>Register Here..</Text>
      <TextInput style={styles.inp1}
        placeholder="name"
        onChangeText={(text) => setFdata({ ...fdata, name: text})}
        onPressIn={() => setErrormsg(null)}
      />
        <TextInput style={styles.inp1}
        placeholder="email"
        onChangeText={(text) => setFdata({ ...fdata, email: text})}
        onPressIn={() => setErrormsg(null)}

      />
         <TextInput style={styles.inp1}
        placeholder="dob"
        onChangeText={(text) => setFdata({ ...fdata, dob: text})}
        onPressIn={() => setErrormsg(null)}

      />
      <TextInput style={styles.inp1}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setFdata({ ...fdata, password: text})}
        onPressIn={() => setErrormsg(null)}

     />
        <TextInput style={styles.inp1}
        placeholder="Confirm Password"
        secureTextEntry
        onChangeText={(text) => setFdata({ ...fdata, cpassword: text})}
        onPressIn={() => setErrormsg(null)}

      />
      <View style={styles.butt1}>
      <TouchableOpacity
          onPress={() => {
            Sendtobackend();
          }} >
            <View style={styles.butt1}>
            <Text>Signup</Text>
            </View>
          
        </TouchableOpacity>  
      </View>
      <View>
      <Text onPress={() => navigation.navigate('LoginScreen')}>
              Already have an account? Login Here
            </Text>      
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
  butt1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:"center",
    backgroundColor:'skyblue',
    height:20,
    width:50,
    marginLeft:'30%',
  },
  errormessage: {
    color: 'red',
    textAlign: 'center',
  }
});

export default SignupScreen;