import React from 'react';
import { Link } from 'react-router-dom';

const MeatAndSeafoods = () => {
    return (
        <div>
            {/* Banner */}
            <div className="bg-gray-200 p-8 text-center">
                <h1 className="text-4xl font-bold mb-4">Welcome to Our Meat and Seafoods Section</h1>
                <p className="text-lg">High-quality meats and fresh seafoods for your culinary adventures!</p>
                <img src="/meat-seafood-banner.jpg" alt="Meat and Seafoods Banner" className="mt-8 mx-auto max-w-full" />
            </div>

            {/* Cart for Meat and Seafoods Products */}
            <div className="bg-gray-100 py-4 px-8 mb-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Shop Meat and Seafoods</h2>
                <Link to="/meat-and-seafoods/beef" className="text-blue-500 hover:underline mx-2">
                    Beef
                </Link>
                <Link to="/meat-and-seafoods/chicken" className="text-blue-500 hover:underline mx-2">
                    Chicken
                </Link>
                <Link to="/meat-and-seafoods/pork" className="text-blue-500 hover:underline mx-2">
                    Pork
                </Link>
                <Link to="/meat-and-seafoods/fish" className="text-blue-500 hover:underline mx-2">
                    Fish
                </Link>
                <Link to="/meat-and-seafoods/shrimp" className="text-blue-500 hover:underline mx-2">
                    Shrimp
                </Link>
                <Link to="/meat-and-seafoods/turkey" className="text-blue-500 hover:underline mx-2">
                    Turkey
                </Link>
                <Link to="/meat-and-seafoods/crab" className="text-blue-500 hover:underline mx-2">
                    Crab
                </Link>
                <Link to="/meat-and-seafoods/scallops" className="text-blue-500 hover:underline mx-2">
                    Scallops
                </Link>
            </div>

            {/* Add meat and seafood products here */}
            {/* For beef */}
            <div className="bg-gray-100 py-4 px-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">Beef</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Individual beef products */}
                    <div className="border p-4 rounded-lg">
                        <img src="https://via.placeholder.com/300" alt="Beef Steak" className="mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Beef Steak</h3>
                        <p className="text-gray-600 mb-2">Premium cut of beef steak, perfectly seasoned and grilled to perfection.</p>
                        <p className="text-gray-800 font-bold">$12.99 / lb</p>
                        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg">Add to Cart</button>
                    </div>
                    <div className="border p-4 rounded-lg">
                        <img src="https://via.placeholder.com/300" alt="Ground Beef" className="mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Ground Beef</h3>
                        <p className="text-gray-600 mb-2">Freshly ground beef, perfect for making burgers, meatballs, or tacos.</p>
                        <p className="text-gray-800 font-bold">$8.99 / lb</p>
                        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg">Add to Cart</button>
                    </div>
                    {/* Add more beef products */}
                </div>
            </div>
            {/* For chicken */}
            <div className="bg-gray-100 py-4 px-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">Chicken</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Individual chicken products */}
                    <div className="border p-4 rounded-lg">
                        <img src="https://via.placeholder.com/300" alt="Chicken Breast" className="mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Chicken Breast</h3>
                        <p className="text-gray-600 mb-2">Boneless, skinless chicken breast, perfect for grilling, baking, or sautéing.</p>
                        <p className="text-gray-800 font-bold">$6.99 / lb</p>
                        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg">Add to Cart</button>
                    </div>
                    <div className="border p-4 rounded-lg">
                        <img src="https://via.placeholder.com/300" alt="Whole Chicken" className="mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Whole Chicken</h3>
                        <p className="text-gray-600 mb-2">Whole chicken, perfect for roasting with your favorite herbs and spices.</p>
                        <p className="text-gray-800 font-bold">$4.99 / lb</p>
                        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg">Add to Cart</button>
                    </div>
                    {/* Add more chicken products */}
                </div>
            </div>
            {/* For pork */}
            <div className="bg-gray-100 py-4 px-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">Pork</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Individual pork products */}
                    <div className="border p-4 rounded-lg">
                        <img src="https://via.placeholder.com/300" alt="Pork Chops" className="mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Pork Chops</h3>
                        <p className="text-gray-600 mb-2">Juicy and flavorful pork chops, perfect for grilling or pan-searing.</p>
                        <p className="text-gray-800 font-bold">$9.99 / lb</p>
                        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg">Add to Cart</button>
                    </div>
                    <div className="border p-4 rounded-lg">
                        <img src="https://via.placeholder.com/300" alt="Pork Tenderloin" className="mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Pork Tenderloin</h3>
                        <p className="text-gray-600 mb-2">Tender and succulent pork tenderloin, great for roasting or grilling.</p>
                        <p className="text-gray-800 font-bold">$11.99 / lb</p>
                        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg">Add to Cart</button>
                    </div>
                    {/* Add more pork products */}
                </div>
            </div>
            {/* For fish */}
            <div className="bg-gray-100 py-4 px-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">Fish</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Individual fish products */}
                    <div className="border p-4 rounded-lg">
                        <img src="https://via.placeholder.com/300" alt="Salmon Fillet" className="mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Salmon Fillet</h3>
                        <p className="text-gray-600 mb-2">Fresh and delicious salmon fillet, perfect for grilling, baking, or broiling.</p>
                        <p className="text-gray-800 font-bold">$14.99 / lb</p>
                        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg">Add to Cart</button>
                    </div>
                    <div className="border p-4 rounded-lg">
                        <img src="https://via.placeholder.com/300" alt="Tuna Steak" className="mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Tuna Steak</h3>
                        <p className="text-gray-600 mb-2">Tender and flavorful tuna steak, great for grilling or searing.</p>
                        <p className="text-gray-800 font-bold">$10.99 / lb</p>
                        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg">Add to Cart</button>
                    </div>
                    {/* Add more fish products */}
                </div>
            </div>
            {/* For shrimp */}
            <div className="bg-gray-100 py-4 px-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">Shrimp</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Individual shrimp products */}
                    <div className="border p-4 rounded-lg">
                        <img src="https://via.placeholder.com/300" alt="Shrimp" className="mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Large Shrimp</h3>
                        <p className="text-gray-600 mb-2">Fresh large shrimp, perfect for grilling, sautéing, or adding to pasta dishes.</p>
                        <p className="text-gray-800 font-bold">$15.99 / lb</p>
                        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg">Add to Cart</button>
                    </div>
                    <div className="border p-4 rounded-lg">
                        <img src="https://via.placeholder.com/300" alt="Jumbo Shrimp" className="mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Jumbo Shrimp</h3>
                        <p className="text-gray-600 mb-2">Extra-large jumbo shrimp, perfect for grilling, frying, or serving as appetizers.</p>
                        <p className="text-gray-800 font-bold">$19.99 / lb</p>
                        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg">Add to Cart</button>
                    </div>
                    {/* Add more shrimp products */}
                </div>
            </div>
            {/* For turkey */}
            <div className="bg-gray-100 py-4 px-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">Turkey</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Individual turkey products */}
                    <div className="border p-4 rounded-lg">
                        <img src="https://via.placeholder.com/300" alt="Whole Turkey" className="mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Whole Turkey</h3>
                        <p className="text-gray-600 mb-2">Fresh whole turkey, perfect for roasting on holidays or special occasions.</p>
                        <p className="text-gray-800 font-bold">$3.99 / lb</p>
                        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg">Add to Cart</button>
                    </div>
                    <div className="border p-4 rounded-lg">
                        <img src="https://via.placeholder.com/300" alt="Turkey Breast" className="mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Turkey Breast</h3>
                        <p className="text-gray-600 mb-2">Boneless turkey breast, perfect for grilling, roasting, or slicing for sandwiches.</p>
                        <p className="text-gray-800 font-bold">$6.99 / lb</p>
                        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg">Add to Cart</button>
                    </div>
                    {/* Add more turkey products */}
                </div>
            </div>
            {/* For crab */}
            {/* For scallops */}
            {/* For beef */}
            {/* For chicken */}
            {/* For pork */}
            {/* For fish */}
            {/* For shrimp */}
            {/* For lobster */}
            {/* For crab */}
            {/* For scallops */}
        </div>
    );
};

export default MeatAndSeafoods;
