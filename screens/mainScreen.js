import React from 'react';
import {Text,View, Button,StyleSheet,Image,TouchableHighlight} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from '../routes/homeStackScreen';
import LawBot from './lawbot';
import Rehabilation from './Rehabilation';

const Tab = createBottomTabNavigator();

// function LogoTitle() {
//   return (
//     <Image
//       style={{ width: 50, height: 50 }}
//       source={require('../assets/appicon.png')}
//     />
//   );
// }

export default function MainScreen({navigation}) {
    return (
      <Tab.Navigator 

      >
      <Tab.Screen name="HomeS" component={HomeStackScreen} 
      options={{
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
