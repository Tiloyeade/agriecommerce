// C:\Users\USER\Desktop\AGRIECOMMERCE\agriecommerce-backend\controllers\orderController.js
const Order = require('../models/MySQL/Order');

// Create a new order
exports.createOrder = (req, res) => {
    const orderData = req.body;

    Order.create(orderData, (orderId) => {
        res.status(201).send({ orderId });
    });
};

// Get all orders
exports.getAllOrders = (req, res) => {
    Order.findAll((orders) => {
        res.status(200).send(orders);
    });
};

// Get order details by ID
exports.getOrderById = (req, res) => {
    const { orderId } = req.params;

    Order.findById(orderId, (order) => {
        if (!order) return res.status(404).send('Order not found');
        res.status(200).send(order);
    });
};

// Update order status
exports.updateOrderStatus = (req, res) => {
    const { orderId, status } = req.body;

    Order.updateStatus(orderId, status, (result) => {
        if (result.affectedRows === 0) return res.status(404).send('Order not found');
        res.status(200).send('Order status updated');
    });
};

