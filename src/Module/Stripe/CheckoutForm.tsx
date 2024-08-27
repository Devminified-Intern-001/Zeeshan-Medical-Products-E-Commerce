import React, { useState, FormEvent } from 'react';
import { PaymentElement, LinkAuthenticationElement } from '@stripe/react-stripe-js';
import { useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { StripePaymentElementOptions } from '@stripe/stripe-js';
import { API_URL } from '../../config';

interface CheckoutFormProps {
  clientSecret: string;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ clientSecret }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}/completion`,
      },
    });

    if (error) {
      if (error.type === "card_error" || error.type === "validation_error") {
        setMessage(error.message || "An error occurred.");
      } else {
        setMessage("An unexpected error occurred.");
      }
    } else {
      setMessage(null);
    }

    setIsLoading(false);
  };

  const handleApi = async () => {
    try {
      const response = await axios.post(
        `${API_URL}/pay/finalize`,
        {
          capture: true,
          clientSecret: clientSecret,
        },
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IlNhYWR1bGxhaCIsImVtYWlsIjoic2FhZHVsbGFobXVnaGFsNEBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE1MTYyMzkwMjJ9.hWgvQwF89BHjClnzNkUpsVaWrycTiDk1HgdHnDqDs64',
          },
        }
      );
      console.log('response', response);
    } catch (error) {
      console.error('Error finalizing payment:', error);
    }
  };

  const options : StripePaymentElementOptions = {
    defaultValues : {
      billingDetails: {
        email: "saadullahmughal4@gmail.com",
        address: {
          country: "PK"
        }
      }
    },
    fields: {
      billingDetails: {
        name: "never",
        email: "never",
        address: {
          country: "never"
        }
      }
    }
  }

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <LinkAuthenticationElement
        id="link-authentication-element"
      />
      <PaymentElement id="payment-element" options={options} />
      <table>
        <tbody>
          <tr>
            <td>Convenience fee</td>
            <td>${50}.00</td>
          </tr>
          <tr>
            <td>Subtotal</td>
            <td>${12}.00</td>
          </tr>
          <tr>
            <td>Shipping</td>
            <td>${12}.00</td>
          </tr>
          <tr>
            <td>
              <b>Total</b>
            </td>
            <td>
              <b>${12}.00</b>
            </td>
          </tr>
        </tbody>
      </table>
      <p>Add promo code?</p>
      <button disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Checkout"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
};

export default CheckoutForm;
