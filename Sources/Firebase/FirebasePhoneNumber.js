import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import auth from '@react-native-firebase/auth';

const FirebasePhoneNumber = () => {
  const [Input, setInput] = useState('');
  const SendOtp = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber('+91' + Input);
      console.log('confirmation -> ', JSON.stringify(confirmation, null, 2));
    } catch (e) {
      alert(e);
      console.log('Error -> ', JSON.stringify(e, null, 2));
    }
  };
  return (
    <View style={styles.Container}>
      <TextInput
        style={styles.Input}
        onChangeText={v => setInput(v)}
        keyboardType={'numeric'}
        maxLength={10}
      />
      <TouchableOpacity onPress={SendOtp} style={styles.SendOtp}>
        <Text>{'Send opt'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  Input: {
    borderWidth: 1,
    marginBottom: 10,
    width: '50%',
    paddingVertical: 10,
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  SendOtp: {
    backgroundColor: '#f00',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 15,
  },
});

export default FirebasePhoneNumber;
