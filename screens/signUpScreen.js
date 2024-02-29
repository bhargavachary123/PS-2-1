// import React, { useState } from 'react';

// import { View, Text, TextInput, TouchableOpacity , StyleSheet } from 'react-native';

// const SignupScreen = ({ navigation }) => {
//    const [fdata, setFdata] = useState({
//     name: '',
//     email: '',
//     password: '',
//     cpassword: '',
//     dob: '',
// })

// const [errormsg, setErrormsg] = useState(null);


// const Sendtobackend = () => {
//     // console.log(fdata);
//     if (fdata.name == '' ||
//         fdata.email == '' ||
//         fdata.password == '' ||
//         fdata.cpassword == '' ||
//         fdata.dob == '') {
//         setErrormsg('All fields are required');
//         return;
//     }
//     else {
//         if (fdata.password != fdata.cpassword) {
//             setErrormsg('Password and Confirm Password must be same');
//             return;
//         }
//         else {
//             fetch(`${API_KEY}verify', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(fdata)
//             })
//                 .then(res => res.json()).then(
//                     data => {
//                         console.log(data);
//                         if (data.error) {
//                             // alert('Invalid Credentials')
//                             setErrormsg(data.error);
//                         }
//                         else {
//                             // console.log(data.udata);
//                             alert('account created successfully');
//                             navigation.navigate('LoginScreen');
//                         }
//                     }
//                 )
//         }
//     }

// }


//   return (
//     <View style={styles.container1}>
//       <Text style={styles.hea1}>Register Here..</Text>
//       {
//            errormsg ? <Text style={styles.errormessage}>{errormsg}</Text> : null
//         }
//          <TextInput style={styles.inp1}
//         placeholder="name"
//         onPressIn={() => setErrormsg(null)}
//         onChangeText={(text) => setFdata({ ...fdata, name: text })}
//     />      
//       <TextInput style={styles.inp1}
//         placeholder="email"
//         onPressIn={() => setErrormsg(null)}
//         onChangeText={(text) => setFdata({ ...fdata, email: text })}
//           />
   
//        { <TextInput style={styles.inp1}
//         placeholder="dob"
//         onPressIn={() => setErrormsg(null)}
//         onChangeText={(text) => setFdata({ ...fdata, dob: text })}
//           /> }
//       <TextInput style={styles.inp1}
//         placeholder="password"
//         secureTextEntry
//         onPressIn={() => setErrormsg(null)}
//         onChangeText={(text) => setFdata({ ...fdata, password: text })}
//           />
//         <TextInput style={styles.inp1}
//         placeholder="cpassword"
//         secureTextEntry
//         onPressIn={() => setErrormsg(null)}
//         onChangeText={(text) => setFdata({ ...fdata, cpassword: text })}
//           />
//       <View style={styles.butt1}>
//       <TouchableOpacity
//                         onPress={() => {
//                             Sendtobackend();
//                         }}
//                     >
//                         <Text style={styles.butt1}

//                         >Signup</Text>
//                     </TouchableOpacity>
//       <Text  onPress={() => navigation.navigate('LoginScreen')}>Back to Login in Screen</Text> 
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container1: {
//     padding: 50,
//   },
//   hea1: {
//     padding: 30,
//      fontSize: 30,
//      fontFamily: "Roboto",
//   },
//   inp1: {
//     borderRadius: 5,
//     borderWidth: 2,
//     height: 40,
//     width: 200,
//     padding: 5,
//     margin: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   butt1: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems:"center",
//   },
//   errormessage: {
//     color:'red',
//     fontSize:18,
//   },
// });


// export default SignupScreen;


// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

// const SignupScreen = ({ navigation }) => {
//   const [fdata, setFdata] = useState({
//     name: '',
//     email: '',
//     password: '',
//     cpassword: '',
//     dob: '',
// })

// const [errormsg, setErrormsg] = useState(null);

// const Sendtobackend = () => {
//     // console.log(fdata);
//     if (fdata.name == '' ||
//         fdata.email == '' ||
//         fdata.password == '' ||
//         fdata.cpassword == '' ||
//         fdata.dob == '') {
//         setErrormsg('All fields are required');
//         return;
//     }
//     else {
//         if (fdata.password != fdata.cpassword) {
//             setErrormsg('Password and Confirm Password must be same');
//             return;
//         }
//         else {
//             fetch('http://10.0.2.2.:3000/signup', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(fdata)
//             })
//                 .then(res => res.json()).then(
//                     data => {
//                         // console.log(data);
//                         if (data.error) {
//                             // alert('Invalid Credentials')
//                             setErrormsg(data.error);
//                         }
//                         else {
//                             // console.log(data.udata);
//                             alert('account created successfully');
//                             navigation.navigate('LoginScreen');
//                         }
//                     }
//                 )
//         }
//     }

// }


//   return (
//     <View style={styles.container1}>
//       <Text style={styles.hea1}>Register Here..</Text>
//       {
//            errormsg ? <Text style={styles.errormessage}>{errormsg}</Text> : null
//         }
//          <TextInput style={styles.inp1}
//         placeholder="name"
//         onPressIn={() => setErrormsg(null)}
//         onChangeText={(text) => setFdata({ ...fdata, name: text })}
//     />      
//       <TextInput style={styles.inp1}
//         placeholder="email"
//         onPressIn={() => setErrormsg(null)}
//         onChangeText={(text) => setFdata({ ...fdata, email: text })}
//           />
//        <TextInput style={styles.inp1}
//         placeholder="dob"
//         onPressIn={() => setErrormsg(null)}
//         onChangeText={(text) => setFdata({ ...fdata, dob: text })}
//           />
//       <TextInput style={styles.inp1}
//         placeholder="password"
//         secureTextEntry
//         onPressIn={() => setErrormsg(null)}
//         onChangeText={(text) => setFdata({ ...fdata, password: text })}
//           />
//         <TextInput style={styles.inp1}
//         placeholder="cpassword"
//         secureTextEntry
//         onPressIn={() => setErrormsg(null)}
//         onChangeText={(text) => setFdata({ ...fdata, cpassword: text })}
//           />
//       <View style={styles.butt1}>
//       <TouchableOpacity
//                         onPress={() => {
//                             Sendtobackend();
//                         }}
//                     >
//                         <Text style={button1}

//                         >Signup</Text>
//                     </TouchableOpacity>
//       <Text  onPress={() => navigation.navigate('LoginScreen')}>Back to Login in Screen</Text> 
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container1: {
//     padding: 50,
//   },
//   hea1: {
//     padding: 30,
//      fontSize: 30,
//      fontFamily: "Roboto",
//   },
//   inp1: {
//     borderRadius: 5,
//     borderWidth: 2,
//     height: 40,
//     width: 200,
//     padding: 5,
//     margin: 20,
//   },
//   butt1: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems:"center",
//   },
//   errormessage: {
//     color:'red',
//     fontSize:18,
//   },
// });


// export default SignupScreen;









import React, { useState } from 'react';

import { View, Text, TextInput, TouchableOpacity , StyleSheet } from 'react-native';

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
    if (fdata.name == '' ||
        fdata.email == '' ||
        fdata.password == '' ||
        fdata.cpassword == '' ||
        fdata.dob == '') {
        setErrormsg('All fields are required');
        return;
    }
    else {
        if (fdata.password != fdata.cpassword) {
            setErrormsg('Password and Confirm Password must be same');
            return;
        }
        else {
            fetch(`${API_KEY}signup', {
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
                            // alert('Invalid Credentials')
                            setErrormsg(data.error);
                        }
                        else {
                            // console.log(data.udata);
                            alert('account created successfully');
                            navigation.navigate('LoginScreen');
                        }
                    }
                )
        }
    }

}


  return (
    <View style={styles.container1}>
      <Text style={styles.hea1}>Register Here..</Text>
      {
           errormsg ? <Text style={styles.errormessage}>{errormsg}</Text> : null
        }
         <TextInput style={styles.inp1}
        placeholder="name"
        onPressIn={() => setErrormsg(null)}
        onChangeText={(text) => setFdata({ ...fdata, name: text })}
    />      
      <TextInput style={styles.inp1}
        placeholder="email"
        onPressIn={() => setErrormsg(null)}
        onChangeText={(text) => setFdata({ ...fdata, email: text })}
          />
   
       { <TextInput style={styles.inp1}
        placeholder="dob"
        onPressIn={() => setErrormsg(null)}
        onChangeText={(text) => setFdata({ ...fdata, dob: text })}
          /> }
      <TextInput style={styles.inp1}
        placeholder="password"
        secureTextEntry
        onPressIn={() => setErrormsg(null)}
        onChangeText={(text) => setFdata({ ...fdata, password: text })}
          />
        <TextInput style={styles.inp1}
        placeholder="cpassword"
        secureTextEntry
        onPressIn={() => setErrormsg(null)}
        onChangeText={(text) => setFdata({ ...fdata, cpassword: text })}
          />
      <View style={styles.butt1}>
      <TouchableOpacity
                        onPress={() => {
                            Sendtobackend();
                        }}
                    >
                        <Text style={styles.butt1}

                        >Signup</Text>
                    </TouchableOpacity>
      <Text  onPress={() => navigation.navigate('LoginScreen')}>Back to Login in Screen</Text> 
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
    justifyContent: 'center',
    alignItems: 'center',
  },

  butt1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:"center",
  },
  errormessage: {
    color:'red',
    fontSize:18,
  },
});


export default SignupScreen;