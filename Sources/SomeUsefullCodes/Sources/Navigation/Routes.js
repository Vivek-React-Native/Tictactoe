import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomeDrawer from './CustomeDrawer';
import {Dimensions} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LogIn, {routeLogIn} from '../Screens/LogIn';
import SignUp, {routeSignUp} from '../Screens/SignUp';
import Home, {routeHome} from '../Screens/Home';

const {width, height} = Dimensions.get('screen');

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerSection = props => {
  const screenOptions = {
    headerShown: false,
    drawerActiveBackgroundColor: '#e1e0f0',
    drawerActiveTintColor: '#0e2080',
    drawerStyle: {
      width: '75%',
    },
    drawerLabelStyle: {
      marginLeft: -width * 0.03,
    },
    ...TransitionPresets.SlideFromRightIOS,
  };

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomeDrawer {...props} />}
      screenOptions={screenOptions}>
      <Drawer.Screen
        name={routeLogIn}
        component={LogIn}
        options={{
          drawerIcon: ({color, size}) => (
            <FontAwesome5 name="home" size={20} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={routeSignUp}
        component={SignUp}
        options={{
          drawerIcon: ({color, size}) => (
            <FontAwesome5 name="comments" size={20} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={routeHome}
        component={Home}
        options={{
          drawerIcon: ({color, size}) => (
            <FontAwesome5 name="comments" size={20} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={'DrawerSection'} component={DrawerSection} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
