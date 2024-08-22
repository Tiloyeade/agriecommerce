// FeaturedBrands.js

import React from 'react';

const FeaturedBrands = () => {
    // Sample data for featured brands
    const brands = [
        { id: 1, name: 'Brand 1', image: 'brand1.jpg' },
        { id: 2, name: 'Brand 2', image: 'brand2.jpg' },
        { id: 3, name: 'Brand 3', image: 'brand3.jpg' },
        // Add more brands as needed
    ];

    return (
        <div>
            <h2>Featured Brands</h2>
            <div className="featured-brands">
                {brands.map(brand => (
                    <div key={brand.id} className="brand">
                        <img src={require(`../assets/${brand.image}`).default} alt={brand.name} />
                        <p>{brand.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedBrands;
