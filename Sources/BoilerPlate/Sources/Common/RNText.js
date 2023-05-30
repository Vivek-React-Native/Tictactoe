import React from 'react';
import { Text } from 'react-native';
import { Colors, FontFamily, FontSize } from '../Constants';
const RNText = ({
  children,
  style,
  numOfLines,
  size,
  family,
  weight,
  align,
  color,
  pTop,
  pBottom,
  pLeft,
  pRight,
  pHorizontal,
  pVertical,
  spacing,
  lineHeight,
  onPress,
}) => {
  const TextStyles = {
    color: color ?? Colors.Black,
    fontSize: size ?? FontSize.font16,
    fontFamily: family ?? FontFamily.Regular,
    fontWeight: weight,
    textAlign: align ?? 'left',
    paddingTop: pTop,
    paddingLeft: pLeft,
    paddingRight: pRight,
    paddingBottom: pBottom,
    paddingHorizontal: pHorizontal,
    paddingVertical: pVertical,
    letterSpacing: spacing,
    lineHeight: lineHeight ?? null,
  };
  return (
    <Text
      onPress={onPress}
      numberOfLines={numOfLines}
      style={[TextStyles, style]}>
      {children}
    </Text>
  );
};
export default RNText;
