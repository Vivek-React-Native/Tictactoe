// This project is created from Yarn package manager ...
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import Sources from './Sources';
import { AllScreens } from './AppNavigation';
import { ApolloProvider } from '@apollo/client';
import { client } from './Sources/Graphql';
import { StripeProvider } from '@stripe/stripe-react-native';
import { Published_Key } from './Sources/Payment_Gateway/Stripe/Stripe_Helper';

const Stack = createStackNavigator();

const App = () => {
  return (
    <ApolloProvider client={client}>
      <StripeProvider publishableKey={Published_Key}>
        <NavigationContainer onReady={() => SplashScreen.hide()}>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              ...TransitionPresets.SlideFromRightIOS,
            }}>
            <Stack.Screen name="Sources" component={Sources} />
            {AllScreens.length > 0 &&
              AllScreens.map((v, i) => (
                <Stack.Screen key={i} name={v.name} component={v.component} />
              ))}
          </Stack.Navigator>
        </NavigationContainer>
      </StripeProvider>
    </ApolloProvider>
  );
};

export default App;
