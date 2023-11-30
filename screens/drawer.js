import React from 'react';
import { View, Text, Button , Image, TouchableHighlight, StyleSheet} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// import myTabs from './tabRoutes';
import MainScreen from './mainScreen';
import RehabilationHome from './rehabilationHome';
import LawBot from './lawbot';
import rightStackScreen from '../routes/rightStackScreen';

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
      <Text>LeagalAidScreen</Text>
    </View>
  );
}

function LogoTitle({navigation}) {
  return (
    <View style={styles.headalign}>
         <Image
      style={{ width: 50, height: 50 }}
      source={require('../assets/title.gif')}
    />
    <Text style={styles.htext}>Kaidee</Text>
    <Text style={styles.logout}
      onPress={() => navigation.navigate('LoginScreen')}
    >Logout</Text>

    </View>
 
  );
}

const Drawer = createDrawerNavigator();

export default function DrawerScreen({navigation}) {
  return (
      <Drawer.Navigator initialRouteName="MainScreen">
        {/* Add your drawer screens here */}
        <Drawer.Screen name="Home" component={MainScreen} 
                  // options={{ headerTitle:  (props) => <LogoTitle {...props} navigation/> ,
                  options={{headerTitle: 
                    
                          function LogoTitle() {
                            return (
                              <View style={styles.headalign}>
                                  <Image
                                style={{ width: 50, height: 50 , }}
                                source={require('../assets/title.gif')}
                              />
                              <Text style={styles.htext}>Kaidee</Text>
                              <Text style={styles.logout}
                                onPress={() => navigation.navigate('LoginScreen')}
                              >Logout</Text>

                              </View>
                          
                            );
                          }  ,
                  headerStyle: {
                    backgroundColor: 'black',
                  },
                
                  headerTintColor: 'skyblue',      
                  // headerTitleStyle: {
                  //   fontWeight: 'bold',
                  // },
                  // headerTitleAlign:'right',
            //       headerRight: () => (
            //         <TouchableHighlight 
            //         //   onPress={() => navigation.navigate('ProfileScreen')}
      
            //          >
            //           {/* <Image
            //             style={{ width: 50, height: 50 }}   
            //             source={require('../assets/user1.png')}
            //   />     */}
            //   {/* <Text style={styles.htext}>Vichaaraadeen kaidee</Text> */}
            //         </TouchableHighlight>
            // ),
                
                }}

        />
        <Drawer.Screen name="rights" component={rightStackScreen} />
        <Drawer.Screen name="legalaid" component={legalaidScreen} />
        <Drawer.Screen name="LawBot" component={LawBot} />
        <Drawer.Screen name="RehabiltationHome" component={RehabilationHome} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />

        {/* Add more screens as needed */}
      </Drawer.Navigator>

  );
}

const styles=StyleSheet.create({
  htext:{
    color:'skyblue',
    fontWeight: 'bold',
    fontSize: 24,
    flexDirection:'row',
    paddingTop:7,
    paddingLeft:20,
    },
    headalign: {
      flexDirection:'row',
    },
    logout: {
      backgroundColor:'white',
      color:'black',
      width:70,
      height:25,
      padding:5,
      marginLeft:'35%',
      textAlign:'center',
      fontWeight:'bold',
      marginTop:20,
    }

})