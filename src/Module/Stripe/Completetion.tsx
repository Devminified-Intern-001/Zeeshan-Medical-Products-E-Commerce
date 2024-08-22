import React, { useEffect, useState } from 'react';
import { Stripe } from '@stripe/stripe-js';

interface CompletionProps {
  stripePromise: Promise<Stripe | null>;
}

const Completion: React.FC<CompletionProps> = ({ stripePromise }) => {
  const [messageBody, setMessageBody] = useState<React.ReactNode>('');

  useEffect(() => {
    if (!stripePromise) return;

    stripePromise.then(async (stripe) => {
      if (!stripe) return;

      const url = new URL(window.location.href);
      const clientSecret = url.searchParams.get('payment_intent_client_secret');

      if (clientSecret) {
        const { error, paymentIntent } = await stripe.retrievePaymentIntent(clientSecret);

        if (error) {
          setMessageBody(`> ${error.message}`);
        } else if (paymentIntent) {
          setMessageBody(
            <>
              &gt; Payment {paymentIntent.status}:{' '}
              <a
                href={`https://dashboard.stripe.com/test/payments/${paymentIntent.id}`}
                target="_blank"
                rel="noreferrer"
              >
                {paymentIntent.id}
              </a>
            </>
          );
        }
      }
    });
  }, [stripePromise]);

  return (
    <>
      <h1>Thank you!</h1>
      <a href="/">home</a>
      <div id="messages" role="alert" style={messageBody ? { display: 'block' } : {}}>
        {messageBody}
      </div>
    </>
  );
};

export default Completion;
