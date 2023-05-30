import React, { useEffect, useRef, useState } from 'react';
import { Animated, View } from 'react-native';
import { RNHeader, RNLoader, RNStyles } from '../Common';
import { hp, isIOS } from '../Constants';
import YoutubeApiItem from './Components/YoutubeApiItem';
import { YouTubeList } from './data';

const Apikey =
  'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=AIzaSyD9sBHSSBnxWcoa_SN-aJmAxScWcGRuH-Y';

const YoutubeApi = ({ navigation }) => {
  const anime = useRef(new Animated.Value(0)).current;
  const [Data, setData] = useState(null);
  const [IsLoading, setIsLoading] = useState(false);
  const [PlayListIds, setPlayListIds] = useState(null);

  useEffect(() => {
    YoutubeApiCall();
    GettingVideoIds();
  }, []);

  const YoutubeApiCall = async () => {
    setIsLoading(true);
    try {
      const toJson = await fetch(Apikey, { method: 'GET' });
      const response = await toJson?.json();
      if (response?.items?.length > 0) {
        setData(response?.items);
      }
      setIsLoading(false);
      console.log('response -> ', JSON.stringify(response, null, 2));
    } catch (e) {
      setIsLoading(false);
      console.log('Error from youtube api -. ', JSON.stringify(e, null, 2));
    }
  };

  const GettingVideoIds = () => {
    const IDs = YouTubeList.map(v => v.id.videoId);
    setPlayListIds(IDs);
  };

  return (
    <View style={RNStyles.container}>
      <RNHeader />
      <RNLoader visible={IsLoading} />
      <Animated.FlatList
        data={Data}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: anime } } }],
          { useNativeDriver: true },
        )}
        keyExtractor={(v, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: isIOS ? hp(5) : hp(1),
        }}
        renderItem={({ item, index }) => (
          <YoutubeApiItem
            item={item}
            index={index}
            anime={anime}
            onPress={() =>
              navigation.navigate('YoutubePlay', {
                item: item,
                PlayListIds: PlayListIds,
              })
            }
          />
        )}
      />
    </View>
  );
};

export default YoutubeApi;
