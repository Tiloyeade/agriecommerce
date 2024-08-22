import React from 'react';

const SecurePaymentOptions = () => {
    return (
        <div className="p-4 border border-gray-200 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Secure Payment Options</h2>
            <p className="mb-2">We ensure secure payment methods:</p>
            <ul className="list-disc pl-6 mb-4">
                <li>Credit/Debit Cards</li>
                <li>PayPal</li>
                <li>Stripe</li>
                {/* Add more payment options as needed */}
            </ul>
            <p className="mb-2">Your payment information is encrypted and secured.</p>
        </div>
    );
};

export default SecurePaymentOptions;
