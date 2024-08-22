import React from 'react';

const Banner = () => {
    return (
        <div className="banner bg-gray-800 text-white py-8 px-4">
            {/* Add your banner content here */}
            <h2 className="text-3xl font-bold mb-4">Seasonal Promotions</h2>
            <p className="text-lg mb-4">Discover our latest offers and discounts!</p>
            <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition duration-300 ease-in-out">Shop Now</button>
        </div>
    );
};

export default Banner;
