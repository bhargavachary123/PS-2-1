import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Lawyers from '../information/lawyersinfo';
import Gold from "../information/Gold";
import Kha from "../information/Kha";
import Raj from "../information/Raj";
import Ramachandra from "../information/Ramachandra";
import Say from "../information/Say";
import SignupScreen from '../screens/signUpScreen';
import Dashboard from '../information/dashboardinfo';
 
const LawyerStack = createNativeStackNavigator();

export default function LawyerStackScreen(){
    return(
        <LawyerStack.Navigator initialRouteName='Lawyers'>
            <LawyerStack.Screen name="Lawyers" component={Lawyers}/>
            <LawyerStack.Screen name="Ramachandra" component={Ramachandra} />
            <LawyerStack.Screen name="Gold" component={Gold} />
            <LawyerStack.Screen name="Raj" component={Raj} />
            <LawyerStack.Screen name="Kha" component={Kha} />
            <LawyerStack.Screen name="Say" component={Say} />
        </LawyerStack.Navigator>
    )
}