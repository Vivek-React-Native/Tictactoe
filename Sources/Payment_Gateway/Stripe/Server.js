const express = require('express');
const app = express();
const stripe = require('stripe')(
  'sk_test_51M6XmvSASAE8sxtpe1SeIXNi1CzBlvXskOm1yqc1HfZNiHwmit2y39F4dz1LVOfQrRPBQqTv2Lb0dBq7kqdvz4So00cA8unLX5',
);
app.use(express.json());
// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.

app.post('/payment-sheet', async (req, res) => {
  // Use an existing Customer ID if this is a returning customer.
  const customer = await stripe.customers.create();
  const ephemeralKey = await stripe.ephemeralKeys.create(
    { customer: customer.id },
    { apiVersion: '2022-11-15' },
  );
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1099,
    currency: 'eur',
    customer: customer.id,
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.json({
    paymentIntent: paymentIntent.client_secret,
    ephemeralKey: ephemeralKey.secret,
    customer: customer.id,
    publishableKey:
      'pk_test_51M6XmvSASAE8sxtpdCP1dtoyrkVM8gz7XWOPp04ExKorgJvj1tN0C4dR8DmzwJkyOenXJiP9r90xacnXjoOVjbKP00yjOGh5Nb',
  });
});

app.listen(8000, () => console.log(`Node server listening on port 8000!`));
