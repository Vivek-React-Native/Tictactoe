import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Colors } from '../Constants';
import EAStyles from './RNStyles';
const RNLoader = ({ visible, size, color }) => {
  return visible ? (
    <View style={styles.Container}>
      <ActivityIndicator size={size || 'large'} color={color || Colors.White} />
    </View>
  ) : null;
};
const styles = StyleSheet.create({
  Container: {
    ...EAStyles.center,
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
