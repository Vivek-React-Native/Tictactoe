import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors, hp, wp } from '../../../Constants';
import { RNStyles } from '../../../Common';
import Animated, {
  interpolate,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

const TotalWidth = wp(100);
const SIZE = wp(70);

const RNR_3_Page = ({ item, index, TranslateX }) => {
  const InputRange = [
    (index - 1) * TotalWidth,
    index * TotalWidth,
    (index + 1) * TotalWidth,
  ];

  const BoxStyle = useAnimatedStyle(() => {
    const INTERPOLATE = OutputRange => {
      'worklet';
      return interpolate(TranslateX.value, InputRange, OutputRange);
    };
    const rotate = INTERPOLATE([-5, 0, 5]);
    const scale = INTERPOLATE([0, 1, 0]);
    const borderRadius = INTERPOLATE([SIZE, SIZE / 10, SIZE]);

    return {
      borderRadius: borderRadius,
      transform: [{ rotate: `${rotate}rad` }, { scale: scale }],
    };
  }, []);

  const TextStyle = useAnimatedStyle(() => {
    const INTERPOLATE = OutputRange => {
      'worklet';
      return interpolate(TranslateX.value, InputRange, OutputRange);
    };
    const rotate = INTERPOLATE([10, 0, -10]);

    return {
      transform: [{ rotate: `${rotate}rad` }],
    };
  }, []);

  return (
    <View
      style={[
        styles.Container,
        { backgroundColor: `rgba(0,0,256,0.${index + 2})` },
      ]}>
      <Animated.View style={[styles.Box, BoxStyle]}>
        <Animated.Text style={[styles.ItemText, TextStyle]}>
          {item.name}
        </Animated.Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    ...RNStyles.center,
    width: wp(100),
    height: hp(100),
  },
  Box: {
    ...RNStyles.center,
    width: SIZE,
    height: SIZE,
    backgroundColor: Colors.N2C2A9C,
  },
  ItemText: {
    fontSize: wp(8),
    fontWeight: 'bold',
    color: Colors.White,
  },
});

export default RNR_3_Page;
