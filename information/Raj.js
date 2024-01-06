import React from "react";
import { StyleSheet,View,Text , Button, Alert} from "react-native";
import {openURL} from 'expo-linking';

export default function Raj() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{fontSize:15}}>Address: c-53,south Extn.Part-1,New Delhi</Text>
            <Text style={{fontSize:15}}>Date of designation as senior advocate: 3-10-1966</Text>
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