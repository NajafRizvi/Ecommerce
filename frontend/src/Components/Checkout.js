import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
  ElementsConsumer,
} from '@stripe/react-stripe-js';

// Custom styling can be passed to options when creating an Element.
const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: 'green',
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: 'blue'
      }
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a'
    }
  }
};

const CheckoutForm = () => {
  const [error, setError] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  // Handle real-time validation errors from the card Element.
  const handleChange = (event) => {
    if (event.error) {
      setError(event.error.message);
    } else {
      setError(null);
    }
  }

  async function stripeTokenHandler(token) {
    const response = await fetch('/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({token: token.id})
    });
  
    return response.json();
  }

  // Handle form submission.
  const handleSubmit = async (event) => {
    event.preventDefault();
    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);
    if (result.error) {
      // Inform the user if there was an error.
      setError(result.error.message);
    } else {
      setError(null);
      // Send the token to your server.
      stripeTokenHandler(result.token);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <label for="card-element">
          Credit or debit card
        </label>
        <CardElement
          id="card-element"
          options={CARD_ELEMENT_OPTIONS}
          onChange={handleChange}
        />
        <div className="card-errors" role="alert">{error}</div>
      </div>
      <button type="submit">Submit Payment</button>
    </form>
  );
}

// Setup Stripe.js and the Elements provider
const stripePromise = loadStripe('pk_test_51HueyACuy52IK8zWyDBJwnm8mcSrQwWStva9HsHHdsJJk1GRnQLPE6P0m4EOcBqnVDr5smI3vXFbn51uxyDBO7YN00KOTo0TgV');
function InjectedCheckoutForm() {
  return (
    <ElementsConsumer>
      {({ stripe, elements }) => (
        <CheckoutForm stripe={stripe} elements={elements} />
      )}
    </ElementsConsumer>
  );
}
function Chechkout(){
  return (
    <div className="App">
      <div className="product">
        <img
          src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress"
          alt="laptop"
          style={{ width: "100%", height: "auto" }}
        />
        <div>
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </div>
  );
}
export default Chechkout