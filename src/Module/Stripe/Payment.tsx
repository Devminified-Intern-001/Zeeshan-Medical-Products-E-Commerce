import { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { Stripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm.tsx';
import axios from 'axios';

interface PaymentProps {
  stripePromise: Promise<Stripe | null>;
}

const Payment: React.FC<PaymentProps> = ({ stripePromise }) => {
  const [clientSecret, setClientSecret] = useState<string>('');

  useEffect(() => {
    const getClientSecret = async () => {
      try {
        // Create PaymentIntent as soon as the page loads
        const response = await axios.get('https://medical-e-commerce-backend.vercel.app/pay/getClientSecret?cartID=66c6e9344243e1d2f82f25f4', {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IlNhYWR1bGxhaCIsImVtYWlsIjoic2FhZHVsbGFobXVnaGFsNEBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE1MTYyMzkwMjJ9.hWgvQwF89BHjClnzNkUpsVaWrycTiDk1HgdHnDqDs64',
          },
        });
        console.log("response.data.message", response.data.message);
        setClientSecret(response.data.message);
      } catch (error) {
        console.error('Error fetching client secret:', error);
      }
    };

    getClientSecret();
  }, []);

  return (
    <>
      <h1>Payment</h1>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm clientSecret={clientSecret} />
        </Elements>
      )}
    </>
  );
};

export default Payment;
