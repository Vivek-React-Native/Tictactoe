// Notification will fire on specific date and time....

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Button,
  useColorScheme,
} from 'react-native';
import PushNotification from 'react-native-push-notification';
import { Colors, normalize } from '../Constants';
import DatePicker from 'react-native-date-picker';

const { width, height } = Dimensions.get('window');

const NotificationOnDate = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');

  const GetNotification = () => {
    console.log('Time Stamp......', date);

    PushNotification.localNotificationSchedule({
      channelId: 'Notification',
      message: text,
      date: date,
      allowWhileIdle: false, // (optional) set notification to work while on doze, default: false
    });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.Box}>
        <KeyboardAvoidingView
          style={styles.Box}
          behavior={Platform.OS == 'ios' ? 'padding' : null}>
          <TextInput
            placeholder={'Enter Your Query'}
            placeholderTextColor={Colors.Black}
            style={styles.input}
            onChangeText={val => setText(val)}
          />

          <DatePicker
            modal
            open={open}
            date={date}
            mode={'time'}
            textColor={useColorScheme() == 'dark' ? Colors.White : Colors.Black}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />

          <Button title="Open" onPress={() => setOpen(true)} />

          <TouchableOpacity
            style={styles.Button}
            onPress={() => GetNotification()}>
            <Text style={styles.ButtonText}>{'Submit'}</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default NotificationOnDate;

const styles = StyleSheet.create({
  Box: {
    flex: 1,
    backgroundColor: Colors.White,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.Black,
    width: width * 0.9,
    height: height * 0.05,
    paddingHorizontal: width * 0.03,
    borderRadius: width * 0.02,
    color: '#000',
  },
  Button: {
    paddingHorizontal: 50,
    paddingVertical: 20,
    backgroundColor: Colors.Red,
  },
  ButtonText: {
    color: Colors.White,
    fontSize: normalize(20),
    fontWeight: 'bold',
  },
});
