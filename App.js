import React from 'react';
// import LawBot from './screens/lawbot'


// import Rehabilation from './screens/Rehabilation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerScreen from './screens/drawer';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeStackScreen from './routes/homeStackScreen';
import LoginStackScreen from './routes/loginStackScreen';
// import MainScreen from './screens/mainScreen';
// import DrawerScreen from './screens/drawer';

const Stack = createNativeStackNavigator(); 
 //hell
export default function App() {
  return (
    <NavigationContainer> 
      {/* <Stack.Navigator initialRouteName="LoginStackScreen"
      screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginStackScreen" component={LoginStackScreen} />
        {/* <Stack.Screen name="DrawerScreen" component={DrawerScreen} /> */}
      {/* </Stack.Navigator> */} */
    <DrawerScreen />
    </NavigationContainer>   
  
); 
}

