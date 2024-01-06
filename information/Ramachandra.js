import React from "react";
import { StyleSheet,View,Text , Button, Alert} from "react-native";
import {openURL} from 'expo-linking';

export default function Ramachandra() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{fontSize:15}}>Address: 89,shahjahan road,New Delhi</Text>
            <Text style={{fontSize:15}}>Date of designation as senior advocate: 26-3-1966</Text>
            <Text style={{fontSize:15}}>Remarks: Retired Judge,Bombay High Court</Text>
            <View style={{margin:5}}>
                <Button title= "contact" onPress={() => Alert.alert('contact now!!')}/>
                </View>
            <View style={{margin:5,flexDirection:'row'}}>
                <Button title= "Detail" onPress={() => openURL("https://en.wikipedia.org/wiki/Fali_Sam_Nariman")}/>
            </View>
        </View>
    ) 
}