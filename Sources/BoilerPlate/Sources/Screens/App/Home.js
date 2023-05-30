import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RNStyles } from '../../Common';

const Home = () => {
  return (
    <View style={styles.Container}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    ...RNStyles.flexCenter,
  },
});

export default Home;
