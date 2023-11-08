import React from "react";
import { StyleSheet,View,Text } from "react-native";

export default function Rehabilation() {
    return (
        <View style={styles.texts}>
            <Text> Welcome to Rehabilation Center...!!! </Text>
            
        </View>
    ) 
}
const styles=StyleSheet.create({
    texts:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
      }
})