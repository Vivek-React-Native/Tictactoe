import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {hp, normalize, wp} from '../ResponsiveNess/ResponsiveNess';
import {routeLogIn} from './LogIn';

export const routeSignUp = 'SignUp';

const SignUp = props => {
  const [DATA, setDATA] = useState({email: '', password: ''});

  const Password = useRef();

  const createUser = async data => {
    try {
      const authData = await auth().createUserWithEmailAndPassword(
        data.email,
        data.password,
      );

      if (authData) props.navigation.navigate(routeLogIn);

      console.log(authData);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <SafeAreaView style={styles.Box}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => props.navigation.goBack()}
      />

      <View style={styles.mainView}>
        <Text style={styles.title}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          returnKeyType="next"
          onSubmitEditing={() => Password.current.focus()}
          onChangeText={val => setDATA({...DATA, email: val})}
        />
      </View>

      <View style={styles.mainView}>
        <Text style={styles.title}>Password</Text>
        <TextInput
          ref={Password}
          placeholder="Enter Password"
          style={styles.input}
          returnKeyType="done"
          onChangeText={val => setDATA({...DATA, password: val})}
        />
      </View>

      <TouchableOpacity style={styles.btn} onPress={() => createUser(DATA)}>
        <Text style={[styles.title, {color: '#fff', marginBottom: 0}]}>
          Create Account
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  Box: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainView: {
    width: wp(90),
    alignSelf: 'center',
    marginTop: hp(2),
  },
  title: {
    color: '#000',
    fontSize: normalize(18),
    fontFamily: 'Ambit-SemiBoldItalic',
    marginBottom: hp(1),
  },
  input: {
    borderWidth: 1,
    borderRadius: wp(3),
    paddingHorizontal: wp(3),
    paddingVertical: wp(4),
    fontSize: normalize(16),
  },
  btn: {
    width: wp(90),
    height: hp(7),
    alignSelf: 'center',
    borderRadius: wp(5),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f00f00',
    marginTop: hp(3),
  },
});
