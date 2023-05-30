import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import { wp } from '../ResponsiveNess/ResponsiveNess';
import CustomeDrawer from './CustomeDrawer';
import Home, { routeHome } from '../Screens/Home';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  const [progress, setprogress] = useState(new Animated.Value(0));

  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.75],
  });
  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, wp(8)],
  });

  const animatedStyle = {
    borderRadius,
    transform: [{ scale }],
  };

  return (
    <Drawer.Navigator
      drawerType={'slide'}
      overlayColor={'transparent'}
      drawerStyle={{
        flex: 1,
        width: '70%',
        backgroundColor: '#5E72E4',
      }}
      sceneContainerStyle={{
        backgroundColor: '#5E72E4',
      }}
      screenOptions={{
        headerShown: false,
        swipeEnabled: true,
        gestureEnabled: true,
      }}
      drawerContent={props => {
        setTimeout(() => setprogress(props.progress), 0);
        return <CustomeDrawer {...props} />;
      }}>
      <Drawer.Screen name={routeHome}>
        {props => {
          return (
            <Home
              {...props}
              animatedStyle={animatedStyle}
              borderradius={borderRadius}
            />
          );
        }}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={'DrawerNavigation'} component={DrawerNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
