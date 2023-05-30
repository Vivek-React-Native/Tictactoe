import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome, { routeWelcome } from './Welcome';
import Quiz, { routeQuiz } from './Quiz';
import Result, { routeResult } from './Result';

const Stack = createStackNavigator();

const QuizApp = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routeWelcome} component={Welcome} />
      <Stack.Screen name={routeQuiz} component={Quiz} />
      <Stack.Screen name={routeResult} component={Result} />
    </Stack.Navigator>
  );
};

export default QuizApp;
