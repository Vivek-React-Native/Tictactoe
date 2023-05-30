import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';

export const routeDrawer2 = 'Drawer2';

const Drawer2 = props => {
  return (
    <Animated.View style={[styles.Box, props.animatedStyle]}>
      <Text>Drawer 2 Screen</Text>
    </Animated.View>
  );
};

export default Drawer2;

const styles = StyleSheet.create({
  Box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
