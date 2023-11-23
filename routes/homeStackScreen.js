import React from 'react';
import {Text, TextInput, View, Button,StyleSheet} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import ProfileScreen from '../screens/profileScreen';
import MyDrawer from '../screens/drawer';
// import Lawyers from '../information/lawyersinfo';
import Dashboard from '../information/dashboardinfo';
import Bail from '../information/bailinfo';
import LaywerStackScreen from './laywerStackScreen';
const HomeStack = createNativeStackNavigator();

export default function HomeStackScreen() {
  return (
   
    <HomeStack.Navigator>
      
      <HomeStack.Screen name="Home" component={Home} 
          options={{ headerShown: false }}
      />
        <HomeStack.Screen name="LawyerStackScreen" component={LaywerStackScreen} />
        <HomeStack.Screen name="Dashboard" component={Dashboard} 
      
       />
        <HomeStack.Screen name="Bail" component={Bail} 
      
       />
         {/* <HomeStack.Screen name="Gold" component={Gold}  />
         

         <HomeStack.Screen name="Ramachandra" component={Ramachandra} />
            <HomeStack.Screen name="Raj" component={Raj} />
            <HomeStack.Screen name="Kha" component={Kha} />
            <HomeStack.Screen name="Say" component={Say} /> */}
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