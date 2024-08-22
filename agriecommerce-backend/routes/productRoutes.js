const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();

router.post('/create', productController.createProduct);
router.get('/all', productController.getAllProducts);
router.post('/review', productController.addReview);
router.get('/:productId', productController.getProductDetails);

// In routes/productRoutes.js
router.get('/all-with-images', productController.getAllProductsWithImages);



module.exports = router;

