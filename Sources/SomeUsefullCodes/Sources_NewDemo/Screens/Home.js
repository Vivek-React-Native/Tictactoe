import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { Button, DropDown, FontText, Header } from '../Common';
import HomeModal from './HomeModal';

export const routeHome = 'Home';

const Home = props => {
  const { animatedStyle, borderradius } = props;

  const [OpenModal, setOpenModal] = useState(false);

  return (
    <Animated.View style={[styles.Box, animatedStyle]}>
      <Header {...props} Name={'Home'} borderRadius={borderradius} />

      <Button title={'Click'} onPress={() => setOpenModal(true)} />

      <HomeModal
        {...props}
        open={OpenModal}
        close={() => setOpenModal(!OpenModal)}
      />

      <FontText title={'Hello World'} />
    </Animated.View>
  );
};

export default Home;

const styles = StyleSheet.create({
  Box: {
    flex: 1,
    backgroundColor: '#fff',
    shadowOffset: {
      width: -6,
      height: 0,
    },
    shadowColor: '#00000015',
    shadowOpacity: 1,
    shadowRadius: 40,
    elevation: 20,
  },
});
