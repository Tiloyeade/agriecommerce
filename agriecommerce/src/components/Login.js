import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            setError('');
            await login(email, password);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-20 p-4 border rounded shadow-md">
            <h1 className="text-2xl font-semibold mb-4">Log In</h1>
            {error && <div className="text-red-500 mb-4">{error}</div>}
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
                onClick={handleLogin}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
                Log In
            </button>
            <p className="text-gray-600 mt-2">
                Don't have an account yet? <Link to="/signup" className="text-blue-500">Sign Up</Link>
            </p>
        </div>
    );
};

export default Login;
