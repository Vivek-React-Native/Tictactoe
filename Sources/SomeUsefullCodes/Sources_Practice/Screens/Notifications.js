import React, { useEffect } from 'react';
import {
  FlatList,
  AppState,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { hp, normalize, wp } from '../ResponsiveNess/ResponsiveNess';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from 'react-native-push-notification';

export const routeNotifications = 'Notifications';

const Notifications = props => {
  // console.log(AppState.currentState);

  const Data = [
    { state: 'United State', city: 'New York' },
    { state: 'Australia', city: 'Sydney' },
    { state: 'Germany', city: 'Berlin' },
    { state: 'France', city: 'Paris' },
  ];

  const AnroidNotification = (item, index) => {
    PushNotification.localNotification({
      channelId: 'Demo Channel',
      title: item.state,
      message: `you HelloHelloHelloHelloHelloHelloHello on ${item.city}`,
      bigText: `The ${item.state} under ${item.city} is best place for hangout`,
      id: index,
      vibrate: true,
      playSound: true,
      soundName: 'default',
    });
  };

  const IOSNotification = (item, index) => {
    PushNotificationIOS.addNotificationRequest({
      id: 'test',
      title: 'deep link',
      subtitle: 'Open notifications',
      body: 'demo://app/notifications',
      category: 'test',
      threadId: 'thread-id',
      fireDate: new Date(new Date().valueOf() + 2000),
      repeats: true,
    });
  };

  return (
    <View style={styles.Box}>
      <FlatList
        data={Data}
        contentContainerStyle={{ marginTop: 150 }}
        keyExtractor={(value, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => {
              AnroidNotification(item, index);
              // IOSNotification(item, index);
            }}
            activeOpacity={0.3}
            style={styles.DataMainView}>
            <Text style={styles.state}>{item.state}</Text>
            <Text style={styles.city}>{item.city}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  Box: {
    flex: 1,
    backgroundColor: '#fff',
  },
  DataMainView: {
    borderWidth: 1,
    width: wp(90),
    alignSelf: 'center',
    marginVertical: wp(2),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: hp(12),
    borderRadius: wp(5),
  },
  state: {
    fontSize: normalize(22),
    fontWeight: 'bold',
  },
  city: {
    fontSize: normalize(18),
  },
});
