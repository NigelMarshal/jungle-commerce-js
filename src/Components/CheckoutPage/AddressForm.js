import React from 'react'
import { Select, MenuItem, InputLabel, Typography, Grid, Button } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';

import FormInputField from './CustomInputField';

const AddressForm = () => {
    const methods = useForm();
    return (
        <React.Fragment>
            <Typography variant="h5" gutterBottom>Address</Typography>
            <FormProvider {...methods}>
                <form>
                    <Grid container spacing={3}>
                        <FormInputField required name='firstName' label='First Name' />
                    </Grid>
                </form>
            </FormProvider>
        </React.Fragment>
    )
}

export default AddressForm
