import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RNStyles } from '../../Common';

const Register = () => {
  return (
    <View style={styles.Container}>
      <Text>Register</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    ...RNStyles.flexCenter,
  },
});

export default Register;
