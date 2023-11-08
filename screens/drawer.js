import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import myTabs from './tabRoutes';
import MainScreen from './mainScreen';


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

function DrawerScreen() {
  return (
      <Drawer.Navigator initialRouteName="MainScreen">
        {/* Add your drawer screens here */}
        <Drawer.Screen name="MainScreen" component={MainScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="rights" component={rightsScreen} />
        <Drawer.Screen name="legalaid" component={legalaidScreen} />
        <Drawer.Screen name="rehabiltation" component={rehabiltationScreen} />
        {/* Add more screens as needed */}
      </Drawer.Navigator>

  );
}

export default DrawerScreen;