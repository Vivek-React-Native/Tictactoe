import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  CardField,
  CardForm,
  useConfirmPayment,
} from '@stripe/stripe-react-native';
import { RNButton, RNLoader } from '../../../Common';
import { Colors, hp, isIOS, wp } from '../../../Constants';
import { Functions } from '../../../Utils';
import { FetchPayment } from '../Stripe_Helper';

const StripeCardFeild = () => {
  const [DATA, setDATA] = useState({ IsLoading: false, IsPaid: false });
  const { confirmPayment } = useConfirmPayment();
  // console.log('DATA -> ', JSON.stringify(DATA, null, 2));

  const onCheckOut = async () => {
    setDATA(p => ({ ...p, IsLoading: true }));
    try {
      const { paymentIntent } = await FetchPayment();
      const { error } = await confirmPayment(paymentIntent, {
        paymentMethodType: 'Card',
      });
      setDATA(p => ({ ...p, IsLoading: false }));
      if (error) {
        Functions.ALERT({
          Title: 'Error',
          Text: `Error code: ${error.code} ${error.message}`,
        });
      } else {
        setDATA(p => ({ ...p, IsPaid: true }));
        Functions.ALERT({
          Title: 'Success',
          Text: `Your payment is successful`,
        });
      }
    } catch (e) {
      setDATA(p => ({ ...p, IsLoading: false }));
      console.log('Error onCheckOut -> ', JSON.stringify(e, null, 2));
    }
  };

  return !DATA.IsPaid ? (
    <View style={styles.Container}>
      <RNLoader visible={DATA?.IsLoading} />
      <CardField
        postalCodeEnabled={false}
        cardStyle={styles.CardFieldCardStyle}
        style={styles.CardFieldStyle}
        onCardChange={cd => setDATA(p => ({ ...p, ...cd }))}
      />
      {isIOS && (
        <CardForm
          onFormComplete={d =>
            console.log('onFormComplete -> ', JSON.stringify(d, null, 2))
          }
          style={styles.CardForm}
        />
      )}
      <RNButton
        title={'Payment'}
        onPress={onCheckOut}
        disable={DATA?.IsLoading}
      />
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginVertical: hp(5),
  },
  CardFieldCardStyle: {
    backgroundColor: Colors.White,
    textColor: Colors.Black,
    borderWidth: 1,
  },
  CardFieldStyle: {
    width: wp(90),
    height: hp(6),
    alignSelf: 'center',
    marginVertical: hp(1),
  },
  CardForm: {
    height: hp(20),
    width: wp(90),
    alignSelf: 'center',
    marginTop: hp(2),
  },
});

export default StripeCardFeild;
