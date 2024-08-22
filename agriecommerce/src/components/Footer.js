import React from 'react';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
    return (
        <footer className="bg-green-800 text-white py-8">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-4">
                <div className="mb-6 lg:mb-0">
                    <h4 className="text-lg font-semibold mb-2">Navigation</h4>
                    <ul>
                        <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
                        <li><a href="/products" className="text-gray-300 hover:text-white">Products</a></li>
                        <li><a href="/about" className="text-gray-300 hover:text-white">About Us</a></li>
                        <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
                    </ul>
                </div>
                <div className="mb-6 lg:mb-0">
                    <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
                    <ul className="flex space-x-4">
                        <li><a href="https://www.facebook.com" className="text-gray-300 hover:text-white"><Facebook /></a></li>
                        <li><a href="https://twitter.com" className="text-gray-300 hover:text-white"><Twitter /></a></li>
                        <li><a href="https://www.instagram.com" className="text-gray-300 hover:text-white"><Instagram /></a></li>
                        <li><a href="https://www.linkedin.com" className="text-gray-300 hover:text-white"><LinkedIn /></a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-2">Legal</h4>
                    <ul>
                        <li><a href="/privacy-policy" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
                        <li><a href="/terms-of-service" className="text-gray-300 hover:text-white">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
            <div className="bg-gray-700 py-4">
                <div className="container mx-auto text-center">
                    <p className="text-gray-300">&copy; 2024 Your Company Name. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
