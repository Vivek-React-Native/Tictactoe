import React, {useEffect, useRef, useState} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import auth, {firebase} from '@react-native-firebase/auth';
import {hp, normalize, wp} from '../ResponsiveNess/ResponsiveNess';
import {routeSignUp} from './SignUp';
import {routeHome} from './Home';

export const routeLogIn = 'Log In';

const LogIn = props => {
  const [DATA, setDATA] = useState({email: '', password: '', phone: ''});
  const [Confirm, setConfirm] = useState(null);
  const [Num, setNum] = useState(null);

  const Password = useRef();

  // useEffect(() => {
  //   let user = firebase.auth().currentUser.uid;
  //   if (user) {
  //     props.navigation.navigate(routeHome);
  //   } else {
  //     return null;
  //   }
  // }, []);

  const signIn = async data => {
    try {
      const authData = await auth().signInWithEmailAndPassword(
        data.email,
        data.password,
      );

      if (authData && authData.user) {
        Alert.alert('Success ✅', 'Authenticated successfully');
      } else {
        alert('Error');
      }

      console.log(authData);
    } catch (error) {
      alert(error);
    }
  };

  const VerifyPhoneNumber = async number => {
    try {
      const authData = await auth().signInWithPhoneNumber('+91' + number);
      console.log(authData);

      setConfirm(authData);
    } catch (error) {
      console.log(error);
    }
  };

  const VerifyOTP = async () => {
    try {
      const data = await Confirm.confirm(Num);
      // console.log(data.additionalUserInfo);
      console.log(data.user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.Box}>
      <ScrollView>
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
            returnKeyType="next"
            onChangeText={val => setDATA({...DATA, password: val})}
          />
        </View>

        <View style={styles.mainView}>
          <Text style={styles.title}>Phone Number</Text>
          <TextInput
            placeholder="Enter Phone Number"
            style={styles.input}
            returnKeyType="done"
            maxLength={10}
            keyboardType="numeric"
            onChangeText={val => setDATA({...DATA, phone: val})}
          />
        </View>

        <View style={styles.mainView}>
          <Text style={styles.title}>OTP Number</Text>
          <TextInput
            placeholder="Enter OTP Number"
            style={styles.input}
            returnKeyType="done"
            maxLength={6}
            keyboardType="numeric"
            onChangeText={val => setNum(val)}
          />
        </View>

        <TouchableOpacity
          style={[styles.btn, {backgroundColor: '#00f'}]}
          onPress={() => signIn(DATA)}>
          <Text style={[styles.title, {color: '#fff', marginBottom: 0}]}>
            Log In
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => props.navigation.navigate(routeSignUp)}>
          <Text style={[styles.title, {color: '#fff', marginBottom: 0}]}>
            Sign Up
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btn, {backgroundColor: '#f5ff'}]}
          onPress={() => VerifyPhoneNumber(DATA.phone)}>
          <Text style={[styles.title, {color: '#fff', marginBottom: 0}]}>
            Phone Number
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btn, {backgroundColor: '#00f'}]}
          onPress={() => VerifyOTP()}>
          <Text style={[styles.title, {color: '#fff', marginBottom: 0}]}>
            OTP
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LogIn;

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
