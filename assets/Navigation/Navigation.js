import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cart from '../Screens/Cart';
import Home from '../Screens/Home';
import Splashscreen from '../Screens/Splashscreen';
import SignUp from '../components/Signup';
import Detail from '../Screens/Detail';
const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="Splashscreen" component={Splashscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
