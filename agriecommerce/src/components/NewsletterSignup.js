import React, { useState } from 'react';

const NewsletterSignup = () => {
    const [email, setEmail] = useState('');
    const [interests, setInterests] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to backend or display a thank you message)
        console.log('Submitted:', { email, interests });
    };

    return (
        <div className="p-4 border border-gray-200 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="interests" className="block text-sm font-medium text-gray-700">Interests (optional):</label>
                    <input type="text" id="interests" value={interests} onChange={(e) => setInterests(e.target.value)} className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500" />
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Subscribe</button>
            </form>
        </div>
    );
};

export default NewsletterSignup;
