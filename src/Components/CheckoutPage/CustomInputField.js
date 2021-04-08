import React from 'react'
import { Grid, TextField } from '@material-ui/core';
import { Controller, useFormContext } from 'react-hook-form';

function FormInputField({ name, label, required, type }) {
    const { control } = useFormContext();

    return (
        <Grid item xs={12} sm={6}>
            <Controller
                defaultValue=""
                as={TextField}
                control={control}
                fullWidth
                name={name}
                label={label}
                required={required}
                type={type}
            />
        </Grid>
    );
}


export default FormInputField;
