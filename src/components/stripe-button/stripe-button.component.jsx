import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HotMRIcpkqp7YB5RsWbXlBPk7ZZDMWAsT22YDuFPyduSHuqjBg8KcRageehuSHLjWvfu5KGaJmwHookhqXlOhMr00KKIEq5Mz';

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Crown Clothing Inc.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            discrimination={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={() => {alert("Payment Successful!")}}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;