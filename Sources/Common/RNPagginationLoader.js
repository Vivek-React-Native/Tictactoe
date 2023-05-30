import React from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';
import { Colors, hp } from '../Constants';
const RNPagginationLoader = ({ size, color }) => {
  return (
    <View style={styles.Box}>
      <ActivityIndicator size={size || 'large'} color={color || Colors.Black} />
    </View>
  );
};
const styles = StyleSheet.create({
  Box: {
    backgroundColor: Colors.White,
    paddingVertical: hp(2),
  },
});
export default RNPagginationLoader;
