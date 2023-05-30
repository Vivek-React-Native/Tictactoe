import React from 'react';
import { Text } from 'react-native';
import { normalize } from '../ResponsiveNess/ResponsiveNess';

const FontText = props => {
  const {
    title,
    style,
    color,
    fontSize,
    fontFamily,
    lines,
    opacity,
    pTop,
    pLeft,
    pRight,
    pBottom,
    onPress,
    textAlign,
    textDecoration,
    onLayout,
    mTop,
    mLeft,
    mRight,
    mBottom,
  } = props;

  const textStyle = {
    fontSize,
    fontFamily,
    color,
    opacity,
    paddingTop: pTop,
    paddingLeft: pLeft,
    paddingRight: pRight,
    paddingBottom: pBottom,
    marginTop: mTop,
    marginLeft: mLeft,
    marginRight: mRight,
    marginBottom: mBottom,
    textAlign,
    textDecorationLine: textDecoration,
    textDecorationColor: textDecoration ? color : null,
    textDecorationStyle: textDecoration ? 'solid' : null,
  };

  return (
    <Text
      allowFontScaling={false}
      numberOfLines={lines}
      onLayout={onLayout}
      onPress={onPress}
      style={[textStyle, style]}>
      {title}
    </Text>
  );
};

FontText.defaultProps = {
  fontSize: normalize(14),
  fontFamily: null,
  color: '#000000',
  lines: 0,
  opacity: 1,
  textAlign: 'left',
  pTop: 0,
  pLeft: 0,
  pRight: 0,
  pBottom: 0,
  mTop: 0,
  mLeft: 0,
  mRight: 0,
  mBottom: 0,
  textDecoration: null,
};

export default FontText;
