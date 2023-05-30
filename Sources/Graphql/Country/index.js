import React, { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Colors } from '../../Constants';
import { useQuery } from '@apollo/client';
import { RNLoader } from '../../Common';
import { Continent_Query } from '../Query';
import Countries from './Countries';

const Country = () => {
  const { data, loading } = useQuery(Continent_Query);

  const [DATA, setDATA] = useState({
    CountryCode: 'AF',
    IsCountryVisible: false,
  });

  return (
    <SafeAreaView style={styles.Container}>
      <RNLoader visible={loading} />
      <FlatList
        data={data?.continents}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              setDATA(p => ({
                ...p,
                CountryCode: item.code,
                IsCountryVisible: true,
              }));
            }}
            style={styles.item}>
            <Text style={styles.header}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      <Countries
        code={DATA.CountryCode}
        visible={DATA.IsCountryVisible}
        onClose={() => setDATA(p => ({ ...p, IsCountryVisible: false }))}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  item: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: 15,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Country;
