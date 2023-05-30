import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { RNStyles } from '../../Common';
import { hp, Images } from '../../Constants';

const ImageStrechAnimation = () => {
  return (
    <ScrollView>
      <View style={styles.Container}>
        <Image
          source={Images.img_Bike}
          resizeMode={'cover'}
          style={styles.HeaderImage}
        />

        {new Array(100).map((v, i) => (
          <Text style={{ color: '#000' }}>Hello</Text>
        ))}
      </View>
    </ScrollView>
  );
};

export default ImageStrechAnimation;

const styles = StyleSheet.create({
  Container: {
    ...RNStyles.container,
  },
  HeaderImage: {
    width: '100%',
    height: hp(40),
  },
});
