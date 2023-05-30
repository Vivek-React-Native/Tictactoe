import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import { Colors } from '../Assets';
import Animated from 'react-native-reanimated';
import { hp, normalize, wp } from '../ResponsiveNess/ResponsiveNess';

const Header = props => {
  const { borderRadius } = props;

  return (
    <Animated.View style={[styles.Box, { borderTopLeftRadius: borderRadius }]}>
      <TouchableOpacity
        onPress={() => props.navigation.openDrawer()}
        style={styles.MenuIcon}>
        <Image
          source={require('../Assets/Icons/Menu.png')}
          resizeMode="contain"
          style={{ width: '100%', height: '100%' }}
        />
      </TouchableOpacity>

      <View style={{ flex: 1 }}>
        <Text style={styles.Name}>{props.Name}</Text>
      </View>

      <TouchableOpacity
        onPress={() => props.navigation.openDrawer()}
        style={styles.MenuIcon}>
        <Image
          source={require('../Assets/Icons/Bell.png')}
          resizeMode="contain"
          style={{ width: '100%', height: '100%' }}
        />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Header;

const styles = StyleSheet.create({
  Box: {
    flexDirection: 'row',
    backgroundColor: Colors.Primary,
    height: Platform.OS == 'ios' ? hp(12) : hp(9),
    paddingTop: Platform.OS == 'ios' ? hp(4) : 0,
    alignItems: 'center',
    paddingHorizontal: wp(4),
    justifyContent: 'center',
  },
  MenuIcon: {
    width: wp(8),
    height: wp(8),
  },
  Name: {
    fontSize: normalize(20),
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
  },
});
