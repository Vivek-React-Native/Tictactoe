import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { PinchGestureHandler } from 'react-native-gesture-handler';
import ReAnimated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { RNStyles } from '../../Common';
import { Colors, height, Images, width } from '../../Constants';

const AnimatedImage = ReAnimated.createAnimatedComponent(Image);

const RNR_5 = () => {
  const scale = useSharedValue(1);
  const focal = {
    x: useSharedValue(0),
    y: useSharedValue(0),
  };

  const onGestureEvent = useAnimatedGestureHandler({
    onActive: event => {
      console.log('onActive -> ', JSON.stringify(event, null, 2));
      scale.value = event.scale;
      focal.x.value = event.focalX;
      focal.y.value = event.focalY;
    },
    onEnd: event => {
      console.log('onEnd -> ', JSON.stringify(event, null, 2));
      scale.value = withTiming(1);
    },
  });

  const ImageStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: focal.x.value },
        { translateY: focal.y.value },
        { translateX: -width / 2 },
        { translateY: -height / 2 },
        { scale: scale.value },
        { translateX: -focal.x.value },
        { translateY: -focal.y.value },
        { translateX: width / 2 },
        { translateY: height / 2 },
      ],
    };
  }, []);

  const FocalPointStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: focal.x.value }, { translateY: focal.y.value }],
    };
  }, []);

  return (
    <PinchGestureHandler onGestureEvent={onGestureEvent}>
      <ReAnimated.View style={styles.container}>
        <AnimatedImage
          source={Images.PencilAndPage}
          resizeMode={'contain'}
          style={[styles.image, ImageStyle]}
        />

        {/* <ReAnimated.View style={[styles.focalPoint, FocalPointStyle]} /> */}
      </ReAnimated.View>
    </PinchGestureHandler>
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
  focalPoint: {
    ...StyleSheet.absoluteFillObject,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: Colors.Red,
  },
  ImageContainer: {
    width: 50,
    height: 50,
    borderWidth: 1,
    marginHorizontal: 5,
  },
});

export default RNR_5;
