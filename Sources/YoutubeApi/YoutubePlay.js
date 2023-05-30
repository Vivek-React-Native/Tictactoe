import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import YoutubePlayer from 'react-native-youtube-iframe';
import { RNStyles, RNButton, RNImageLoader } from '../Common';
import { Colors, hp, isIOS } from '../Constants';

const PlayerHeight = hp(28);

const YoutubePlay = ({ navigation, route }) => {
  const IsFocused = useIsFocused();
  const [State, setState] = useState({
    IsPlaying: false,
    Initializing: true,
  });
  const RItem = route?.params?.item;
  const RPlayListIds = route?.params?.PlayListIds;

  const ResetStack = () => {
    setState({
      Initializing: true,
      IsPlaying: false,
    });
  };

  useEffect(() => {
    return () => {
      console.log('Component will unmount...');
      ResetStack();
    };
  }, [IsFocused]);

  const onStateChange = e => {
    console.log('event -> ', JSON.stringify(e, null, 2));
    if (e === 'ended' || e === 'paused') {
      setState(p => ({ ...p, IsPlaying: false }));
    } else {
      setState(p => ({ ...p, IsPlaying: true }));
    }
  };

  return (
    <View style={styles.Container}>
      <View style={{ height: PlayerHeight }}>
        <RNImageLoader
          visible={State.Initializing}
          color={Colors.PrimaryButton}
        />
        <YoutubePlayer
          height={PlayerHeight}
          play={State.IsPlaying}
          videoId={RItem?.id?.videoId}
          onChangeState={onStateChange}
          onReady={() => setState(p => ({ ...p, Initializing: false }))}
          onError={e => console.log('onError -> ', e)}
          // playList={RPlayListIds}
        />
      </View>

      <RNButton
        title={State.IsPlaying ? 'Pause' : 'Play'}
        onPress={() => setState(p => ({ ...p, IsPlaying: !State.IsPlaying }))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    ...RNStyles.container,
    paddingTop: isIOS ? hp(5) : 0,
  },
});

export default YoutubePlay;
