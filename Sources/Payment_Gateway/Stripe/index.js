import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useStripe } from '@stripe/stripe-react-native';
import { hp, isIOS } from '../../Constants';
import { DefaultStripe, StripeCardFeild } from './Stripe_Components';
import { StripeInitialize } from './Stripe_Helper';

const Stripe = ({ navigation }) => {
  const { initPaymentSheet } = useStripe();

  useEffect(() => {
    // First of all, open vs code with Server.js file and create server with the command of... node Server.js...
    // Then run this app and test it
    StripeInitialize(initPaymentSheet);
  }, []);

  return (
    <View style={styles.Container}>
      <DefaultStripe />

      <StripeCardFeild />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingTop: isIOS ? hp(5) : hp(2),
    paddingBottom: hp(3),
  },
});

export default Stripe;
