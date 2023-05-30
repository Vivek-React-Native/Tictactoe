import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { hp, normalize, wp } from '../ResponsiveNess/ResponsiveNess';

const Button = props => {
  const { title, containerStyle, icon, textStyle, onPress } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.BtnView,
        containerStyle,
        {
          flexDirection: icon ? 'row' : null,
        },
      ]}>
      {icon && (
        <Image source={icon} resizeMode="contain" style={styles.image} />
      )}
      <Text style={[styles.Text, textStyle, {}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  BtnView: {
    backgroundColor: '#fff',
    width: wp(25),
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(5),
    shadowOffset: { width: 0, height: 4 },
    shadowColor: '#00000090',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 8,
    borderRadius: 7,
  },
  image: {
    width: wp(4),
    height: wp(4),
  },
  Text: {
    fontSize: normalize(14),
    color: '#000',
    fontWeight: '500',
  },
});

Button.defaultProps = {
  title: '',
  containerStyle: {},
  icon: null,
  textStyle: {},
  onPress: () => {},
};

export default Button;
