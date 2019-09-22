import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

class App extends Component {
  render(){
    return(
      <StripeProvider apiKey="pk_test_SdxatsuAobKY8TfE9HRRyCvd00OKMsscey">
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
