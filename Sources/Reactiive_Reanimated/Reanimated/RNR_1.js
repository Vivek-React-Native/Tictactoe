import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  Layout,
} from 'react-native-reanimated';
import { RNButton, RNStyles } from '../../Common';
import { Colors } from '../../Constants';

const SIZE = 100;

const RNR_1 = () => {
  const progress = useSharedValue(1);
  const scale = useSharedValue(2);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      // backgroundColor: progress.value < 0.5 ? Colors.Red : Colors.PrimaryButton,
      opacity: progress.value,
      borderRadius: (progress.value * SIZE) / 2,
      transform: [
        { scale: scale.value },
        { rotate: `${progress.value * 2 * Math.PI}rad` },
      ],
    };
  }, []);

  const StartAnimation = () => {
    progress.value = withRepeat(withSpring(0.2), -1, true);
    scale.value = withRepeat(withSpring(1), -1, true);
  };

  const EndAnimation = () => {
    progress.value = withSpring(1);
    scale.value = withSpring(2);
  };

  return (
    <SafeAreaView style={styles.Container}>
      <Animated.View style={[styles.Box, animatedStyles]} />

      <RNButton
        title={'Start Animation'}
        onPress={StartAnimation}
        style={styles.StartButton}
      />

      <RNButton title={'End Animation'} onPress={EndAnimation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    ...RNStyles.container,
    ...RNStyles.center,
  },
  Box: {
    width: SIZE,
    height: SIZE,
    backgroundColor: Colors.Blue,
  },
  StartButton: {
    marginTop: SIZE * 2,
  },
});

export default RNR_1;
