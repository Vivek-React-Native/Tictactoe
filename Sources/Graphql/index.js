import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { GraphQL_URL, Query_Navigations } from './Constants';
import { Colors } from '../Constants';
import { RNText } from '../Common';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const Stack = createStackNavigator();

// Initialize Apollo Client
export const client = new ApolloClient({
  uri: GraphQL_URL.SpaceX,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          capsules: {
            keyArgs: false, // Don't cache separate results based on any of this field's arguments.
            merge(existing = [], incoming) {
              // Concatenate the incoming list items with the existing list items.
              return [...existing, ...incoming];
            },
          },
          launchesPast: {
            keyArgs: false,
            merge(existing = [], incoming) {
              return [...existing, ...incoming];
            },
          },
        },
      },
    },
  }),
});
// Apollo client Provide should must be in App.js file Before Navigation Container...

const Graphql = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name="LIST QUERIES" component={QUERIES} />
      {Query_Navigations.map((v, i) => (
        <Stack.Screen key={i} name={v.name} component={v.component} />
      ))}
    </Stack.Navigator>
  );
};

const QUERIES = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.Container}>
      <FlatList
        data={Query_Navigations}
        keyExtractor={(v, index) => String(index)}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.renderItemContainer}
            onPress={() => navigation.navigate(item.name)}>
            <RNText style={styles.Text}>{item.name}</RNText>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  renderItemContainer: {
    borderWidth: 1,
    borderColor: Colors.ACACAC,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginHorizontal: 15,
    marginVertical: 15,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowColor: Colors.Black,
    shadowOpacity: 0.2,
    shadowRadius: 10,
    backgroundColor: Colors.White,
    elevation: 7,
  },
});

export default Graphql;
