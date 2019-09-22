import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import 'react-toastify/dist/ReactToastify.css';

const createOptions = () => {
    return {
      style: {
        base: {
          fontSize: '16px',
          color: '#424770',
          fontFamily: 'Open Sans, sans-serif',
          letterSpacing: '0.025em',
          '::placeholder': {
            color: '#aab7c4',
          },
        },
        invalid: {
          color: '#c23d4b',
        },
      }
    }
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
            toast("Transaction successful")
        } else{
            toast("The payment system seems to be having a problem. Please try again later")
        }
    }
    
    render() {

        return (
          <div className="checkout">
             <p>Enter Card Details</p>
             <CardElement
             {...createOptions()}
             />
             <button onClick={this.submit}>Purchase</button>
          </div>
        );
    }
}

export default injectStripe(CheckoutForm)

