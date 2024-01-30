import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cart from '../Screens/Cart';
import Home from '../Screens/Home';
import Splashscreen from '../Screens/Splashscreen';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../theme/colors';
import {AnimatedTabBarNavigator} from 'react-native-animated-nav-tab-bar';
import SignUp from '../components/Signup';
import Detail from '../Screens/Detail';
const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
// const Tabs = AnimatedTabBarNavigator();

// function TabNavigator() {
//   return (
//     <Tabs.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}>
//       <Tabs.Screen
//         initialRouteName
//         ="Home"
//         name="Home"
//         component={Home}
//         options={{
//           tabBarIcon: ({focused, color, size}) => (
//             <Icon
//               name="home-outline"
//               size={size ? size : 24}
//               color={focused ? color : colors.textLight}
//               focused={focused}
//             />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="Cart"
//         component={Cart}
//         options={{
//           activeBackgroundColor: colors.primary,
//           tabBarIcon: ({focused, color, size}) => (
//             <Icon
//               name="cart-outline"
//               size={size ? size : 24}
//               color={focused ? color : colors.textLight}
//               focused={focused}
//             />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="Detail"
//         component={Detail}
//         options={{
//           activeBackgroundColor: 'plum',
//           tabBarIcon: ({focused, color, size}) => (
//             <Icon
//               name="heart-outline"
//               size={size ? size : 24}
//               color={focused ? color : colors.textLight}
//               focused={focused}
//             />
//           ),
//         }}
//       />

//       {/* <Tabs.Screen
//         name="Splashscreen"
//         component={Splashscreen}
//         options={{
//           activeBackgroundColor: colors.BtnColor,
//           tabBarIcon: ({focused, color, size,}) => (
//             <Icon
//               name="person-outline"
//               size={size ? size : 24}
//               color={focused ? color : colors.textLight}
//               focused={focused}
//             />
//           ),
//         }}
//       /> */}
//     </Tabs.Navigator>
//   );
// }

const Navigation = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splashscreen" component={Splashscreen} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;

const styles = StyleSheet.create({
  tabbar: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: colors.primary,
  },
});
