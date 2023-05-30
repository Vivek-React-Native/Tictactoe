import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNButton, RNStyles } from '../../Common';
import RazorpayCheckout from 'react-native-razorpay';

const Razorpay_Key = 'rzp_test_b4XyXrPPdlKZM0';

const Razorpay = () => {
  const onPayment = async () => {
    const options = {
      description: 'Nike 50 rs shoes for men',
      image:
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      currency: 'INR',
      key: Razorpay_Key, // Your api key
      amount: '5000',
      name: 'Nike shoes for men',
    };
    try {
      const Response = await RazorpayCheckout.open(options);
      console.log('Razorpay payment -> ', JSON.stringify(Response, null, 2));
    } catch (e) {
      console.log('Error Razorpay payment -> ', JSON.stringify(e, null, 2));
    }
  };

  return (
    <View style={styles.Container}>
      <RNButton title={'Razorpay'} onPress={onPayment} />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    ...RNStyles.container,
    ...RNStyles.center,
  },
});

export default Razorpay;
