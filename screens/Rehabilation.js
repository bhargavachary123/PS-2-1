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
    youtube:{
        flexDirection:'column',
        alignItems:"center",
        justifyContent:"center",
        marginBottom:20, 
        marginTop:10,
        padding:10,
      },
    texts: {
        padding:10,
        height:60,
        width:'100%',
        marginBottom:20,
        fontSize:34,
        fontWeight:'bold',
        textAlign:'left',
        backgroundColor:'black',
        color:'white'
    }
})