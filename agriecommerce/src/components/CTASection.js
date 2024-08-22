import React from 'react';

const CTASection = () => {
    const handleShopNowClick = () => {
        // Handle "Shop Now" action (e.g., redirect to the products page)
        console.log('Shop Now clicked');
    };

    const handleLearnMoreClick = () => {
        // Handle "Learn More" action (e.g., navigate to a specific page)
        console.log('Learn More clicked');
    };

    const handleSignUpClick = () => {
        // Handle "Sign Up" action (e.g., open a signup modal)
        console.log('Sign Up clicked');
    };

    return (
        <div className="p-4 border border-gray-200 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Take Action Now!</h2>
            <div className="flex flex-col md:flex-row gap-4">
                <button onClick={handleShopNowClick} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Shop Now</button>
                <button onClick={handleLearnMoreClick} className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">Learn More</button>
                <button onClick={handleSignUpClick} className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">Sign Up</button>
            </div>
        </div>
    );
};

export default CTASection;
