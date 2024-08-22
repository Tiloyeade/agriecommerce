import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductCategories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeCategoryId, setActiveCategoryId] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/products/categories`);
                setCategories(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching categories: ', error);
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    const handleCategoryHover = (categoryId) => {
        setActiveCategoryId(categoryId);
    };

    const handleCategoryLeave = () => {
        setActiveCategoryId(null);
    };

    return (
        <div className="bg-gray-100 py-8 px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Explore Product Categories</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <div className="flex justify-center mb-4">
                        {categories.map(category => (
                            <button
                                key={category.id}
                                className={`mx-2 px-4 py-2 rounded-md ${activeCategoryId === category.id ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'}`}
                                onMouseEnter={() => handleCategoryHover(category.id)}
                                onMouseLeave={handleCategoryLeave}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {categories.map(category => (
                            <div
                                key={category.id}
                                className={`bg-white rounded-lg shadow-md p-4 text-center transition duration-300 ${activeCategoryId === category.id ? 'border-2 border-blue-500' : ''}`}
                                onMouseEnter={() => handleCategoryHover(category.id)}
                                onMouseLeave={handleCategoryLeave}
                            >
                                <h3 className="text-lg font-bold mb-2">{category.name}</h3>
                                {activeCategoryId === category.id && (
                                    <ul className="text-sm">
                                        {category.subcategories.map((subcategory, index) => (
                                            <li key={index} className="mb-1">{subcategory}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default ProductCategories;
