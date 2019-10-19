import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';


class Payments extends  Component {
    render() {
    
       return (
            <StripeCheckout
            //Displays the name in the card module
                name="Dtour"
                
                description="Please submit your payment information to purchase your next trip with Dtour"
            //Give me $5 in US currency
                amount={5}
            //Expecting to receive callback after autherization of charge
                token={token => this.props.handleToken(token)}
            //Api key
                stripeKey={process.env.REACT_APP_STRIPE_Key} 
            >
                <button className="btn">
                    Add Credits
                </button>
            </StripeCheckout>    
        );
    }
}

export default connect(null, actions)(Payments);