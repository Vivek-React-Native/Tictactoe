import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { TapGestureHandler } from 'react-native-gesture-handler';
import ReAnimated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from 'react-native-reanimated';
import { RNStyles } from '../../Common';
import { Images } from '../../Constants';

const AnimatedImage = ReAnimated.createAnimatedComponent(Image);

const RNR_6 = () => {
  const LikeScale = useSharedValue(0);
  const onDoubleTap = () => {
    console.log('Double Tap...');
    LikeScale.value = withSpring(1, undefined, isFinished => {
      if (isFinished) {
        LikeScale.value = withDelay(200, withSpring(0));
      }
    });
  };

  const LikeIconStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: Math.max(LikeScale.value, 0) }],
    };
  }, []);

  return (
    <View style={styles.container}>
      <TapGestureHandler numberOfTaps={2} onActivated={onDoubleTap}>
        <ReAnimated.View>
          <Image
            source={Images.im_pencil}
            resizeMode={'contain'}
            style={styles.image}
          />
          <AnimatedImage
            source={Images.Heart}
            resizeMode={'contain'}
            style={[styles.LikeIcon, LikeIconStyle]}
          />
        </ReAnimated.View>
      </TapGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...RNStyles.container,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  LikeIcon: {
    position: 'absolute',
    width: '40%',
    height: '40%',
    alignSelf: 'center',
    top: '30%',
  },
});

export default RNR_6;
