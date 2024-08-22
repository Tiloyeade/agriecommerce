// App.js

import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Farms from './components/Farms';
import ContactInfo from './components/ContactInfo';
import ShoppingCart from './components/ShoppingCart';
import SellWithUs from './components/SellWithUs';
import Bakery from './components/Bakery';
import ProductCategories from './components/ProductCategories';
import Signup from './components/Signup';
import Login from './components/Login';
import GuestCheckoutForm from './components/GuestCheckoutForm';
import { AuthProvider } from './contexts/AuthContext';
// eslint-disable-next-line
import { firestore } from './firebase'; // Import firestore from Firebase
import MyRecipePage from './components/MyRecipePage';
import DeliverySchedule from './components/DeliverySchedule';
import MeatAndSeafoods from './components/MeatAndSeafoods';
import Frozen from './components/Frozen';
import Pantry from './components/Pantry';

// Replace 'YOUR_STRIPE_PUBLISHABLE_KEY' with your actual Stripe publishable key
const stripePromise = loadStripe('YOUR_STRIPE_PUBLISHABLE_KEY');

const App = () => {
  return (
    <Elements stripe={stripePromise}>
      <div className="min-h-screen flex flex-col">
        {/* Include the Header component */}
        <Header />

        {/* Routes for different pages */}
        <AuthProvider>
          <Routes>
            <Route path="/shop" element={<ShoppingCart />} />
            <Route path="/farms/*" element={<Farms />} />
            <Route path="/deliveryschedule" element={<DeliverySchedule />} />
            <Route path="/myrecipepage" element={<MyRecipePage />} />
            <Route path="/meat" element={<MeatAndSeafoods />} />
            <Route path="/Contact" element={<ContactInfo />} />
            <Route path="/" element={<Home />} />
            <Route path="/bakery" element={<Bakery />} />
            <Route path="/pantry" element={<Pantry />} />
            <Route path="/frozen" element={<Frozen />} />
            <Route path="/SellwithUs" element={<SellWithUs />} />
            <Route path="/Cart" element={<ShoppingCart />} />
            <Route path="/Products" element={<ProductCategories />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/guestcheckoutform" element={<GuestCheckoutForm />} />
            {/* Add more routes for other components */}
          </Routes>
        </AuthProvider>
        {/* Include the Footer component */}
        <Footer />
      </div>
    </Elements>
  );
};

export default App;
