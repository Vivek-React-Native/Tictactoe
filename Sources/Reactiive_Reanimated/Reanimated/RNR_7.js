import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import ReAnimated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { RNStyles } from '../../Common';
import { wp } from '../../Constants';

const DATA = ['React Native', 'ReactJS', 'Nodejs', 'NextJS'];
const TotalWidth = wp(100);

const RNR_7 = () => {
  const TranslateX = useSharedValue(0);

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (e, c) => {
      c.x = TranslateX.value;
    },
    onActive: (e, c) => {
      TranslateX.value = e.translationX + c.x;
    },
    onEnd: (e, c) => {},
  });

  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <ReAnimated.View style={styles.Content}>
          {DATA.map((v, i) => (
            <Page key={i} item={v} index={i} translateX={TranslateX} />
          ))}
        </ReAnimated.View>
      </PanGestureHandler>
    </View>
  );
};

const Page = ({ item, index, translateX }) => {
  const PageOffSet = TotalWidth * index;

  const PageStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value + PageOffSet }],
    };
  }, []);

  return (
    <ReAnimated.View
      style={[
        {
          ...StyleSheet.absoluteFillObject,
          backgroundColor: `rgba(0,0,256,0.${index + 2})`,
        },
        PageStyle,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    ...RNStyles.container,
  },
  Content: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default RNR_7;
