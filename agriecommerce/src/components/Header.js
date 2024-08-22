import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useAuth } from '../contexts/AuthContext'; // Import the useAuth hook
import axios from 'axios';

const Header = () => {
    const [showCategories, setShowCategories] = useState(false);
    // eslint-disable-next-line 
    const [cartItemCount, setCartItemCount] = useState(0);
    const [categories, setCategories] = useState([]);
    const { currentUser, logout } = useAuth();

    // Fetch categories from the backend
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/products/categories`);
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);


    const handleSearch = (e) => {
        e.preventDefault();
        const searchQuery = document.getElementById('search-input').value;
        console.log('Performing search for:', searchQuery);
        // Implement search logic here
    };

    return (
        <header>
            {/* Upper part of the header */}
            <div className="bg-green-800 text-white py-4">
                <div className="container mx-auto flex justify-between items-center px-4">
                    <div className="logo">
                        <img src="YourLogo.png" alt="Logo" className="h-10" />
                    </div>
                    <nav className="flex space-x-4 items-center w-full">
                        <ul className="flex items-center space-x-4 flex-wrap flex-grow">
                            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
                            <li><Link to="/farms" className="hover:text-gray-300">Farms</Link></li>
                            <li><Link to="/myrecipepage" className="hover:text-gray-300">Recipe</Link></li>
                            <li><Link to="/deliveryschedule" className="hover:text-gray-300">Delivery schedule</Link></li>
                            <li><Link to="/about" className="hover:text-gray-300 whitespace-nowrap">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>

                            <li>
                                <Link to="/cart" className="hover:text-gray-300 relative flex items-center">
                                    <ShoppingCartIcon />
                                    {cartItemCount > 0 && (
                                        <span className="absolute top-0 right-0 bg-red-500 text-white px-1 rounded-full text-xs">{cartItemCount}</span>
                                    )}
                                </Link>
                            </li>
                            <li><Link to="/sellwithus" className="hover:text-gray-300 whitespace-nowrap">Sell with Us</Link></li>
                            <li
                                onMouseEnter={() => setShowCategories(true)}
                                onMouseLeave={() => setShowCategories(false)}
                                className="relative"
                            >
                                <Link to="/products" className="hover:text-gray-300">Products</Link>
                                {showCategories && (
                                    <ul className="absolute bg-gray-900 text-white py-2 px-4 rounded shadow-md">
                                        {categories.map(category => (
                                            <li key={category.id}>
                                                <Link to={`/${category.name.toLowerCase().replace(/ /g, '-')}`} className="hover:text-gray-300">{category.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        </ul>
                        <div className="search-bar flex items-center">
                            <input
                                type="text"
                                id="search-input"
                                placeholder="Search products..."
                                className="px-4 py-2 border border-gray-600 rounded-md mr-2"
                            />
                            <button
                                className="bg-gray-600 text-white px-4 py-2 rounded-md"
                                onClick={handleSearch}
                            >
                                <SearchIcon />
                            </button>
                        </div>
                    </nav>
                    <div className="flex items-center space-x-4">
                        {currentUser ? (
                            <button onClick={logout} className="hover:text-gray-300">Log Out</button>
                        ) : (
                            <>
                                <Link to="/signup" className="hover:text-gray-300 whitespace-nowrap">Sign Up</Link>
                                <Link to="/login" className="hover:text-gray-300 whitespace-nowrap">Log In</Link>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* Lower part of the header */}
            <div className="bg-gray-200 text-gray-800 py-2">
                <div className="container mx-auto flex justify-between items-center px-4">
                    <nav className="flex space-x-4 items-center w-full">
                        <ul className="flex items-center space-x-4 flex-wrap flex-grow">
                            {categories.map(category => (
                                <li key={category.id} className="hover:text-gray-300">
                                    <Link to={`/${category.name.toLowerCase().replace(/ /g, '-')}`}>{category.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
