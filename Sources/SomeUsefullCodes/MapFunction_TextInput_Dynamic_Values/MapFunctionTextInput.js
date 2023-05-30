import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const {width, height} = Dimensions.get('screen');

export const routeHome = 'Home';

const Home = () => {
  const [TextInputs, setTextInputs] = useState([
    {title: 'First Name', holder: 'Enter First Name'},
    {title: 'Last Name', holder: 'Enter Last Name'},
    {title: 'Email', holder: 'Enter Email'},
    {title: 'Phone', holder: 'Enter Phone'},
  ]);

  const [SavedData, setSavedData] = useState(new Array(TextInputs.length));

  const Saving = (val, index) => {
    const inputData = [...SavedData];
    inputData[index] = val;
    setSavedData(inputData);
  };

  return (
    <SafeAreaView style={styles.Box}>
      <ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' && 'position'}
          keyboardVerticalOffset={Platform.OS == 'ios' && width * 0.15}>
          {TextInputs.map((item, index) => (
            <View key={index} style={styles.inputMainView}>
              <Text style={styles.Title}>{item.title}</Text>
              <TextInput
                // Aya thi baki.............
                // ref={}
                placeholder={item.holder}
                onChangeText={val => Saving(val.trim(), index)}
                returnKeyType={index == TextInputs.length - 1 ? 'go' : 'next'}
                style={styles.Input}
              />
            </View>
          ))}
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  Box: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputMainView: {
    width: width * 0.95,
    alignSelf: 'center',
    marginTop: width * 0.03,
  },
  Title: {
    marginBottom: width * 0.02,
    fontSize: normalize(16),
    fontFamily: 'Ambit-SemiBold',
  },
  Input: {
    borderWidth: 0.5,
    width: '90%',
    alignSelf: 'center',
    height: width * 0.1,
    paddingLeft: width * 0.03,
    borderRadius: width * 0.015,
  },
});
