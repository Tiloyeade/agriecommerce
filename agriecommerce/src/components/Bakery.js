import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Bakery = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/products/category/Bakery`);
                setProducts(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            {/* Banner */}
            <div className="bg-gray-200 p-8 text-center">
                <h1 className="text-4xl font-bold mb-4">Welcome to Our Bakery</h1>
                <p className="text-lg">Delicious baked goods made with love and care!</p>
                <img src="/bakery-banner.jpg" alt="Bakery Banner" className="mt-8 mx-auto max-w-full" />
            </div>

            {/* Cart for Bakery Products */}
            <div className="bg-gray-100 py-4 px-8 mb-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Shop Bakery Products</h2>
                <Link to="/bakery/cakes" className="text-blue-500 hover:underline mx-2">Cakes</Link>
                <Link to="/bakery/breads" className="text-blue-500 hover:underline mx-2">Breads</Link>
                <Link to="/bakery/pastries" className="text-blue-500 hover:underline mx-2">Pastries</Link>
                <Link to="/bakery/cookies" className="text-blue-500 hover:underline mx-2">Cookies</Link>
                <Link to="/bakery/cupcakes" className="text-blue-500 hover:underline mx-2">Cupcakes</Link>
                <Link to="/bakery/doughnuts" className="text-blue-500 hover:underline mx-2">Doughnuts</Link>
                <Link to="/bakery/pies" className="text-blue-500 hover:underline mx-2">Pies</Link>
                <Link to="/bakery/muffins" className="text-blue-500 hover:underline mx-2">Muffins</Link>
                <Link to="/bakery/bagels" className="text-blue-500 hover:underline mx-2">Bagels</Link>
            </div>

            {/* Display Bakery Products */}
            <div className="bg-gray-100 py-4 px-8 mb-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Bakery Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="border p-4 rounded-lg">
                            <img src={product.imageUrl || 'https://via.placeholder.com/300'} alt={product.name} className="mx-auto mb-4" />
                            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                            <p className="text-gray-600 mb-2">{product.description}</p>
                            <p className="text-gray-800 font-bold">${product.price}</p>
                            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg">Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Bakery;
