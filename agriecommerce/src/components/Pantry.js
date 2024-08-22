import React from 'react';
import { Link } from 'react-router-dom';

const Pantry = () => {
    return (
        <div>
            {/* Banner */}
            <div className="bg-gray-200 p-8 text-center">
                <h1 className="text-4xl font-bold mb-4">Welcome to Our Pantry Section</h1>
                <p className="text-lg">Explore our selection of pantry essentials!</p>
                <img src="/pantry-banner.jpg" alt="Pantry Banner" className="mt-8 mx-auto max-w-full" />
            </div>

            {/* Cart for Pantry Products */}
            <div className="bg-gray-100 py-4 px-8 mb-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Shop Pantry Products</h2>
                <Link to="/pantry/grains" className="text-blue-500 hover:underline mx-2">
                    Grains & Pasta
                </Link>
                <Link to="/pantry/canned-foods" className="text-blue-500 hover:underline mx-2">
                    Canned Foods
                </Link>
                <Link to="/pantry/spices" className="text-blue-500 hover:underline mx-2">
                    Spices & Seasonings
                </Link>
                <Link to="/pantry/sauces" className="text-blue-500 hover:underline mx-2">
                    Sauces & Condiments
                </Link>
                <Link to="/pantry/oils" className="text-blue-500 hover:underline mx-2">
                    Oils & Vinegars
                </Link>
                {/* Add links for other categories */}
            </div>

            {/* Add grains & pasta products here */}
            <div className="bg-gray-100 py-4 px-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">Grains & Pasta</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Individual grains & pasta products */}
                    <div className="border p-4 rounded-lg">
                        <img src="/grain-pasta-1.jpg" alt="Grain Pasta 1" className="mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Spaghetti Pasta</h3>
                        <p className="text-gray-600 mb-2">Imported Italian spaghetti pasta.</p>
                        <p className="text-gray-800 font-bold">$2.99</p>
                        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg">Add to Cart</button>
                    </div>
                    <div className="border p-4 rounded-lg">
                        <img src="/grain-pasta-2.jpg" alt="Grain Pasta 2" className="mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Brown Rice</h3>
                        <p className="text-gray-600 mb-2">Organic brown rice, 1kg pack.</p>
                        <p className="text-gray-800 font-bold">$3.49</p>
                        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg">Add to Cart</button>
                    </div>
                    {/* Add more individual grains & pasta products here */}
                </div>
            </div>

            {/* Add canned food products here */}
            <div className="bg-gray-100 py-4 px-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">Canned Food</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Individual canned food products */}
                    <div className="border p-4 rounded-lg">
                        <img src="/canned-food-1.jpg" alt="Canned Food 1" className="mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Canned Tuna</h3>
                        <p className="text-gray-600 mb-2">Chunk light tuna in water, 5oz can.</p>
                        <p className="text-gray-800 font-bold">$1.99</p>
                        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg">Add to Cart</button>
                    </div>
                    <div className="border p-4 rounded-lg">
                        <img src="/canned-food-2.jpg" alt="Canned Food 2" className="mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Canned Beans</h3>
                        <p className="text-gray-600 mb-2">Organic black beans, 15oz can.</p>
                        <p className="text-gray-800 font-bold">$0.99</p>
                        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg">Add to Cart</button>
                    </div>
                    {/* Add more individual canned food products here */}
                </div>
            </div>

            {/* Add spices and seasonings products here */}
            <div className="bg-gray-100 py-4 px-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">Spices & Seasonings</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Individual spices and seasonings products */}
                    <div className="border p-4 rounded-lg">
                        <img src="/spices-1.jpg" alt="Spices 1" className="mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Ground Cinnamon</h3>
                        <p className="text-gray-600 mb-2">Premium ground cinnamon, 3oz jar.</p>
                        <p className="text-gray-800 font-bold">$2.49</p>
                        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg">Add to Cart</button>
                    </div>
                    <div className="border p-4 rounded-lg">
                        <img src="/spices-2.jpg" alt="Spices 2" className="mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Garlic Powder</h3>
                        <p className="text-gray-600 mb-2">Organic garlic powder, 4oz jar.</p>
                        <p className="text-gray-800 font-bold">$3.99</p>
                        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg">Add to Cart</button>
                    </div>
                    {/* Add more individual spices and seasonings products here */}
                </div>
            </div>

            {/* Add sauces and condiments products here */}
            <div className="bg-gray-100 py-4 px-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">Sauces & Condiments</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Individual sauces and condiments products */}
                    <div className="border p-4 rounded-lg">
                        <img src="/sauce-1.jpg" alt="Sauce 1" className="mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Tomato Ketchup</h3>
                        <p className="text-gray-600 mb-2">Classic tomato ketchup, 20oz bottle.</p>
                        <p className="text-gray-800 font-bold">$1.99</p>
                        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg">Add to Cart</button>
                    </div>
                    <div className="border p-4 rounded-lg">
                        <img src="/sauce-2.jpg" alt="Sauce 2" className="mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Honey Mustard</h3>
                        <p className="text-gray-600 mb-2">Sweet and tangy honey mustard, 12oz bottle.</p>
                        <p className="text-gray-800 font-bold">$2.49</p>
                        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg">Add to Cart</button>
                    </div>
                    {/* Add more individual sauces and condiments products here */}
                </div>
            </div>

            {/* Add oils and vinegars products here */}
            <div className="bg-gray-100 py-4 px-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">Oils & Vinegars</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Individual oils and vinegars products */}
                    <div className="border p-4 rounded-lg">
                        <img src="/oil-1.jpg" alt="Oil 1" className="mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Extra Virgin Olive Oil</h3>
                        <p className="text-gray-600 mb-2">Cold-pressed extra virgin olive oil, 16oz bottle.</p>
                        <p className="text-gray-800 font-bold">$8.99</p>
                        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg">Add to Cart</button>
                    </div>
                    <div className="border p-4 rounded-lg">
                        <img src="/vinegar-1.jpg" alt="Vinegar 1" className="mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Balsamic Vinegar</h3>
                        <p className="text-gray-600 mb-2">Aged balsamic vinegar from Modena, 8.5oz bottle.</p>
                        <p className="text-gray-800 font-bold">$12.49</p>
                        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg">Add to Cart</button>
                    </div>
                    {/* Add more individual oils and vinegars products here */}
                </div>
            </div>
        </div>
    );
};

export default Pantry;
