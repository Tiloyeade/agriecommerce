// C:\Users\USER\Desktop\AGRIECOMMERCE\agriecommerce-backend\routes\userRoutes.js
const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.post('/create', userController.createUser);
router.get('/all', userController.getAllUsers);
router.get('/:userId', userController.getUserById);
router.post('/authenticate', userController.authenticateUser);

module.exports = router;

