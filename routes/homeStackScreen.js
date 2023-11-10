import React, {useState} from 'react';
import {Text, TextInput, View, Button,StyleSheet} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/home';
import ProfileScreen from '../screens/profileScreen';
import MyDrawer from '../screens/drawer';
import Lawyers from '../information/lawyersinfo';
import Dashboard from '../information/dashboardinfo';
import Bail from '../information/bailinfo';


const HomeStack = createNativeStackNavigator();

export default function HomeStackScreen() {
  return (
   
    <HomeStack.Navigator>
      
      <HomeStack.Screen name="Home" component={Home} 
       options={{ headerShown: false }}
       />
        <HomeStack.Screen name="Lawyers" component={Lawyers} 
       
       />
        <HomeStack.Screen name="Dashboard" component={Dashboard} 
      
       />
        <HomeStack.Screen name="Bail" component={Bail} 
      
       />
      <HomeStack.Screen name="ProfileScreen" component={ProfileScreen} 
      options={{
        title: 'ProfileScreen',
        headerStyle: {
          backgroundColor: '#879090',
        },
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} />
    </HomeStack.Navigator>
  );
}