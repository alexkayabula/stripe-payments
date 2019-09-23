import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
import Notifications from 'react-notify-toast';

class App extends Component {
  render(){
    return(
      <StripeProvider apiKey="process.env.STRIPE_SECRET_KEY">
        <div className='example'>
          <Elements>
            <CheckoutForm />
          </Elements>
          <Notifications />
        </div>
      </StripeProvider>
    );
  }
  
}

export default App;
