import { initStripe } from '@stripe/stripe-react-native';
import { Platform } from 'react-native';

export const Published_Key =
  'pk_test_51M6XmvSASAE8sxtpdCP1dtoyrkVM8gz7XWOPp04ExKorgJvj1tN0C4dR8DmzwJkyOenXJiP9r90xacnXjoOVjbKP00yjOGh5Nb';
const BASE_URL = Platform.OS === 'ios' ? 'localhost' : '10.0.2.2';
const API_URL = `http://${BASE_URL}:4141`;
const defaultData = {
  companyName: 'Codezee Solutions P.V.T L.T.D',
  name: 'Vivek Ghodadra',
  email: 'vivek.codezee@gmail.com',
  phone: '0123456789',
  line1: 'Mahek icon',
  line2: 'Sumul dairy',
  address: {
    city: 'surat',
    country: 'india',
    postalCode: '395004',
    state: 'gujarat',
  },
};

const StripeInitialize = async initPayment => {
  // For the following, you don't need to use StripeProvider to wrap all code of app...
  // await initStripe({
  //   publishableKey: Published_Key,
  // });

  // Getting confidential data's from backend...
  const { paymentIntent, ephemeralKey, customer } = await FetchPayment();
  await initPayment({
    merchantDisplayName: defaultData.companyName,
    customerId: customer,
    customerEphemeralKeySecret: ephemeralKey,
    paymentIntentClientSecret: paymentIntent,
    // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
    // methods that complete payment after a delay, like SEPA Debit and Sofort.
    allowsDelayedPaymentMethods: true,
    googlePay: {
      merchantCountryCode: 'US',
      testEnv: true, // use test environment
    },
    defaultBillingDetails: {
      name: defaultData.name,
      email: defaultData.email,
      phone: defaultData.phone,
      line1: defaultData.line1,
      line2: defaultData.line2,
      address: defaultData.address,
    },
    defaultShippingDetails: {
      /** The customer's full name. */
      name: defaultData.name,
      /** The customer's address. */
      address: defaultData.address,
      /** The customer's phone number. */
      phone: defaultData.phone,
      /** Whether or not the checkbox is initally selected. Defaults to false.
       *  Note: The checkbox is displayed below the other fields when additionalFields.checkboxLabel is set.
       *  */
      isCheckboxSelected: true,
    },
  });
  console.log('Stripe Payment Initialized...');
};

const FetchPayment = async () => {
  const response = await fetch(`${API_URL}/payment-sheet`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const { paymentIntent, ephemeralKey, customer } = await response.json();
  return {
    paymentIntent,
    ephemeralKey,
    customer,
  };
};

export { StripeInitialize, FetchPayment };
