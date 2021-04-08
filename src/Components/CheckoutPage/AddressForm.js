import React, { useEffect, useState } from 'react'
import { Typography, Grid, Button } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';

import { Link } from 'react-router-dom';
import FormInputField from './CustomInputField';


const AddressForm = ({ checkoutToken, next }) => {
    const methods = useForm();

    const [formField, setFormField] = useState(null);
    //Using session storage to store typed in user details when navigating back and forth from user details to payment
    useEffect(() => {
        let fd = {
            firstName: sessionStorage.getItem("firstName") || '',
            lastName: sessionStorage.getItem("lastName") || '',
            address: sessionStorage.getItem("address") || '',
            phoneNumber: sessionStorage.getItem("phoneNumber") || '',
            emailAddress: sessionStorage.getItem("emailAddress") || ''
        }
        console.log(fd);

        let labels = {
            firstName: "First Name",
            lastName: "Last Name",
            address: "Address",
            phoneNumber: "Phone Number",
            emailAddress: "Email Address"
        }
        //Filling fields from session storage
        let _formField = [];
        Object.keys(fd).forEach(e => {
            _formField.push(<FormInputField key={fd[e] + e} value={fd[e]} required name={e} label={labels[e]} />);
        });
        setFormField(_formField);

    }, []);

    const saveFormData = () => {
        let firstName = document.querySelector("input[name=firstName]").value;
        let lastName = document.querySelector("input[name=lastName]").value;
        let address = document.querySelector("input[name=address]").value;
        let phoneNumber = document.querySelector("input[name=phoneNumber]").value;
        let emailAddress = document.querySelector("input[name=emailAddress]").value;
        sessionStorage.setItem("firstName", firstName);
        sessionStorage.setItem("lastName", lastName);
        sessionStorage.setItem("address", address);
        sessionStorage.setItem("phoneNumber", phoneNumber);
        sessionStorage.setItem("emailAddress", emailAddress);
    }

    return (
        <React.Fragment>
            <Typography variant="h5" gutterBottom>Address</Typography>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit((data) => next({ data }))}>
                    <Grid container spacing={3}>
                        {formField ? formField : null}
                    </Grid>
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button component={Link} to="/checkoutcart" variant="outlined">Back to Cart</Button>
                        <Button type="submit" variant="contained" onClick={saveFormData} color="primary">Next</Button>
                    </div>
                </form>
            </FormProvider>
        </React.Fragment>
    )
}

export default AddressForm
