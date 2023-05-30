import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { NavigationRoutes } from '../Constants';
import { Login, Register } from '../Screens';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={NavigationRoutes.Register} component={Register} />
      <Stack.Screen name={NavigationRoutes.Login} component={Login} />
    </Stack.Navigator>
  );
};

const screenOptions = {
  headerShown: false,
  ...TransitionPresets.SlideFromRightIOS,
};

export default AuthStack;
