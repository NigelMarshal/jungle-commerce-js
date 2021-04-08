import React, { useState, useEffect } from 'react'
import { Stepper, Step, StepLabel, CssBaseline, Typography, Paper, CircularProgress, Divider, Button } from '@material-ui/core';
import useStyles from './styles';
import Popup from '../../Popup/Popup';
import { Link } from 'react-router-dom';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import { commerce } from '../../../lib/commerce'

const steps = ['Address', 'Payment details']

const Checkout = ({ cart, order, onCaptureCheckout, error }) => {
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [shippingDetails, setShippingDetails] = useState({});
    const [isFinished, setIsFinished] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const classes = useStyles();

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    //Trigger popup after 5 seconds to ask user to continue shopping.
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(!isOpen);
        }, 5000);
        return () => clearTimeout(timer);
    }, [setIsOpen]);

    //Generating token using commerce js for cart/checkout details
    useEffect(() => {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
                setCheckoutToken(token);
            } catch (error) {
                console.log(error)
            }
        }

        generateToken();
    }, [cart]);

    //Moving back and forward between steps
    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    const next = (data) => {
        setShippingDetails(data);
        nextStep();
    }

    const timeout = () => {
        setTimeout(() => {
            setIsFinished(true)
        }, 3000);
    }



    let Confirmation = () => (order.customer ? (
        <React.Fragment>
            <div>
                <Typography variant="h5">Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}!</Typography>
                <Divider className={classes.divider} />
                <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
            </div>
            <br />
            <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
        </React.Fragment>
    ) : isFinished ? (
        <React.Fragment>
            <div>
                <Typography variant="h5">Thank you for your purchase!</Typography>
                <Divider className={classes.divider} />
            </div>
            <br />
            <div>
                <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
                {isOpen && <Popup
                    content={<>
                        <b>Your order is being processed!</b>
                        <Divider className={classes.divider} />
                        <Button component={Link} variant="outlined" type="button" to="/">Shop some more!</Button>
                    </>}
                    handleClose={togglePopup}
                />}
            </div>
        </React.Fragment>

    ) : (
        <div className={classes.spinner}>
            <CircularProgress />
        </div>
    ));

    const Form = () => activeStep === 0 ? <AddressForm checkoutToken={checkoutToken} next={next} /> :
        <PaymentForm
            shippingDetails={shippingDetails}
            nextStep={nextStep}
            checkoutToken={checkoutToken}
            backStep={backStep}
            onCaptureCheckout={onCaptureCheckout}
            timeout={timeout}
        />

    return (
        <React.Fragment>
            <CssBaseline />
            <div className={classes.toolbar} />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h3" align="center">
                        Checkout
                    </Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((step) => (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
                </Paper>
            </main>
        </React.Fragment>
    )
}

export default Checkout
