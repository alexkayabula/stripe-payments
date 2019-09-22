import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import { notify } from 'react-notify-toast';
import './CheckoutForm.css'

const createOptions = (fontSize, padding) => {
  return {
    style: {
      base: {
        fontSize,
        color: '#424770',
        letterSpacing: '0.025em',
        fontFamily: 'Source Code Pro, monospace',
        '::placeholder': {
          color: '#aab7c4',
        },
        padding,
      },
      invalid: {
        color: '#9e2146',
      },
    },
  };
};

class CheckoutForm extends Component {
    constructor(props){
        super(props);
        this.state = {complete: false};
        this.submit = this.submit.bind(this);
    }

    async submit(ev){
      ev.preventDefault();
        let {token} = await this.props.stripe.createToken({name: "Name"});
        let response = await fetch("/charge", {
            method: "POST",
            headers: {"Content-Type": "text/plain"},
            body: token.id
        });

        if (response.ok){
            this.setState({complete: true});
            notify('Transaction successful', 'success', 5000)
        } else{
            notify('The payment system seems to be having a problem. Please try again later', 'error', 5000)
        }
    }
    
    render() {

        return (
          <div className="checkout">
             <h2>Enter Card Details</h2>
             <CardElement
             { ...createOptions()}
             />
             <button onClick={this.submit}>Purchase</button>
          </div>
        );
    }
}

export default injectStripe(CheckoutForm)

