

import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeStackScreen from '../routes/homeStackScreen';
import LawBot from './lawbot';
import Rehabilation from './Rehabilation';

const Tab = createMaterialBottomTabNavigator();

export default function MainScreen({navigation}) {
  return (
    <Tab.Navigator
      initialRouteName="HomeStackScreen"
      activeColor="#e91e63"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: 'tomato' }}
    >
       <Tab.Screen name="HomeS" component={HomeStackScreen} 
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
        // headerTitle: (props) => <LogoTitle {...props} />,
        title: 'Home Screen',
        headerStyle: {
          backgroundColor: 'black',
        }, 
        headerTintColor: '#fff',
       
        headerTitleStyle: { 
          fontWeight: 'bold',
        },  

          headerRight: () => (
          <TouchableHighlight
            onPress={() => navigation.navigate('ProfileScreen')}
          >
            <Image
              style={{ width: 50, height: 50 }}
              source={require('../assets/user1.png')}
    />    
          </TouchableHighlight>
  )
        
      }}  />
       <Tab.Screen name="LawBot" component={LawBot} 
      options={{
        tabBarLabel: 'Updates',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="bell" color={color} size={26} />
        ),
        title: 'LawBot',
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTintColor: '#fff',
      }} />
       <Tab.Screen name="Rehabilation" component={Rehabilation} 
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
        title: 'Rehabilation',
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTintColor: '#fff',
      }} />
    </Tab.Navigator>  
    );
}
