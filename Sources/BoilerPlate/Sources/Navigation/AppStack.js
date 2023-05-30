import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { NavigationRoutes } from '../Constants';
import { Home } from '../Screens';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={NavigationRoutes.Home} component={Home} />
    </Stack.Navigator>
  );
};

const screenOptions = {
  headerShown: false,
  ...TransitionPresets.SlideFromRightIOS,
};

export default AppStack;
