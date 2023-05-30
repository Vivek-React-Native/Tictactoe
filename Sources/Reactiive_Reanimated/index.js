import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { RNR_1, RNR_2, RNR_3, RNR_4, RNR_5, RNR_6, RNR_7 } from './Reanimated';
import { RNStyles, RNText } from '../Common';
import { Colors } from '../Constants';

const Stack = createStackNavigator();

const ReactiiveReanimted = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name="screens" component={Screens} />
      {ScreensData.map((v, i) => (
        <Stack.Screen key={i} name={v.name} component={v.component} />
      ))}
    </Stack.Navigator>
  );
};

const Screens = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.Container}>
      <FlatList
        data={ScreensData}
        keyExtractor={(v, index) => String(index)}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.renderItemContainer}
            onPress={() => navigation.navigate(item.name)}>
            <RNText style={styles.Text}>{item.name}</RNText>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    ...RNStyles.container,
  },
  renderItemContainer: {
    borderWidth: 1,
    borderColor: Colors.ACACAC,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowColor: Colors.Black,
    shadowOpacity: 0.2,
    shadowRadius: 10,
    backgroundColor: Colors.White,
    elevation: 7,
  },
});

const ScreensData = [
  {
    name: 'Episode 1',
    component: RNR_1,
  },
  {
    name: 'Episode 2',
    component: RNR_2,
  },
  {
    name: 'Episode 3',
    component: RNR_3,
  },
  {
    name: 'Episode 4',
    component: RNR_4,
  },
  {
    name: 'Episode 5',
    component: RNR_5,
  },
  {
    name: 'Episode 6',
    component: RNR_6,
  },
  {
    name: 'Episode 7',
    component: RNR_7,
  },
];

export default ReactiiveReanimted;
