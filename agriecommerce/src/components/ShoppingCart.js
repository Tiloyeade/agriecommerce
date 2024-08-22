import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useNavigate } from 'react-router-dom'; // Remove unused 'useNavigate' import
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
        const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);

        if (existingItemIndex !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingItemIndex].quantity += 1;
            setCartItems(updatedCartItems);
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (productToRemove) => {
        const updatedCartItems = cartItems.filter((item) => item.id !== productToRemove.id);
        setCartItems(updatedCartItems);
    };

    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

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

export default ShoppingCart;
