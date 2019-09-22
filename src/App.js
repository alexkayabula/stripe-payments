import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

class App extends Component {
  render(){
    return(
      <StripeProvider apiKey={process.env.STRIPE_PUBLISHABLE_KEY}>
        <div className='example'>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
  
}

export default App;
