import React from 'react';
import {
  Text,
  FlatList,
  Pressable,
  Modal,
  View,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import { useLazyQuery, useQuery } from '@apollo/client';
import { Countries_Query, Country_Query } from '../Query';

export default function Countries({ code, visible, onClose }) {
  const { data: Countries } = useQuery(Countries_Query, {
    variables: { code: code },
  });
  const [GetCountry, { data: Country }] = useLazyQuery(Country_Query);

  console.log('Country -> ', JSON.stringify(Country?.country, null, 2));

  // const [GetCountry, { data }] = useLazyQuery(COUNTRY_QUERY);
  // const onPress = () => {
  //   GetCountry({ variables: { code: code } });
  // };

  const onItemPress = item => {
    GetCountry({ variables: { code: item?.code } });
  };

  return (
    <Modal
      animationType={'slide'}
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.container}>
          <TouchableWithoutFeedback
            onPress={() => console.log('Second Feedback pressed...')}>
            <View style={styles.modalView}>
              <FlatList
                data={Countries?.continent?.countries}
                keyExtractor={(v, index) => String(index)}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => onItemPress(item)}
                    style={styles.item}>
                    <Text style={styles.header}>{item?.name}</Text>
                  </TouchableOpacity>
                )}
              />
              <Pressable style={styles.button} onPress={onClose}>
                <Text style={styles.textStyle}>{'CLOSE'}</Text>
              </Pressable>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 25,
  },
  modalView: {
    height: '50%',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    paddingHorizontal: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
  item: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    paddingRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  button: {
    borderRadius: 10,
    paddingVertical: 10,
    elevation: 2,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
  },
});
