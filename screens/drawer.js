import React from 'react';
import { View, Text, Button , Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import myTabs from './tabRoutes';
import MainScreen from './mainScreen';
import Rehabilation from './Rehabilation';
import LawBot from './lawbot';


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

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 , borderRadius:'50%'}}
      source={require('../assets/title.gif')}
    />
  );
}

const Drawer = createDrawerNavigator();

function DrawerScreen() {
  return (
      <Drawer.Navigator initialRouteName="MainScreen">
        {/* Add your drawer screens here */}
        <Drawer.Screen name="Home" component={MainScreen} 
                  options={{ headerTitle: (props) => <LogoTitle {...props} />,
                  title: 'Vichaar',
                  headerStyle: {
                    backgroundColor: 'black',
                  },
                  headerTintColor: 'skyblue',      
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }}

        />
        <Drawer.Screen name="rights" component={rightsScreen} />
        <Drawer.Screen name="legalaid" component={legalaidScreen} />
        <Drawer.Screen name="LawBot" component={LawBot} />
        <Drawer.Screen name="Rehabiltation" component={Rehabilation} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />

        {/* Add more screens as needed */}
      </Drawer.Navigator>

  );
}

export default DrawerScreen;