import React, { useState } from 'react';
import {
  FlatList,
  Image,
  Modal,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { useQuery } from '@apollo/client';
import { RNPagginationLoader, RNStyles, RNText } from '../../Common';
import { Functions } from '../../Utils';
import { FontFamily, FontSize, hp, Images, wp } from '../../Constants';
import { LaunchesPastQuery } from '../Query';

const LIMIT = 20;
let OFFSET = 0;

const launchesPast = ({ visible, onClose }) => {
  const { data, fetchMore } = useQuery(LaunchesPastQuery, {
    variables: { limit: LIMIT, offset: OFFSET },
  });
  const [DATA, setDATA] = useState({
    IsLaunchesEnd: false,
  });

  console.log('data -> ', JSON.stringify(data?.launchesPast?.length, null, 2));

  const GetLaunches = async () => {
    OFFSET = OFFSET + LIMIT;
    await fetchMore({
      variables: { limit: LIMIT, offset: OFFSET },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        if (fetchMoreResult?.launchesPast?.length < LIMIT)
          setDATA(p => ({ ...p, IsLaunchesEnd: true }));
        return fetchMoreResult;
      },
    });
  };

  return (
    <Modal
      visible={visible}
      onRequestClose={onClose}
      presentationStyle={'pageSheet'}
      animationType={'slide'}>
      <View style={styles.ModalContainer}>
        <StatusBar barStyle={'light-content'} animated={true} />
        <View style={styles.Header}>
          <View style={styles.closeButton} />
          <RNText style={styles.title}>{'Launches Pasts'}</RNText>
          <TouchableOpacity style={styles.closeButton}>
            <Image
              source={Images.Emoji}
              resizeMode={'contain'}
              style={RNStyles.image100}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.Content}>
          <FlatList
            data={data?.launchesPast}
            keyExtractor={(v, i) => String(i)}
            renderItem={({ item }) => <RenderLaunches item={item} />}
            ListFooterComponent={
              DATA.IsLaunchesEnd ? null : <RNPagginationLoader />
            }
            onEndReached={() => (DATA.IsLaunchesEnd ? null : GetLaunches())}
            onEndReachedThreshold={1}
          />
        </View>
      </View>
    </Modal>
  );
};

const RenderLaunches = ({ item }) => {
  // Remember color value for specific item...
  // color will not change even component is rendered...
  const backgroundColor = React.useMemo(() => Functions.RandomColor(), []);
  return (
    <View style={[styles.RenderLaunches, { backgroundColor: backgroundColor }]}>
      <RNText>{item?.mission_name}</RNText>
    </View>
  );
};

const styles = StyleSheet.create({
  ModalContainer: {
    flex: 1,
  },
  Header: {
    ...RNStyles.flexRowBetween,
    paddingHorizontal: wp(4),
    paddingVertical: hp(1.5),
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontFamily: FontFamily.Bold,
    fontSize: FontSize.font20,
  },
  closeButton: {
    ...RNStyles.center,
    width: wp(8),
    height: wp(8),
  },
  Content: {
    flex: 1,
  },
  RenderLaunches: {
    ...RNStyles.center,
    paddingVertical: hp(10),
  },
});

export default launchesPast;
