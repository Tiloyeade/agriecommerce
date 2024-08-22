import React from 'react';

const ShippingInfo = () => {
    return (
        <div className="p-4 border border-gray-200 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Shipping Information</h2>
            <p className="mb-2">We offer the following shipping methods:</p>
            <ul className="list-disc pl-6 mb-4">
                <li>Standard Shipping: 3-5 business days ($5.99)</li>
                <li>Express Shipping: 1-2 business days ($12.99)</li>
            </ul>
            <p className="mb-2">Free shipping on orders over $50.</p>
            <p>Please note that delivery times may vary based on location and courier service.</p>
        </div>
    );
};

export default ShippingInfo;
