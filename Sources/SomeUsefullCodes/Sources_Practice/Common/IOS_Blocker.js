import React from 'react';
import { Platform, View } from 'react-native';
import { hp } from '../ResponsiveNess/ResponsiveNess';

const IOS_Blocker = () => {
  return (
    <View
      style={{
        height: Platform.OS == 'ios' && hp(4),
      }}
    />
  );
};

export default IOS_Blocker;
