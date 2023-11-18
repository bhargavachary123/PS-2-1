import React from "react";
import { StyleSheet,View,Text , Button, Alert} from "react-native";
import {openURL} from 'expo-linking';

export default function Say() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{fontSize:15}}>Address: Address not available</Text>
            <Text style={{fontSize:15}}>Date of designation as senior advocate: 7-11-1966</Text>
            <Text style={{fontSize:15}}>Remarks: Advocate General</Text>
            <View style={{margin:5}}>
            <Button title= "contact" onPress={() => Alert.alert('contact now!!')}/>
                </View>
            <View style={{margin:5,flexDirection:'row'}}>
                <Button title= "Detail" onPress={() => openURL("https://en.wikipedia.org/wiki/Fali_Sam_Nariman")}/>
            </View>
        </View>
    )     
}