import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { Colors, FontFamily, FontSize, hp, wp } from '../Constants';
const RNInput = React.forwardRef((props, ref) => {
  const {
    placeholder,
    placeholderTextColor,
    style,
    onChangeText,
    onSubmitEditing,
    onEndEditing,
    onFocus,
    onBlur,
    keyboardType,
    returnKeyType,
    secureTextEntry,
    value,
    textAlign,
    maxLength,
    onChange,
    onKeyPress,
  } = props;
  return (
    <TextInput
      ref={ref}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor ?? Colors.ACACAC}
      style={[styles.input, style]}
      onKeyPress={onKeyPress}
      onChange={onChange}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
      onEndEditing={onEndEditing}
      onFocus={onFocus}
      onBlur={onBlur}
      keyboardType={keyboardType || 'default'}
      returnKeyType={returnKeyType || 'next'}
      secureTextEntry={secureTextEntry || false}
      value={value}
      textAlign={textAlign || 'left'}
      textAlignVertical={'center'}
      autoCorrect={false}
      autoCapitalize={false}
      maxLength={maxLength}
    />
  );
});
const styles = StyleSheet.create({
  input: {
    paddingHorizontal: wp(3),
    paddingVertical: hp(1),
    fontSize: FontSize.font16,
    fontFamily: FontFamily.Regular,
    color: Colors.Black,
  },
});
export default RNInput;
