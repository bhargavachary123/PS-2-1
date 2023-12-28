import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
const image = { uri: "https://wallpapers.com/images/featured/jail-background-qbmoztosi7bm3tcu.jpg" }

const LoginScreen = ({ navigation }) => {

    const [fdata, setFdata] = useState({
        name: '',
        email: '',
        password: '',
        cpassword: '',
        dob: '',
    })

    const [errormsg, setErrormsg] = useState(null);
    const [hidePassword, setHidePassword] = useState(true);

    const Sendtobackend = () => {
        console.log(fdata);
        // Commenting out the backend code for now
        /*
        if (
            fdata.email == '' ||
            fdata.password == ''
        ) {
            setErrormsg('All fields are required');
            return;
        } else {
            fetch('http://10.0.2.2:3000/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(fdata)
            })
                .then(res => res.json()).then(
                    data => {
                        if (data.error) {
                            setErrormsg(data.error);
                        } else {
                            alert('Logged in successfully');
                            navigation.navigate('DrawerScreen');
                        }
                    }
                )
        }
        */
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
                    <Text style={styles.hea}></Text>
                    {
                        errormsg ? <Text style={styles.errormessage}>{errormsg}</Text> : null
                    }
                    <TextInput
                        style={styles.inp}
                        placeholder="email"
                        onPressIn={() => setErrormsg(null)}
                        onChangeText={(text) => setFdata({ ...fdata, email: text })}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <View style={styles.passwordContainer}>
                        <TextInput
                            style={styles.inp}
                            placeholder="Password"
                            secureTextEntry={hidePassword}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                            onPressIn={() => setErrormsg(null)}
                            onChangeText={(text) => setFdata({ ...fdata, password: text })}
                        />
                        <TouchableOpacity
                            style={styles.eyeIcon}
                            onPress={() => setHidePassword(!hidePassword)}
                        >
                            <Icon name={hidePassword ? 'eye-slash' : 'eye'} size={20} color="#808080" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.butt}>
                        <Text style={styles.forgotPassword}>Forgot Password?</Text>
                        {/* <TouchableOpacity */}
                            {/* onPress={() => { */}
                                {/* Sendtobackend(); */}
                            {/* }} */}
                        {/* > */}
                            <Text style={{ ...styles.login, backgroundColor: 'grey', height: 'auto' }} onPress={() => navigation.navigate('DrawerScreen')}>Login</Text>
                        {/* </TouchableOpacity> */}
                        <Text onPress={() => navigation.navigate('SignUpScreen')}>Don't have an account? Sign up here</Text>
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
      passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
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
        flexDirection:'column',
        color:'#fff',
      },
      forgotPassword: {
       // color: '#3498db',
        fontSize: 16,
        marginBottom: 20,
        color: '#fff',
        flexDirection:'end',
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
      login:{
        textAlign:'center',
        fontSize:22,
        padding:10,
        backgroundColor:'white',
        color:'white',
      },
      signupText: {
        fontSize: 16,
        color: '#fff',
      },
    
      eyeIcon: {
        position: 'absolute',
        right: 15,
      //  color:'black'
      },
    
      errormessage: {
        color: 'red',
      },
    
    
});

export default LoginScreen;