import React from 'react';
import Product1Image from '../images/product1.jpg';
import Product2Image from '../images/product2.jpg';
import Product3Image from '../images/product3.webp';
import Product4Image from '../images/product4.jpeg';

const FeaturedProducts = () => {
    // Example array of featured products
    const featuredProducts = [
        {
            id: 1,
            name: 'Product 1',
            description: 'Brief description of Product 1',
            image: Product1Image,
        },
        {
            id: 2,
            name: 'Product 2',
            description: 'Brief description of Product 2',
            image: Product2Image,
        },
        {
            id: 3,
            name: 'Product 3',
            description: 'Brief description of Product 3',
            image: Product3Image,
        },
        {
            id: 4,
            name: 'Product 4',
            description: 'Brief description of Product 4',
            image: Product4Image,
        },
        // Add more featured products as needed
    ];

    return (
        <div className="featured-products bg-gray-100 py-8 px-4">
            <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {featuredProducts.map(product => (
                    <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
                        <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4" />
                        <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                        <p className="text-gray-700 mb-4">{product.description}</p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out">Shop Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedProducts;
