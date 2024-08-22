import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                // Fetch products from the backend API
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/products/all-with-images`);
                setProducts(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products: ', error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-semibold mb-4">Product List</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {products.map((product) => (
                        <li key={product.id} className="py-2">
                            <div className="border rounded-md p-4">
                                <img src={product.image_url} alt={product.name} className="mb-2 w-full h-40 object-cover" />
                                <strong className="text-xl">{product.name}</strong>
                                <p className="text-gray-600">${product.price}</p>
                                <p className="text-gray-800">{product.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ProductList;
