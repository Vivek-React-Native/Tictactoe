import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Colors } from '../Constants';
import RNStyles from './RNStyles';
const RNLoader = ({ visible }) => {
  return visible ? (
    <View style={styles.Container}>
      <ActivityIndicator size={'large'} color={Colors.White} />
    </View>
  ) : null;
};
const styles = StyleSheet.create({
  Container: {
    ...RNStyles.center,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.Black + '99',
    zIndex: 1,
  },
});
export default RNLoader;
