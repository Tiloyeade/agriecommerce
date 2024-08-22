// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Farms from './components/Farms'; // Import the Farms component
import Header from './components/Header';
import Footer from './components/Footer';
import ContactInfo from './components/ContactInfo';
import ShoppingCart from './components/ShoppingCart';
import SellWithUs from './components/SellWithUs';
import Bakery from './components/Bakery';
import ProductCategories from './components/ProductCategories';
import Signup from './components/Signup';
import Login from './components/Login';
import GuestCheckoutForm from './components/GuestCheckoutForm'; // Import GuestCheckoutForm




const App = () => {
  return (
    <div>
      {/* Include the Header component */}
      <Header />

      {/* Routes for different pages */}
      <Routes>

        <Route path="/shop" element={<ShoppingCart />} />
        <Route path="/farms" element={<Farms />} />
        <Route path="/Contact" element={<ContactInfo />} />
        <Route path="/" element={<Home />} />
        <Route path="/bakery" component={Bakery} />
        <Route path="/SellwithUs" element={<SellWithUs />} />
        <Route path="/Cart" element={<ShoppingCart />} />
        <Route path="/Products" element={<ProductCategories />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/guestcheckoutform" element={<GuestCheckoutForm />} />
      </Routes>

      {/* Include the Footer component */}
      <Footer />
    </div>
  );
};

//export default App;


import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useNavigate } from 'react-router-dom';
import GuestCheckoutForm from './GuestCheckoutForm';
import { useAuth } from '../contexts/AuthContext';

function Product({ id, name, price, image, onAddToCart }) {
  return (
    <div className="product border p-4 mb-4 w-1/5">
      <img src={image} alt={name} className="mb-2 w-full h-40 object-cover" />
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-700">${price.toFixed(2)}</p>
      <button
        onClick={() => onAddToCart({ id, name, price })}
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}

function CartItem({ item, onRemoveFromCart }) {
  return (
    <li className="cart-item flex justify-between items-center border p-2 mb-2">
      <span>{item.name} - ${item.price.toFixed(2)} x {item.quantity}</span>
      <button
        onClick={() => onRemoveFromCart(item)}
        className="bg-red-500 text-white px-2 py-1 rounded"
      >
        Remove
      </button>
    </li>
  );
}

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);
  const [showGuestCheckout, setShowGuestCheckout] = useState(false);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productToRemove) => {
    const updatedCartItems = cartItems.filter(item => item.id !== productToRemove.id);
    setCartItems(updatedCartItems);
  };

  const totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  const handleGuestCheckout = () => {
    setShowGuestCheckout(true);
    navigate('/guestcheckoutform'); // Navigate to the GuestCheckoutForm route
  };

  return (
    <div className="App">
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Standard Shopping Cart</h1>
        <div className="flex items-center">
          <ShoppingCartIcon />
          {cartItems.length > 0 && (
            <span className="ml-1 bg-red-500 text-white px-2 py-1 rounded-full text-xs">{cartItems.length}</span>
          )}
        </div>
      </header>
      <main className="p-4 flex">
        <div className="products flex flex-wrap w-full">
          {products.map(product => (
            <Product
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              onAddToCart={addToCart}
            />
          ))}
        </div>
        <aside className="ml-4">
          <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
          {cartItems.length === 0 ? (
            <p>Your shopping cart is empty.</p>
          ) : (
            <div>
              <ul className="cart">
                {cartItems.map((item, index) => (
                  <CartItem key={index} item={item} onRemoveFromCart={removeFromCart} />
                ))}
              </ul>
              <p>Total Amount: ${totalAmount.toFixed(2)}</p>
              {!currentUser ? (
                <div className="flex flex-col mt-4">
                  <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
                    Log In to Checkout
                  </Link>
                  <button
                    onClick={handleGuestCheckout}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Checkout as Guest
                  </button>
                </div>
              ) : (
                <Link to="/checkout" className="bg-green-500 text-white px-4 py-2 mt-4 rounded">
                  Checkout
                </Link>
              )}

              {/* Render GuestCheckoutForm when showGuestCheckout is true */}
              {showGuestCheckout && (
                <GuestCheckoutForm
                  cartItems={cartItems}
                  totalAmount={totalAmount}
                  onClose={() => setShowGuestCheckout(false)}
                />
              )}
            </div>
          )}
        </aside>
      </main>
    </div>
  );
}

const products = [
  {
    "id": 1,
    "name": "Organic Apples",
    "image": "https://source.unsplash.com/featured/?apple",
    "price": 2.99
  },
  // Add more products here...
];

//export default ShoppingCart;




import React from 'react';
import WrappedPaymentForm from './PaymentForm'; // Import the WrappedPaymentForm component

const GuestCheckoutForm = ({ cartItems, totalAmount, onClose }) => {
  // Handle payment method change and payment success
  const handlePaymentSuccess = async (paymentDetails) => {
    console.log('Payment successful!', paymentDetails);
    onClose(); // Close the checkout form
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Guest Checkout</h2>
      <form>
        {/* Input fields for customer details */}
        {/* ... */}

        {/* Render WrappedPaymentForm */}
        <WrappedPaymentForm
          totalAmount={totalAmount}
          onSuccess={handlePaymentSuccess}
        />

        {/* Place Order Button */}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

//export default GuestCheckoutForm;



import React, { useEffect, useState } from 'react';

const Farms = () => {
  const [userSignedUp, setUserSignedUp] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    phoneNumber: '',
    password: ''
  });

  useEffect(() => {
    // Load Google Maps API script dynamically
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (userSignedUp && userLocation) {
      // Fetch farmer locations and details here based on user's location
      // Example: fetch(`/api/farmers?location=${userLocation.lat},${userLocation.lng}`)
      // .then(response => response.json()).then(data => console.log(data));
      // Once you have the data, you can display it on the map
      displayFarmersOnMap();
    }
  }, [userSignedUp, userLocation]);

  const displayFarmersOnMap = () => {
    // Code to display farmer locations and details on the map using Google Maps API
    // Example:
    // const map = new window.google.maps.Map(document.getElementById('map'), {
    //     center: { lat: userLocation.lat, lng: userLocation.lng },
    //     zoom: 12,
    // });
    // const marker = new window.google.maps.Marker({
    //     position: { lat: userLocation.lat, lng: userLocation.lng },
    //     map: map,
    //     title: 'Your Location',
    // });
  };

  const handleSignUp = () => {
    // Implement sign-up functionality
    // After successful sign-up, set userSignedUp to true
    // and fetch user's location
    setUserSignedUp(true);
    getUserLocation();
  };

  const getUserLocation = () => {
    // Implement code to get user's current location using Geolocation API
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
    // Handle form submission
    setUserSignedUp(true);
    getUserLocation();
    // Redirect to the "Find Your Local Farmers" page
    handleFindFarmers();
  };

  const handleFindFarmers = () => {
    // Implement functionality to find local farmers based on user's location
    // You can use the userLocation state variable here
    // For now, let's just log a message
    console.log('Redirecting to Find Your Local Farmers page...');
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-8">Explore Local Farms</h2>
      {!userSignedUp && (
        <div className="text-center mb-8">
          <p className="mb-4">To access farmer locations and details, please sign up:</p>
          <button onClick={handleSignUp} className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out">Sign Up</button>
        </div>
      )}
      {userSignedUp && (
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="border border-gray-300 px-4 py-2 rounded-md w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-gray-700">Phone Number:</label>
              <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} className="border border-gray-300 px-4 py-2 rounded-md w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">Password:</label>
              <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} className="border border-gray-300 px-4 py-2 rounded-md w-full" />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out">Submit</button>
          </form>
        </div>
      )}
      {userSignedUp && (
        <button onClick={handleFindFarmers} className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out">Find Your Local Farmers</button>
      )}
      <div id="map" style={{ width: '100%', height: '400px' }}></div>
    </div>
  );
};

//export default Farms;



