import React from 'react';
import { View } from 'react-native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import Horizontal from './OverlapingHorizontal';
import Vertical from './OverlapingVertical';
import { RNButton, RNStyles } from '../../Common';

const Stack = createStackNavigator();

const OverlapingItems = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name={'item'} component={AllItem} />
      <Stack.Screen name={'Vertical'} component={Vertical} />
      <Stack.Screen name={'Horizontal'} component={Horizontal} />
    </Stack.Navigator>
  );
};

const AllItem = ({ navigation }) => {
  return (
    <View style={[RNStyles.container, RNStyles.center]}>
      <RNButton
        title={'Overlaping Vertical'}
        onPress={() => navigation.navigate('Vertical')}
      />
      <RNButton
        title={'Overlaping Horizontal'}
        onPress={() => navigation.navigate('Horizontal')}
      />
    </View>
  );
};

export default OverlapingItems;
