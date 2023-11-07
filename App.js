import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from "react-native-reanimated";
import { View, Button } from "react-native";

export default function AnimatedStyleUpdateExample(props) {
  const randomWidth = useSharedValue(10);

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(randomWidth.value, config),
    };
  });

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