import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Colors, wp, hp } from '../Constants';

const Apikey =
  'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=AIzaSyD9sBHSSBnxWcoa_SN-aJmAxScWcGRuH-Y';

const YoutubeApi = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    YoutubeApiCall();
  }, []);

  const YoutubeApiCall = async () => {
    try {
      const toJson = await fetch(Apikey, { method: 'GET' });
      const response = await toJson?.json();
      if (response?.items?.length > 0) {
        setData(response?.items);
      }
      // console.log('response -> ', JSON.stringify(response, null, 2));
    } catch (e) {
      console.log('Error from youtube api -. ', JSON.stringify(e, null, 2));
    }
  };

  const anime = useRef(new Animated.Value(0)).current;

  // formula.....     Height + marginVertical   ...or...    paddingVertical + paddingVertical + marginVertical
  // const itemSize = 70 + 20; // for hight + marginBottom
  // const itemSize = 25 + 25 + (25 + 25) + 20; // paddingTop + paddingBottom + ( paddingTop + paddingBottom ) + marginBottom

  // Responsive.....
  const itemSize = hp(15) + 20;

  return (
    <View style={styles.Container}>
      <Animated.FlatList
        data={Data}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: anime } } }],
          { useNativeDriver: true },
        )}
        keyExtractor={(v, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: StatusBar.currentHeight || 40,
        }}
        renderItem={({ item, index }) => {
          const scale = anime.interpolate({
            inputRange: [-1, 0, itemSize * index, itemSize * (index + 2)],
            outputRange: [1, 1, 1, 0],
          });

          const opacity = anime.interpolate({
            inputRange: [-1, 0, itemSize * index, itemSize * (index + 2)],
            outputRange: [1, 1, 1, 0],
          });

          return (
            <Animated.View
              style={[
                styles.MainView,
                { transform: [{ scale: scale }], opacity },
              ]}>
              <Image
                source={{ uri: item?.snippet?.thumbnails?.medium?.url }}
                resizeMode={'cover'}
                style={{
                  width: '40%',
                  height: '100%',
                  borderTopLeftRadius: 20,
                  borderBottomLeftRadius: 20,
                }}
              />
              <View style={{ paddingHorizontal: wp(2), flex: 1 }}>
                <Text numberOfLines={2} style={styles.text}>
                  {item?.snippet?.title}
                </Text>
                <Text numberOfLines={2} style={styles.text}>
                  {item?.snippet?.description}
                </Text>
              </View>
            </Animated.View>
          );
        }}
      />
    </View>
  );
};

export default YoutubeApi;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.White,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
    marginHorizontal: 20,
    // height: 70,
    // padding: 25,
    height: hp(15),
    marginBottom: 20,
    width: wp(90),
  },
  text: {
    color: Colors.Black,
    fontWeight: 'bold',
    paddingVertical: hp(0.5),
  },
});
