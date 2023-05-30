import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../Constants';

const RNHeader = () => {
  return <View style={styles.Container}></View>;
};

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.Black,
  },
});

export default RNHeader;
