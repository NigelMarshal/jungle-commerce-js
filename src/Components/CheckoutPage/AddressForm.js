import React from 'react'
import { Typography, Grid, Button } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';

import { Link } from 'react-router-dom';
import FormInputField from './CustomInputField';


const AddressForm = ({ checkoutToken, next }) => {
    const methods = useForm();
    return (
        <React.Fragment>
            <Typography variant="h5" gutterBottom>Address</Typography>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit((data) => next({ data }))}>
                    <Grid container spacing={3}>
                        <FormInputField required name='firstName' label='First Name' />
                        <FormInputField required name='lastName' label='Last Name' />
                        <FormInputField required name='address' label='Address' />
                        <FormInputField required name='phoneNumber' label='Phone Number' />
                        <FormInputField required name='emailAddress' label='Email' type='email' />
                    </Grid>
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button component={Link} to="/checkoutcart" variant="outlined">Back to Cart</Button>
                        <Button type="submit" variant="contained" color="primary">Next</Button>
                    </div>
                </form>
            </FormProvider>
        </React.Fragment>
    )
}

export default AddressForm
