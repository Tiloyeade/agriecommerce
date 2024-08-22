import React, { useState } from 'react';
import WrappedPaymentForm from './PaymentForm'; // Import the WrappedPaymentForm component

const GuestCheckoutForm = ({ totalAmount, onClose }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        streetAddress: '',
        city: '',
        state: '',
        postalCode: '',
        country: '',
        cardHolderName: '',
        cardNumber: '',
        expiration: '',
        cvv: ''
    });
    const [formError, setFormError] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }

        // Call payment method success handler if payment succeeds
        const paymentSuccessHandler = (paymentDetails) => {
            console.log('Payment successful!', paymentDetails);
            onClose(); // Close the checkout form
        };

        try {
            // Submit the form data along with payment details
            await WrappedPaymentForm.submitPayment({
                ...formData,
                onSuccess: paymentSuccessHandler
            });
        } catch (error) {
            console.error('Error processing payment:', error);
            setFormError('Error processing payment. Please try again.');
        }
    };

    const validateForm = () => {
        const {
            firstName,
            lastName,
            email,
            streetAddress,
            city,
            state,
            postalCode,
            country,
            cardHolderName,
            cardNumber,
            expiration,
            cvv
        } = formData;

        if (
            !firstName ||
            !lastName ||
            !email ||
            !streetAddress ||
            !city ||
            !state ||
            !postalCode ||
            !country ||
            !cardHolderName ||
            !cardNumber ||
            !expiration ||
            !cvv
        ) {
            setFormError('All fields are required.');
            return false;
        }

        if (!validateEmail(email)) {
            setFormError('Invalid email address.');
            return false;
        }

        if (!validateCardNumber(cardNumber)) {
            setFormError('Invalid card number.');
            return false;
        }

        if (!validateExpiration(expiration)) {
            setFormError('Invalid expiration date.');
            return false;
        }

        if (!validateCVV(cvv)) {
            setFormError('Invalid CVV.');
            return false;
        }

        setFormError(null); // Clear any previous error
        return true;
    };

    const validateEmail = (email) => {
        // Simple email validation regex
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validateCardNumber = (cardNumber) => {
        // Validate card number (simple example)
        return /^\d{16}$/.test(cardNumber);
    };

    const validateExpiration = (expiration) => {
        // Validate expiration date (simple example, format MM/YYYY)
        const regex = /^(0[1-9]|1[0-2])\/\d{4}$/;
        return regex.test(expiration);
    };

    const validateCVV = (cvv) => {
        // Validate CVV (simple example, 3 or 4 digits)
        return /^\d{3,4}$/.test(cvv);
    };

    const handlePaymentSuccess = (paymentDetails) => {
        console.log('Payment successful!', paymentDetails);
        onClose(); // Close the checkout form
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl font-bold mb-4">Guest Checkout</h2>
            {formError && <div className="text-red-500 mb-4">{formError}</div>}
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">First Name:</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Last Name:</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
            </div>
            {/* Other input fields for address and payment information */}
            {/* Example: Email, Street Address, City, State/Province, Postal Code, Country */}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            {/* Card Details */}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Card Number:</label>
                <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Expiration (MM/YYYY):</label>
                    <input
                        type="text"
                        name="expiration"
                        value={formData.expiration}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">CVV:</label>
                    <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
            </div>
            {/* Render WrappedPaymentForm */}
            <WrappedPaymentForm
                totalAmount={totalAmount} // Pass totalAmount to WrappedPaymentForm
                onSuccess={handlePaymentSuccess} // Use the defined success handler
            />
            {/* Place Order Button */}
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline"
                type="submit"
            >
                Place Order
            </button>
        </form>
    );
};

export default GuestCheckoutForm;
