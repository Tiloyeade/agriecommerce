import React, { useState } from 'react';
import { Elements, useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { firestore } from '../firebase';

const stripePromise = loadStripe('pk_test_51P2tMwF75tPdqfYgBDkcMTIBKJgI238c8mpYFhBa2M8PcGUDV1MpVOOSeltyNirLWtmKxnDvvraJJdNtoFRP49oZ00edGfAeUz');

const PaymentForm = ({ totalAmount, onSuccess }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardHolderName, setCardHolderName] = useState('');
    const [cardError, setCardError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        try {
            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: 'card',
                card: elements.getElement(CardElement),
                billing_details: {
                    name: cardHolderName,
                },
            });

            if (error) {
                setCardError(error.message);
                return;
            }

            // Payment successful, save order data to Firestore
            await firestore.collection('orders').add({
                totalAmount,
                paymentMethod: 'card',
                createdAt: new Date(),
            });

            onSuccess(paymentMethod);
        } catch (error) {
            console.error('Error processing payment:', error);
            setCardError('Error processing payment. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardHolderName">
                    Card Holder Name
                </label>
                <input
                    type="text"
                    id="cardHolderName"
                    placeholder="John Doe"
                    value={cardHolderName}
                    onChange={(e) => setCardHolderName(e.target.value)}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardElement">
                    Card Details
                </label>
                <CardElement
                    id="cardElement"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            {cardError && <div className="text-red-500">{cardError}</div>}
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Pay
            </button>
        </form>
    );
};

const WrappedPaymentForm = (props) => (
    <Elements stripe={stripePromise}>
        <PaymentForm {...props} />
    </Elements>
);

export default WrappedPaymentForm;
