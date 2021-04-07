import React from 'react'
import {Button, Typography,  Divider } from '@material-ui/core';
import { CardElement, Elements, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStrip } from '@stripe/stripe-js';
import ReviewOrder from './ReviewOrder';

const PaymentForm = ({checkoutToken}) => {
    return (
        <React.Fragment>
            <ReviewOrder checkoutToken={checkoutToken} />
        </React.Fragment>
    )
}

export default PaymentForm
