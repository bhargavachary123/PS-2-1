import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OpenDegree from '../education/opendegree';
import OpenMBA from '../education/openmba';
import EducationHome from '../education/educationHome';
import { StyleSheet,View,Text ,ScrollView} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import VocationalHome from '../vocational/vocationalhome';
import { ImageComponent } from 'react-native';



const EducationStack = createNativeStackNavigator();

export default function EducationalStackScreen() {
  return (
    <EducationStack.Navigator >
            <EducationStack.Screen name="EducationHome" component={EducationHome} 
    />
        <EducationStack.Screen name="OpenDegree" component={OpenDegree} 
    />
      <EducationStack.Screen name="OpenMBA" component={OpenMBA} 
        />
    </EducationStack.Navigator>


  );
}