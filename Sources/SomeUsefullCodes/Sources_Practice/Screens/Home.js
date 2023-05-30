import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Button, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Proccess_Data, SuccessMovie} from '../Redux/Actions/HomeActions';

export const routeHome = 'Home';

const Home = () => {
  const {Data, Process, Success} = useSelector(state => state.HomeReducer);
  const dispatch = useDispatch();

  // const {data, success} = useSelector(state => state.HomeReducer);

  // useEffect(() => {
  //   setTimeout(() => {
  //     dispatch(SuccessMovie());
  //   }, 3000);
  // }, []);

  // return (
  //   <View style={styles.Box}>
  //     {success ? (
  //       <Text>Hello World</Text>
  //     ) : (
  //       <ActivityIndicator size={'large'} color={'#ff0000'} />
  //     )}
  //   </View>
  // );

  useEffect(() => {
    dispatch(Proccess_Data());
  }, []);

  return (
    <View style={styles.Box}>
      {Process ? (
        <ActivityIndicator size={'large'} color={'#ff0000'} />
      ) : (
        <Text>Hello world</Text>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  Box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
