import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Carpentry from '../vocational/carpentry';
import Welding from '../vocational/welding';
import Tailoring from '../vocational/tailoring';
import { StyleSheet,View,Text ,ScrollView} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import VocationalHome from '../vocational/vocationalhome';



const VocationalStack = createNativeStackNavigator();

export default function VocationalStackScreen() {
  return (
    <VocationalStack.Navigator >
            <VocationalStack.Screen name="VocationalHome" component={VocationalHome} 
    />
        <VocationalStack.Screen name="Carpentry" component={Carpentry} 
    />
      <VocationalStack.Screen name="Welding" component={Welding} 
        />
      <VocationalStack.Screen name="Tailoring" component={Tailoring} 
  />
    </VocationalStack.Navigator>


  );
}