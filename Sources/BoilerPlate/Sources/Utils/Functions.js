import { Alert, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const ALERT = ({ Title, Text, Buttons }) => Alert.alert(Title, Text, Buttons);
const OpenUrl = url => Linking.openURL(url);
const AddCharacter = ({ text, after, character }) => {
  if (!text) false;
  after = after || 4;
  var v = text.replace(/[^\dA-Z]/g, ''),
    reg = new RegExp('.{' + after + '}', 'i'); // i for only one and g for globally...
  return v.replace(reg, function (a) {
    return a + character;
  });
};
const setUser = async data =>
  await AsyncStorage.setItem('user', JSON.stringify(data));
const getUser = async () => {
  const value = await AsyncStorage.getItem('user');
  return JSON.parse(value);
};
const setAppData = async data => {
  const previousValue = await getAppData();
  if (previousValue) {
    await AsyncStorage.setItem(
      'appdata',
      JSON.stringify({ ...previousValue, ...data }),
    );
  } else {
    await AsyncStorage.setItem('appdata', JSON.stringify(data));
  }
};
const getAppData = async () => {
  const value = await AsyncStorage.getItem('appdata');
  return JSON.parse(value);
};
const ToPercentage = ({ value, total }) => {
  const Percentage = Math.floor((value * 100) / total);
  return Percentage > 100 ? 100 : Percentage;
};
export default {
  ALERT,
  OpenUrl,
  AddCharacter,
  setUser,
  getUser,
  setAppData,
  getAppData,
  ToPercentage,
};
