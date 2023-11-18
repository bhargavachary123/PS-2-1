import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import rightScreen from '../screens/rightScreen';
import rightToAccomadate from '../screens/rightToAccomadate';
import rightToCloth from '../screens/rightToCloth';
import rightToEmploy from '../screens/rightToEmploy';
import rightToShelter from '../screens/rightToShelter';
import rightToHuman from '../screens/rightToHuman';
const rightStack= createNativeStackNavigator();

export default function rightStackScreen() {
  return (
    <rightStack.Navigator >
      <rightStack.Screen name="rightScreen" component={rightScreen} options={{ headerShown: false }} />
      <rightStack.Screen name="rightToAccomadate" component={rightToAccomadate} />
      <rightStack.Screen name="rightToShelter" component={rightToShelter} />
      <rightStack.Screen name="rightToEmploy" component={rightToEmploy} />
      <rightStack.Screen name="rightToCloth" component={rightToCloth} />
      <rightStack.Screen name="rightToHuman" component={rightToHuman} />
    </rightStack.Navigator>
  );
}