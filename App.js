import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import myTabs from './tabRoots';


function SettingsScreen({ navigation }) {
  return (
    <View>
      <Text>Settings Screen</Text>
      <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
}
function rightsScreen({ navigation }) {
  return (
    <View>
      <Text>rightsScreen</Text>
    </View>
  );
}
function legalaidScreen({ navigation }) {
  return (
    <View>
      <Text>leagalaidScreen</Text>
    </View>
  );
}
function rehabiltationScreen({ navigation }) {
  return (
    <View>
      <Text>rehabiltationScreen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="myTabs">
        {/* Add your drawer screens here */}
        <Drawer.Screen name="myTabs" component={myTabs} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="rights" component={rightsScreen} />
        <Drawer.Screen name="legalaid" component={legalaidScreen} />
        <Drawer.Screen name="rehabiltation" component={rehabiltationScreen} />
        {/* Add more screens as needed */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;