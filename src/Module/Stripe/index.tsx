
import Payment from './Payment.tsx';


import { useEffect, useState } from 'react';


import { loadStripe, Stripe } from '@stripe/stripe-js';
import axios from 'axios';

function StripePayment() {
  // Define state with appropriate type for Stripe promise
  const [stripePromise, setStripePromise] =
    useState<Promise<Stripe | null> | null>(null);

  useEffect(() => {
    // Create an async function within useEffect
    const fetchStripeConfig = async () => {
      try {
        const response = await axios.get<{ PUBLISH_KEY: string }>(
          'https://medical-e-commerce-backend.vercel.app/pay/config',
          {
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IlNhYWR1bGxhaCIsImVtYWlsIjoic2FhZHVsbGFobXVnaGFsNEBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE1MTYyMzkwMjJ9.hWgvQwF89BHjClnzNkUpsVaWrycTiDk1HgdHnDqDs64',
            },
          }
        );
        console.log('response.data', response.data.PUBLISH_KEY);
        setStripePromise(loadStripe(response.data.PUBLISH_KEY));
      } catch (error) {
        console.error('Error fetching Stripe configuration:', error);
      }
    };

    fetchStripeConfig();
  }, []);

  console.log('stripePromise', stripePromise);

  return (
    <>
    {stripePromise ? <Payment stripePromise={stripePromise} /> : <div>Loading...</div>}
    </>
  );
}

export default StripePayment;
