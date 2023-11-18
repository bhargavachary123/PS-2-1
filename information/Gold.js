import React from "react";
import { View,Text, Button, Alert} from "react-native";
import {openURL} from 'expo-linking';


export default function Gold() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{fontSize:15}}>Address: Rocky Hill Flats,N.Dabholkar Road,Bombay-6</Text>
            <Text style={{fontSize:15}}>Date of designation as senior advocate: 23-7-1966</Text>
            <Text style={{fontSize:15}}>Remarks: Advocate</Text>
            <View style={{margin:5}}>
            <Button title= "contact" onPress={() => Alert.alert('contact now!!')}/>
                </View>
            <View style={{margin:5,flexDirection:'row'}}>
                <Button title= "Detail" onPress={() => openURL("https://en.wikipedia.org/wiki/Fali_Sam_Nariman")}/>
                </View>
        </View>
    ) 
}





// import React from "react";
// import { StyleSheet,View,Text, Button } from "react-native";
// import {openURL} from 'expo-linking';


// export default function Gold() {
//     return (
//         <View >
//             <Text> ......</Text>
//              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//              <Text style={{fontSize:15}}>Address: Rocky Hill Flats,N.Dabholkar Road,Bombay-6</Text>
//              <Text style={{fontSize:15}}>Date of designation as senior advocate: 23-7-1966</Text>
//              <Text style={{fontSize:15}}>Remarks: Advocate</Text>
//               <View style={{margin:5}}><Button title= "contact"/></View>
//             <View style={{margin:5,flexDirection:'row'}}><Button title= "Detail" onPress={() => openURL("https://en.wikipedia.org/wiki/Fali_Sam_Nariman")}/></View>
//          </View>
//         </View>
//     )
// }