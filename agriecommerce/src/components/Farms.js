import React, { useState, useEffect } from 'react';
import { Route, Routes, Link, useParams } from 'react-router-dom';
import { firestore } from '../firebase';
import GoogleMap from './GoogleMap';
import MapboxMap from './MapboxMap';
import MapContainer from './MapContainer';
import AddReviewForm from './AddReviewForm';

const Farms = () => {
    const [userSignedUp, setUserSignedUp] = useState(false);
    const [userLocation, setUserLocation] = useState(null);
    const [formData, setFormData] = useState({
        email: '',
        phoneNumber: '',
        password: ''
    });

    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    useEffect(() => {
        if (userSignedUp && userLocation) {
            // Implement logic to fetch farmer locations based on user's location
            displayFarmersOnMap();
        }
    }, [userSignedUp, userLocation]);

    const displayFarmersOnMap = () => {
        // Implement map display logic here using Google Maps API
    };

    const handleSignUp = () => {
        setUserSignedUp(true);
        getUserLocation();
    };

    const getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                setUserLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
            });
        }
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserSignedUp(true);
        getUserLocation();
        // Redirect to the "Find Your Local Farmers" page
        handleFindFarmers();
    };

    const handleFindFarmers = () => {
        console.log('Redirecting to Find Your Local Farmers page...');
    };

    return (
        <div className="bg-gray-100 min-h-screen py-8 px-4 flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold mb-8">Explore Local Farms</h2>
            {!userSignedUp && (
                <div className="text-center mb-8">
                    <p className="mb-4">To access farmer locations and details, please sign up:</p>
                    <button
                        onClick={handleSignUp}
                        className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out"
                    >
                        Sign Up
                    </button>
                </div>
            )}
            {userSignedUp && (
                <div className="max-w-md mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phoneNumber" className="block text-gray-700">Phone Number:</label>
                            <input
                                type="text"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            )}
            {userSignedUp && (
                <Link
                    to="/vendors/:vendorId"
                    className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out block mb-4"
                >
                    Find Your Local Farmers
                </Link>
            )}

            {/* Render GoogleMap component */}
            {userLocation && (
                <GoogleMap
                    options={{
                        center: userLocation,
                        zoom: 10,
                        // Other map options can be added here
                    }}
                    onMapLoad={(map) => {
                        // Do something when the map loads
                        console.log('Google Map loaded:', map);
                    }}
                />
            )}

            {/* Render MapboxMap component */}
            {userLocation && (
                <MapboxMap
                    options={{
                        center: [userLocation.lng, userLocation.lat],
                        zoom: 10,
                        // Other map options can be added here
                    }}
                />
            )}

            {/* Render MapContainer component */}
            <MapContainer />

            {/* Define routes for VendorProfile component */}
            <Routes>
                <Route path="/vendors/:vendorId" element={<VendorProfileWrapper />} />
            </Routes>
        </div>
    );
};

// VendorProfileWrapper component to fetch vendorId from URL params and render VendorProfile
const VendorProfileWrapper = () => {
    const { vendorId } = useParams();
    const [vendor, setVendor] = useState(null);

    useEffect(() => {
        const fetchVendor = async () => {
            try {
                const vendorRef = firestore.collection('vendors').doc(vendorId);
                const doc = await vendorRef.get();
                if (doc.exists) {
                    setVendor(doc.data());
                } else {
                    console.log('Vendor not found');
                }
            } catch (error) {
                console.error('Error fetching vendor:', error);
            }
        };

        fetchVendor();
    }, [vendorId]);

    if (!vendor) {
        return <p>Loading vendor profile...</p>;
    }

    return (
        <div>
            <h2>{vendor.farmName}</h2>
            <p>Location: {vendor.location}</p>
            <p>Products: {vendor.products.join(', ')}</p>
            {/* Add more vendor details here */}
            <h3>Reviews</h3>
            <ul>
                {vendor.reviews.map((review, index) => (
                    <li key={index}>
                        <p>{review.text}</p>
                        <p>Rating: {review.rating}/5</p>
                    </li>
                ))}
            </ul>

            {/* Render AddReviewForm component */}
            <AddReviewForm vendorId={vendorId} />
        </div>
    );
};

export default Farms;
