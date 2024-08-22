// C:\Users\USER\Desktop\AGRIECOMMERCE\agriecommerce-backend\routes\orderRoutes.js
const express = require('express');
const orderController = require('../controllers/orderController');
const router = express.Router();

router.post('/create', orderController.createOrder);
router.get('/all', orderController.getAllOrders);
router.get('/:orderId', orderController.getOrderById);
router.patch('/status', orderController.updateOrderStatus);

module.exports = router;

