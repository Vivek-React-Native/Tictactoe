import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const routeHome = 'Home';

const Home = () => {
  return (
    <View style={styles.Box}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  Box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f00000',
  },
});
