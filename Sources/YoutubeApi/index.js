import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import YoutubeApi from './YoutubeApi';
import YoutubePlay from './YoutubePlay';

const Stack = createStackNavigator();

const Youtube = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="YoutubeList" component={YoutubeApi} />
      <Stack.Screen name="YoutubePlay" component={YoutubePlay} />
    </Stack.Navigator>
  );
};

export default Youtube;
