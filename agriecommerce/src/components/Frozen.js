import React from 'react';
import { Link } from 'react-router-dom';

const Frozen = () => {
    return (
        <div>
            {/* Banner */}
            <div className="bg-gray-200 p-8 text-center">
                <h1 className="text-4xl font-bold mb-4">Welcome to Our Frozen Section</h1>
                <p className="text-lg">Explore our selection of frozen delights!</p>
                <img src="/frozen-banner.jpg" alt="Frozen Banner" className="mt-8 mx-auto max-w-full" />
            </div>

            {/* Cart for Frozen Products */}
            <div className="bg-gray-100 py-4 px-8 mb-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Shop Frozen Products</h2>
                <Link to="/frozen/meals" className="text-blue-500 hover:underline mx-2">
                    Frozen Meals
                </Link>
                <Link to="/frozen/vegetables" className="text-blue-500 hover:underline mx-2">
                    Frozen Vegetables
                </Link>
                <Link to="/frozen/fruits" className="text-blue-500 hover:underline mx-2">
                    Frozen Fruits
                </Link>
                <Link to="/frozen/pizza" className="text-blue-500 hover:underline mx-2">
                    Frozen Pizza
                </Link>
                <Link to="/frozen/desserts" className="text-blue-500 hover:underline mx-2">
                    Frozen Desserts
                </Link>
                {/* Add links for other categories */}
            </div>

            {/* Add frozen meals products here */}
            <div className="bg-gray-100 py-4 px-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">Frozen Meals</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Individual frozen meals products */}
                    <div className="border p-4 rounded-lg">
                        <img src="/frozen-meal1.jpg" alt="Frozen Meal 1" className="mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Frozen Meal 1</h3>
                        <p className="text-gray-600 mb-2">Description of Frozen Meal 1.</p>
                        <p className="text-gray-800 font-bold">$9.99</p>
                        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg">Add to Cart</button>
                    </div>
                    <div className="border p-4 rounded-lg">
                        <img src="/frozen-meal2.jpg" alt="Frozen Meal 2" className="mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Frozen Meal 2</h3>
                        <p className="text-gray-600 mb-2">Description of Frozen Meal 2.</p>
                        <p className="text-gray-800 font-bold">$8.49</p>
                        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg">Add to Cart</button>
                    </div>
                    {/* Add more individual frozen meals products here */}
                </div>
            </div>

            {/* Add frozen vegetables, fruits, pizza, and desserts sections similarly */}
            <div className="bg-gray-100 py-4 px-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">Frozen Vegetables</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Individual frozen vegetables products */}
                    <div className="border p-4 rounded-lg">
                        <img src="/frozen-vegetable1.jpg" alt="Frozen Vegetable 1" className="mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Frozen Vegetable 1</h3>
                        <p className="text-gray-600 mb-2">Description of Frozen Vegetable 1.</p>
                        <p className="text-gray-800 font-bold">$3.99</p>
                        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg">Add to Cart</button>
                    </div>
                    <div className="border p-4 rounded-lg">
                        <img src="/frozen-vegetable2.jpg" alt="Frozen Vegetable 2" className="mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Frozen Vegetable 2</h3>
                        <p className="text-gray-600 mb-2">Description of Frozen Vegetable 2.</p>
                        <p className="text-gray-800 font-bold">$2.49</p>
                        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg">Add to Cart</button>
                    </div>
                    {/* Add more individual frozen vegetables products here */}
                </div>
            </div>
            <div className="bg-gray-100 py-4 px-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">Frozen Fruits</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Individual frozen fruits products */}
                    <div className="border p-4 rounded-lg">
                        <img src="/frozen-fruit1.jpg" alt="Frozen Fruit 1" className="mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Frozen Fruit 1</h3>
                        <p className="text-gray-600 mb-2">Description of Frozen Fruit 1.</p>
                        <p className="text-gray-800 font-bold">$5.99</p>
                        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg">Add to Cart</button>
                    </div>
                    <div className="border p-4 rounded-lg">
                        <img src="/frozen-fruit2.jpg" alt="Frozen Fruit 2" className="mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Frozen Fruit 2</h3>
                        <p className="text-gray-600 mb-2">Description of Frozen Fruit 2.</p>
                        <p className="text-gray-800 font-bold">$4.49</p>
                        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg">Add to Cart</button>
                    </div>
                    {/* Add more individual frozen fruits products here */}
                </div>
            </div>
            {/* Add frozen pizza products here */}
            <div className="bg-gray-100 py-4 px-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">Frozen Pizza</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Individual frozen pizza products */}
                    <div className="border p-4 rounded-lg">
                        <img src="/frozen-pizza1.jpg" alt="Frozen Pizza 1" className="mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Frozen Pizza 1</h3>
                        <p className="text-gray-600 mb-2">Description of Frozen Pizza 1.</p>
                        <p className="text-gray-800 font-bold">$7.99</p>
                        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg">Add to Cart</button>
                    </div>
                    <div className="border p-4 rounded-lg">
                        <img src="/frozen-pizza2.jpg" alt="Frozen Pizza 2" className="mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Frozen Pizza 2</h3>
                        <p className="text-gray-600 mb-2">Description of Frozen Pizza 2.</p>
                        <p className="text-gray-800 font-bold">$6.49</p>
                        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg">Add to Cart</button>
                    </div>
                    {/* Add more individual frozen pizza products here */}
                </div>
            </div>

            {/* Add frozen desserts products here */}
            <div className="bg-gray-100 py-4 px-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">Frozen Desserts</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Individual frozen desserts products */}
                    <div className="border p-4 rounded-lg">
                        <img src="/frozen-dessert1.jpg" alt="Frozen Dessert 1" className="mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Frozen Dessert 1</h3>
                        <p className="text-gray-600 mb-2">Description of Frozen Dessert 1.</p>
                        <p className="text-gray-800 font-bold">$5.99</p>
                        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg">Add to Cart</button>
                    </div>
                    <div className="border p-4 rounded-lg">
                        <img src="/frozen-dessert2.jpg" alt="Frozen Dessert 2" className="mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Frozen Dessert 2</h3>
                        <p className="text-gray-600 mb-2">Description of Frozen Dessert 2.</p>
                        <p className="text-gray-800 font-bold">$4.49</p>
                        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg">Add to Cart</button>
                    </div>
                    {/* Add more individual frozen desserts products here */}
                </div>
            </div>
        </div>
    );
};

export default Frozen;
