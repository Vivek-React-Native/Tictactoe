import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Colors } from '../Constants';
import EAStyles from './RNStyles';
const RNImageLoader = ({ visible, ContainerStyle, size, color }) => {
  return visible ? (
    <View style={[EAStyles.imageLoading, ContainerStyle]}>
      <ActivityIndicator size={size ?? 'large'} color={color ?? Colors.Black} />
    </View>
  ) : null;
};
export default RNImageLoader;
