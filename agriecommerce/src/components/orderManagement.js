import { useEffect, useState } from 'react';
import { firestore } from '../firebase';

const OrderManagement = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            const ordersCollection = await firestore.collection('orders').get();
            const ordersData = ordersCollection.docs.map((doc) => doc.data());
            setOrders(ordersData);
        };

        fetchOrders();
    }, []);

    return (
        <div>
            <h2>Order Management</h2>
            <ul>
                {orders.map((order, index) => (
                    <li key={index}>{order.orderId}</li>
                ))}
            </ul>
        </div>
    );
};

export default OrderManagement;
