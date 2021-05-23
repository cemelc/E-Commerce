import React,  { useState } from 'react';
import { Typography, Button, Divider } from '@material-ui/core';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import Review from './Review';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = ({ checkoutToken, backStep , onCaptureCheckout, nextStep, shippingData, timeout }) => {
        
        const handleSubmit = async (event, elements, stripe)  => {
        event.preventDefault();

        if(!elements || !stripe) return;

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement });
        
        var total = parseFloat(checkoutToken.live.subtotal.formatted);
        var totaltax = (0.21 * total) / (1 + 0.21);
        totaltax= Math.round(totaltax * 100) / 100;
        var totalShip= total + totaltax+parseFloat(checkoutToken.live.shipping.available_options[0].price.formatted);
         totalShip = Math.round(totalShip * 100) / 100;
        if (error){
            console.log(error);
        }else {
            const orderData = {            
              customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email },
              shipping: { name: shippingData.firstName +' '+  shippingData.lastName, street: shippingData.address1, town_city: shippingData.city, county_state: shippingData.shippingSubdivision, postal_zip_code: shippingData.zip, country: shippingData.shippingCountry },
              fulfillment: { shipping_method: shippingData.shippingOption },
              billing: {name: shippingData.firstName +' '+  shippingData.lastName,  street: shippingData.address1, town_city: shippingData.city, county_state: shippingData.shippingSubdivision,  postal_zip_code: shippingData.zip, country: shippingData.shippingCountry},
              payment: {
                gateway: 'stripe',
                stripe: {
                  payment_method_id: paymentMethod.id
                }
              },
              pay_what_you_want: totalShip
            };
                
                onCaptureCheckout(checkoutToken.id, orderData);

                timeout();
                nextStep();
            }            
    };

    console.log(checkoutToken);
    var total = parseFloat(checkoutToken.live.subtotal.formatted);
    var totaltax = (0.21 * total) / (1 + 0.21);
    totaltax= Math.round(totaltax * 100) / 100;
    var totalShip= total + totaltax+parseFloat(checkoutToken.live.shipping.available_options[0].price.formatted);
     totalShip = Math.round(totalShip * 100) / 100;
   
    
     console.log(totaltax);

    return (
        <>
            <Review checkoutToken={checkoutToken}/>
            <Divider />
            <Typography variant="h6" gutterBottom style={{ margin: '20px 0' }}>Payment method</Typography>
            <Elements stripe={stripePromise}>
                <ElementsConsumer>
                    {({ elements, stripe }) => (
                        <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                            <CardElement />
                            <br /><br />
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Button variant="outlined" onClick={backStep}>Back</Button>
                                <Button type="submit" variant="contained" disabled={!stripe} color="primary">
                                Pay {'€'+totalShip}
                            </Button>                          
                            </div>
                        </form>
                    )}
                </ElementsConsumer>
            </Elements>
        </>
    )
};

export default PaymentForm;