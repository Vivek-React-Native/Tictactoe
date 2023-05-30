import { Alert, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
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
function GetDatesFromToday() {
  let StartDate = new Date();
  const EndDate = moment().endOf('month');
  const dateArray = [];
  while (StartDate <= EndDate) {
    dateArray.push(new Date(StartDate));
    StartDate = StartDate.addDays(1);
  }
  return dateArray;
}
const getDaysArray = (s = new Date()) => {
  const e = moment(s).endOf('month');
  for (var a = [], d = s; d <= new Date(e); d.setDate(d.getDate() + 1)) {
    a.push(new Date(d));
  }
  return a;
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
const RandomColor = () => {
  // Method 1
  // let color = '#';
  // const HEXs = '0123456789abcdef';
  // for (let x = 0; x < 6; x++) {
  //   const index = Math.floor(Math.random() * 16);
  //   const value = arrayOfColorFunctions[index];
  //   color += value;
  // }
  // return color;

  // Method 2
  const Color = Math.random().toString(16).slice(-6);
  return `#${Color}`;
};

function IsColorBright(color) {
  const hex = color.replace('#', '');
  const c_r = parseInt(hex.substr(0, 2), 16);
  const c_g = parseInt(hex.substr(2, 2), 16);
  const c_b = parseInt(hex.substr(4, 2), 16);
  const brightness = (c_r * 299 + c_g * 587 + c_b * 114) / 1000;
  return brightness > 155;
}
export default {
  AddCharacter,
  setUser,
  getUser,
  setAppData,
  getAppData,
  getDaysArray,
  ToPercentage,
  OpenUrl,
  ALERT,
  RandomColor,
  IsColorBright,
};
