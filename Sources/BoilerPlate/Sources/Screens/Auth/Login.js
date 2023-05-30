import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RNStyles } from '../../Common';

const Login = () => {
  return (
    <View style={styles.Container}>
      <Text>Login</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    ...RNStyles.flexCenter,
  },
});

export default Login;
