// import React from 'react';
// import { Button, View ,Text,StyleSheet,Alert,Image,TouchableOpacity,ScrollView} from 'react-native';
// import Ramachandra from './Ramachandra';
// import Gold from './Gold';
// import Raj from './Raj';
// import Say from './Say';
// import Kha from './Kha';
// // import {openURL} from 'expo-linking';

// export default function lawyersinfo({ navigation }) {
//     return (
//         <ScrollView>
//             <View style={styles.main}>
//                     <View style={styles.bg}>
//                         <Text style={{fontSize:28,color:'black',textAlign:'center',}}>  Mr.Ramachandra Martand Hajarnavis </Text>
//                         <Text style={{fontSize:15,textAlign:'center',}}>Address: 89,shahjahan road,New Delhi</Text>
//                         <Text style={{fontSize:15,textAlign:'center',}}>Date of designation as senior advocate: 26-3-1966</Text>
//                         <Text style={{fontSize:15,textAlign:'center',}}>Remarks: Retired Judge,Bombay High Court</Text>
//                         <View style={{flex:1,margin:5,textAlign:'center',width:100}} >< Button title= "contact" onPress={() => Alert.alert('contact now!!')}/></View>
//                     </View>
//                     <View style={styles.bg}>
//                         <Text style={{fontSize:28,color:'black',textAlign:'center',}} >Mr. Hari Ramchandra Gokhle</Text>
//                         <Text style={{fontSize:15,textAlign:'center'}}>Address: Rocky Hill Flats,N.Dabholkar Road,Bombay-6</Text>
//                         <Text style={{fontSize:15,textAlign:'center'}}>Date of designation as senior advocate: 23-7-1966</Text>
//                         <Text style={{fontSize:15,textAlign:'center'}}>Remarks: Advocate</Text>
//                         <View style={{margin:5,textAlign:'center',width:100}}><Button title= "contact"/></View>
//                     </View>

//                     <View style={styles.bg}>
//                         <Text style={{fontSize:28,color:'black',textAlign:'center',}}>Mr. G. R. Rajagopaul</Text>
//                         <Text style={{fontSize:15,textAlign:'center'}}>Address: c-53,south Extn.Part-1,New Delhi</Text>
//                         <Text style={{fontSize:15,textAlign:'center'}}>Date of designation as senior advocate: 3-10-1966</Text>
//                         <Text style={{fontSize:15,textAlign:'center'}}>Remarks: Advocate</Text>
//                         <View style={{margin:5,textAlign:'center',width:100}}><Button title= "contact"/></View>
//                     </View>
//                     <View style={styles.bg}>
//                         <Text style={{fontSize:28,color:'black',textAlign:'center',}}>Dr.V.A.Sayed Muhammed</Text>
//                         <Text style={{fontSize:15,textAlign:'center'}}>Address: Address not available</Text>
//                         <Text style={{fontSize:15,textAlign:'center'}}>Date of designation as senior advocate: 7-11-1966</Text>
//                         <Text style={{fontSize:15,textAlign:'center'}}>Remarks: Advocate General</Text>
//                         <View style={{margin:5,textAlign:'center',width:100}}><Button title= "contact"/></View>
//                     </View>
//                     <View style={styles.bg}>
//                         <Text style={{fontSize:28,color:'black',textAlign:'center',}}>Mr.N.D.Khar Khanis</Text>
//                         <Text style={{fontSize:15,textAlign:'center'}}>Address: 122,Golf Links,N.D.</Text>
//                         <Text style={{fontSize:15,textAlign:'center'}}>Date of designation as senior advocate: 7-10-1967</Text>
//                         <Text style={{fontSize:15,textAlign:'center'}}>Remarks: Advocate</Text>
//                         <View style={{margin:5,textAlign:'center',width:100}}><Button title= "contact"/></View>
//                     </View>
//                 </View>
//         </ScrollView>

// );
// }
// const styles = StyleSheet.create({
//     bg:{
//         color:'black',
//         margin:10,
//         padding:10,
//         width:550,
//         borderColor:"black",
//         borderWidth:5,
//         backgroundColor:'white',
//         alignItems:'center',
        

//     },
//     image: {
//         height: 60,
//         width:60,
//         borderRadius:30,
//         borderWidth:5,
//     },
//     main:{
//         backgroundColor:'white',

//     }
//     })









import React from 'react';
import { Button, View ,Text,StyleSheet,Alert,Pressable,Image,TouchableOpacity} from 'react-native';

export default function Lawyers({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'pink' }}>
     <View style={styles.main}>
          <View style={styles.bg}>
             <Text onPress={() => navigation.navigate('Ramachandra')} >Mr.Ramachandra Martand Hajarnavis</Text>
          </View>
          <View style={styles.bg}>
            <Text onPress={() => navigation.navigate('Gold')}>Mr. Gold</Text>
           </View>
          <View style={styles.bg}>
            <Text onPress={() => navigation.navigate('Kha')}>Mr .Kha</Text>
          </View>
          <View style={styles.bg}>
            <Text onPress={() => navigation.navigate('Say')}>Dr.V.A.Say</Text>
          </View>
          <View style={styles.bg}>
            <Text onPress={() => navigation.navigate('Raj')}>Mr.N.D.Raj</Text>
          </View>
      </View>


    </View>
  );
}



const styles = StyleSheet.create({
  bg:{
    color:'black',
    margin:10,
    padding:10,
    width:250,
    borderWidth:3,
    alignItems:'center',

  },
  image: {
    height: 200,
    width:200,
  },

  main:{
    backgroundColor:'white',
  }
})

