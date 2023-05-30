import React from 'react';
import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors, hp, wp } from '../../Constants';

const YoutubeApiItem = ({ item, index, anime, onPress }) => {
  const navigation = useNavigation();
  // formula.....     Height + marginVertical   ...or...    paddingVertical + paddingVertical + marginVertical
  // const itemSize = 70 + 20; // for hight + marginBottom
  // const itemSize = 25 + 25 + (25 + 25) + 20; // paddingTop + paddingBottom + ( paddingTop + paddingBottom ) + marginBottom

  // Responsive.....
  const itemSize = hp(15) + hp(2);
  const scale = anime.interpolate({
    inputRange: [-1, 0, itemSize * index, itemSize * (index + 2)],
    outputRange: [1, 1, 1, 0],
  });
  const opacity = anime.interpolate({
    inputRange: [-1, 0, itemSize * index, itemSize * (index + 2)],
    outputRange: [1, 1, 1, 0],
  });

  return (
    <Animated.View style={{ transform: [{ scale: scale }], opacity: opacity }}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.5}
        style={styles.MainView}>
        <Image
          source={{ uri: item?.snippet?.thumbnails?.medium?.url }}
          resizeMode={'cover'}
          style={styles.YoutubeImage}
        />
        <View style={{ paddingHorizontal: wp(2), flex: 1 }}>
          <Text numberOfLines={2} style={styles.text}>
            {item?.snippet?.title}
          </Text>
          <Text numberOfLines={2} style={styles.text}>
            {item?.snippet?.description}
          </Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  MainView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.White,
    borderRadius: 20,
    shadowOffset: { width: 0, height: 7 },
    shadowColor: Colors.Black,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 9,
    marginHorizontal: wp(4),
    // height: 70,
    // padding: 25,
    height: hp(15),
    marginVertical: hp(1),
  },
  text: {
    color: Colors.Black,
    fontWeight: 'bold',
    paddingVertical: hp(0.5),
  },
  YoutubeImage: {
    width: '40%',
    height: '100%',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
});

export default YoutubeApiItem;
