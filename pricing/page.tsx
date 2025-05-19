'use client'; // Ensures the component is a client component

import { useEffect, useState } from 'react';
import { loadStripe, Stripe } from '@stripe/stripe-js'; // Import Stripe type from @stripe/stripe-js

const pricingPlans = [
  {
    id: 'price_free',
    name: 'Free',
    description: 'Track up to 250 actions/month. Basic dashboard & reward templates.',
    price: 'Free',
    buttonText: 'Start Free',
    bgColor: 'bg-blue-600',
  },
  {
    id: 'price_starter',
    name: 'Starter',
    description: '$49/month - Track 5,000 actions. Custom branding & email support.',
    price: '$49/month',
    buttonText: 'Subscribe $49/month',
    bgColor: 'bg-green-600',
  },
  {
    id: 'price_growth',
    name: 'Growth',
    description: '$149/month - 25,000 actions. On-chain verification, Discord & Telegram bots.',
    price: '$149/month',
    buttonText: 'Subscribe $149/month',
    bgColor: 'bg-green-600',
  },
  {
    id: 'price_pro',
    name: 'Pro',
    description: '$399/month - 100,000+ actions. API access & multi-project support.',
    price: '$399/month',
    buttonText: 'Subscribe $399/month',
    bgColor: 'bg-indigo-600',
  },
  {
    id: 'price_enterprise',
    name: 'Enterprise',
    description: 'Custom pricing for 100k+ actions. Dedicated infra & token launch help.',
    price: 'Custom',
    buttonText: 'Contact Sales',
    bgColor: 'bg-gray-800',
  },
];


const PricingPage = () => {
  const [stripe, setStripe] = useState<Stripe | null>(null); // State to store the Stripe instance

  // Load Stripe.js and set it in state when the component is mounted
  useEffect(() => {
    const initializeStripe = async () => {
      const stripeInstance = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
      setStripe(stripeInstance);
    };
    initializeStripe();
  }, []); // Only runs once when the component mounts

  const handleCheckout = async (priceId: string) => {
    if (!stripe) {
      console.error('Stripe has not loaded yet.');
      return;
    }

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ priceId }),
      });

      const session = await response.json();

      if (session.url) {
        window.location.href = session.url; // Redirect to Stripe checkout
      }
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Choose Your Plan</h1>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pricingPlans.map((plan) => (
          <div key={plan.id} className="card bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-semibold text-black text-center mb-4">{plan.name}</h2> {/* Change text color to black */}
            <p className="text-center text-lg text-black mb-4">{plan.description}</p> {/* Change text color to black */}
            <button
              onClick={() => handleCheckout(plan.id)}
              className={`w-full ${plan.bgColor} text-white py-2 px-4 rounded-lg hover:bg-opacity-80 transition duration-300`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
