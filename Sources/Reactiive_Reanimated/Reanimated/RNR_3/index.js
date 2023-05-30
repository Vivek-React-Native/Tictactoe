import React from 'react';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import { Colors } from '../../../Constants';
import RNR_3_Page from './RNR_3_Page';

const WORDS = [
  { name: 'React Native', color: Colors.PrimaryButton },
  { name: 'ReactJS', color: Colors.LightBlue },
  { name: 'NodeJS', color: Colors.Green },
  { name: 'NextJS', color: Colors.LightBlue },
];

const RNR_3 = () => {
  const TranslateX = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler(event => {
    console.log('event -> ', JSON.stringify(event, null, 2));
    TranslateX.value = event.contentOffset.x;
  }, []);

  return (
    <Animated.ScrollView
      onScroll={onScroll}
      scrollEventThrottle={16}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      pagingEnabled={true}>
      {WORDS.map((v, i) => (
        <RNR_3_Page key={i} item={v} index={i} TranslateX={TranslateX} />
      ))}
    </Animated.ScrollView>
  );
};

export default RNR_3;
