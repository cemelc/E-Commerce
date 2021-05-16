import React, { useState } from 'react';
import {Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button} from '@material-ui/core';

import useStyles from './styles';

const steps = ['Shipping address', 'Payment details'];

const Checkout = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] =  useState(0);
    return (
        <>
            <div className={classes.toolbar}>
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Typography varian="h4" align="center">Checkout</Typography>
                        <Stepper activeStep={activeStep} className={classes.stepper}>
                            {steps.map((step) => (
                                <Step>
                                    <StepLabel>{step}</StepLabel>
                                </Step>                                 
                            ))}                                                           
                        </Stepper>
                            
                    </Paper>
                </main>
            </div>   
        </>
    )
}

export default Checkout
