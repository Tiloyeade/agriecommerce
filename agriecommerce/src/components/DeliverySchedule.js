import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import Login from './Login'; // Import the Login component

const DeliverySchedule = () => {
    const { currentUser } = useAuth();

    return (
        <div className="max-w-lg mx-auto mt-8 p-4 border rounded shadow-md">
            {currentUser ? (
                <div>
                    <h2 className="text-xl font-semibold mb-4">Delivery Schedule for {currentUser.email}</h2>
                    {/* Display delivery schedule information here */}
                    <p className="mb-2"><strong>Delivery Date:</strong> April 30, 2024</p>
                    <p className="mb-2"><strong>Delivery Status:</strong> In Transit</p>
                </div>
            ) : (
                <div>
                    <p className="text-lg mb-4">Please log in to view your delivery schedule.</p>
                    <Login /> {/* Render the Login component when user is not authenticated */}
                </div>
            )}
        </div>
    );
};

export default DeliverySchedule;
