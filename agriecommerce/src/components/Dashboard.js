import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Dashboard = () => {
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate(); // Use useNavigate hook instead of useHistory
    const [redirect, setRedirect] = useState(false);

    const handleLogout = async () => {
        try {
            await logout();
            setRedirect(true); // Set redirect to true after logout
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    // Redirect to the auth page after logout
    if (redirect) {
        navigate('/auth'); // Use navigate function instead of history.push
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome, {currentUser ? currentUser.email : 'Guest'}</p>
            <button onClick={handleLogout}>Log Out</button>
        </div>
    );
};

export default Dashboard;
