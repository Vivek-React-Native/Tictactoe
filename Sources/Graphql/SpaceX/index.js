import React, { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { useQuery } from '@apollo/client';
import { Colors, hp } from '../../Constants';
import {
  RNLoader,
  RNText,
  RNStyles,
  RNPagginationLoader,
  RNButton,
} from '../../Common';
import { CapsulesQuery } from '../Query';
import { Functions } from '../../Utils';
import LaunchesPast from './LaunchesPast';

const LIMIT = 5;
let OFFSET = 0;

const SpaceX = () => {
  // for setting up pagination
  // you need to add typePolicies in client variable. Which is used for ApolloProvider Tag for root of the app
  const { data, loading, fetchMore } = useQuery(CapsulesQuery, {
    variables: { limit: LIMIT, offset: OFFSET },
  });

  const [DATA, setDATA] = useState({
    IsCapsulesEnd: false,
    OpenLaunchPast: false,
  });

  const GetCapsulList = async () => {
    if (!DATA.IsCapsulesEnd) {
      OFFSET = OFFSET + LIMIT;
      await fetchMore({
        variables: { limit: LIMIT, offset: OFFSET },
        updateQuery: (prev, { fetchMoreResult }) => {
          console.log('length -> ', fetchMoreResult?.capsules?.length);
          if (!fetchMoreResult) return prev;
          if (fetchMoreResult?.capsules?.length < LIMIT)
            setDATA(p => ({ ...p, IsCapsulesEnd: true }));
          return fetchMoreResult;
        },
      });
    }
  };

  return (
    <View style={styles.Conatiner}>
      <RNLoader visible={loading} />
      <FlatList
        data={data?.capsules}
        keyExtractor={(v, i) => String(i)}
        renderItem={({ item }) => <RenderCapsules item={item} />}
        ListFooterComponent={
          DATA.IsCapsulesEnd ? null : !loading && <RNPagginationLoader />
        }
        onEndReached={() => (DATA.IsCapsulesEnd ? null : GetCapsulList())}
        onEndReachedThreshold={0.2}
      />
      <RNButton
        title={'Launches Past'}
        onPress={() => setDATA(p => ({ ...p, OpenLaunchPast: true }))}
      />
      <LaunchesPast
        visible={DATA.OpenLaunchPast}
        onClose={() => setDATA(p => ({ ...p, OpenLaunchPast: false }))}
      />
    </View>
  );
};

const RenderCapsules = ({ item }) => {
  const backgroundColor = React.useMemo(() => Functions.RandomColor(), []);
  return (
    <TouchableOpacity
      style={[styles.item, { backgroundColor: backgroundColor }]}>
      <RNText>{item.id}</RNText>
      <RNText>{item.status}</RNText>
      <RNText>{item.type}</RNText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Conatiner: {
    flex: 1,
    backgroundColor: Colors.White,
    paddingVertical: 20,
    paddingTop: 40,
  },
  item: {
    ...RNStyles.flexRowBetween,
    paddingVertical: 16,
    paddingHorizontal: 20,
    paddingRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.CCCCCC,
    marginHorizontal: 15,
    height: hp(90) / 5,
  },
});

export default SpaceX;
