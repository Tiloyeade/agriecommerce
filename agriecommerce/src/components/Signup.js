// Signup.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Signup = () => {
    const { signup } = useAuth();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [telephone, setTelephone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignup = async () => {
        try {
            setError('');
            await signup(email, password, firstName, lastName, telephone);
            // Signup successful, navigate to another page or show success message
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-20 p-4 border rounded shadow-md">
            <h1 className="text-2xl font-semibold mb-4">Sign Up</h1>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                className="w-full px-3 py-2 mb-4 border rounded"
            />
            <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                className="w-full px-3 py-2 mb-4 border rounded"
            />
            <input
                type="tel"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                placeholder="Telephone Number"
                className="w-full px-3 py-2 mb-4 border rounded"
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full px-3 py-2 mb-4 border rounded"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-3 py-2 mb-4 border rounded"
            />
            <button
                onClick={handleSignup}
                className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600"
            >
                Sign Up
            </button>
            <p className="text-gray-600 mt-2">
                Already have an account? <Link to="/login" className="text-blue-500">Log In</Link>
            </p>
        </div>
    );
};

export default Signup;
