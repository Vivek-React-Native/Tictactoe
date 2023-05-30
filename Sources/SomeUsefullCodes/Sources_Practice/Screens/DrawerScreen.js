import React, { useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { wp } from '../ResponsiveNess/ResponsiveNess';
import { Colors } from '../Assets';
import { Header } from '../Common';

export const routeDrawerScreen = 'Drawer';

const DrawerScreen = props => {
  // const radius = useRef(new Animated.Value(0)).current;

  // const borderradius = Animated.interpolateNode(radius, {
  //   inputRange: [0, 1],
  //   outputRange: [0, 50],
  // });

  // const borderRadius = Animated.interpolateNode(progress, {
  //   inputRange: [0, 1],
  //   outputRange: [0, 40],
  // });

  return (
    <Animated.View style={[styles.Box, props.animatedStyle]}>
      <Header {...props} Name={'Home'} borderRadius={props.borderradius} />
    </Animated.View>
  );
};

export default DrawerScreen;

const styles = StyleSheet.create({
  Box: {
    flex: 1,
    backgroundColor: '#fff',
    shadowOffset: {
      width: -6,
      height: 0,
    },
    shadowColor: '#00000015',
    shadowOpacity: 1,
    shadowRadius: 40,
    elevation: 20,
  },
  animation: {
    width: wp(15),
    height: wp(15),
    backgroundColor: '#000',
  },
});
