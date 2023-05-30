import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { NavigationRoutes } from '../Constants';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
const Stack = createStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        {true ? (
          <Stack.Screen name={NavigationRoutes.AUTH} component={AuthStack} />
        ) : (
          <Stack.Screen name={NavigationRoutes.APP} component={AppStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const screenOptions = {
  headerShown: false,
  ...TransitionPresets.SlideFromRightIOS,
};
export default Routes;
