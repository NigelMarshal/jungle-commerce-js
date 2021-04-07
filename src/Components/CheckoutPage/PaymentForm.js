import React from 'react'
import {Button, Typography,  Divider } from '@material-ui/core';
import { CardElement, Elements, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import ReviewOrder from './ReviewOrder';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = ({ checkoutToken, nextStep, backStep, shippingDetails, onCaptureCheckout, timeout }) => {
  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement });

    if(error){
        console.log(error);
    } else {
        const orderData = {
            line_items: checkoutToken.live.line_items,
            customer: {
                firstname: shippingDetails.data.firstName,
                lastname: shippingDetails.data.lastName,
                email: shippingDetails.data.emailAddress,
                address: shippingDetails.data.address,
                number: shippingDetails.data.phoneNumber,
                },    
                payment: {
                    gateway: 'stripe',
                    stripe: {
                        payment_method_id: paymentMethod.id
                    }
                }
            }
            
            console.log(orderData);
            onCaptureCheckout(checkoutToken.id, orderData);
            timeout();
            nextStep();
        }
    }

  return (
    <React.Fragment>
      <ReviewOrder checkoutToken={checkoutToken} />
      <Divider />
      <Typography variant="h6" gutterBottom style={{ margin: '20px 0' }}>Payment method</Typography>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>{({ elements, stripe }) => (
          <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
            <CardElement />
            <br /> <br />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button variant="outlined" onClick={backStep}>Back</Button>
              <Button type="submit" variant="contained" disabled={!stripe} color="primary">
                Pay {checkoutToken.live.subtotal.formatted_with_code}
              </Button>
            </div>
          </form>
        )}
        </ElementsConsumer>
      </Elements>
    </React.Fragment>
  );
};

export default PaymentForm;
