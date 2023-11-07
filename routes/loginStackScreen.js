import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../screens/profileScreen';
import LoginScreen from '../screens/loginScreen';
import SignupScreen from '../screens/signUpScreen';
import MainScreen from '../screens/mainScreen';
import DrawerScreen from '../screens/drawer';

const LoginStack = createNativeStackNavigator();

export default function LoginStackScreen() {
  return (
    <LoginStack.Navigator >
        <LoginStack.Screen name="LoginScreen" component={LoginScreen} 
      options={{ headerShown: false }} />
      <LoginStack.Screen name="SignUpScreen" component={SignupScreen} 
        options={{ headerShown: false }} />
      <LoginStack.Screen name="DrawerScreen" component={DrawerScreen} 
      options={{ headerShown: false }}
  />
    </LoginStack.Navigator>
  );
}