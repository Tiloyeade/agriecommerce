import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext'; // Assuming you have a custom hook for accessing authentication methods

const Auth = () => {
    const { signup, login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignup = async () => {
        try {
            setError('');
            await signup(email, password);
        } catch (error) {
            setError(error.message);
        }
    };

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
            <h1 className="text-2xl font-semibold mb-4">Authentication</h1>
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
                onClick={handleSignup}
                className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600"
            >
                Sign Up
            </button>
            <button
                onClick={handleLogin}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
                Log In
            </button>
        </div>
    );
};

export default Auth;
