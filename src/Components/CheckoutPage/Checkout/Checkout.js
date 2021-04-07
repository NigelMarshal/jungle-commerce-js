import React, {useState, useEffect} from 'react'
import {Stepper, Step, StepLabel, Typography, Paper, CircularProgress, Divider, Button} from '@material-ui/core';
import useStyles from './styles';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import {commerce} from '../../../lib/commerce'

const steps = ['Address', 'Payment details']

const Checkout = ({cart}) => {
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [shippingDetails, setShippingDetails] = useState({});

    const classes = useStyles();

        useEffect(() =>{
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, {type: 'cart'});
                setCheckoutToken(token);
            } catch (error){

            }
        }

        generateToken();
    }, [cart]);

    const nextStep = () => setActiveStep((prevActiveStep)=> prevActiveStep + 1);
    const backStep = () => setActiveStep((prevActiveStep)=> prevActiveStep - 1);

    const next = (data) => {
        setShippingDetails(data);
        nextStep();
    }

    const Confirmation = () => (
        <div>
            Confirmation
        </div>
    );

    const Form = () => activeStep === 0 ? <AddressForm checkoutToken={checkoutToken} next={next} /> : <PaymentForm shippingDetails={shippingDetails} checkoutToken={checkoutToken} />

    return (
        <React.Fragment>
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
                    {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form /> }
                </Paper>
            </main>
        </React.Fragment>
    )
}

export default Checkout
