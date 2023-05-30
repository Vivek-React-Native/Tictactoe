import React, { useState } from 'react';
import { useStripe } from '@stripe/stripe-react-native';
import { RNButton } from '../../../Common';
import { Functions } from '../../../Utils';

const DefaultStripe = () => {
  const { presentPaymentSheet } = useStripe();
  const [IsPaid, setIsPaid] = useState(false);

  const onCheckout = async () => {
    const { error } = await presentPaymentSheet();
    if (error) {
      Functions.ALERT({
        Title: 'Error',
        Text: `Error Code: ${error.code} ${error.message}`,
      });
    } else {
      setIsPaid(true);
      Functions.ALERT({
        Title: 'Success',
        Text: `Your payment is successful`,
      });
    }
  };

  return !IsPaid ? (
    <RNButton
      title={'Open Default Stripe Payment Sheet'}
      onPress={onCheckout}
    />
  ) : null;
};

export default DefaultStripe;
