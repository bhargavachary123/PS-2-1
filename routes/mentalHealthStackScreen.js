import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Carpentry from '../vocational/carpentry';
import Welding from '../vocational/welding';
import Tailoring from '../vocational/tailoring';
import { StyleSheet,View,Text ,ScrollView} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import VocationalHome from '../vocational/vocationalhome';
import MentalHealthHome from '../mentalHealth/mentalHealthHome';


const MentalHealthStack = createNativeStackNavigator();

export default function MentalHealthStackScreen() {
  return (
    <MentalHealthStack.Navigator >
            <MentalHealthStack.Screen name="MentalHealthHome" component={MentalHealthHome} 
    />
        {/* <MentalHealthStack.Screen name="Carpentry" component={Carpentry} 
    />
      <MentalHealthStack.Screen name="Welding" component={Welding} 
        />
      <MentalHealthStack.Screen name="Tailoring" component={Tailoring} 
  /> */}
    </MentalHealthStack.Navigator>


  );
}