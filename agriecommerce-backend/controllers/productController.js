// C:\Users\USER\Desktop\AGRIECOMMERCE\agriecommerce-backend\controllers\productController.js
const Product = require('../models/MySQL/Product');
const ProductDetails = require('../models/MongoDB/ProductDetails');
const db = require('../config/firebase');

// Create a new product
exports.createProduct = async (req, res) => {
    try {
        const productData = req.body;

        // Insert the product into MySQL
        const productId = await new Promise((resolve, reject) => {
            Product.create(productData, (insertId) => {
                if (!insertId) reject('Failed to create product');
                resolve(insertId);
            });
        });

        // Save product details in MongoDB
        const productDetails = new ProductDetails({
            productId,
            description: productData.description,
            specifications: productData.specifications,
        });

        await productDetails.save();
        res.status(201).send({ productId });
    } catch (err) {
        res.status(500).send(err);
    }
};

// Get all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await new Promise((resolve, reject) => {
            Product.findAll((results) => {
                if (!results) reject('Failed to fetch products');
                resolve(results);
            });
        });
        res.status(200).send(products);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Add product review
exports.addReview = async (req, res) => {
    try {
        const { productId, userId, rating, comment } = req.body;

        const productDetails = await ProductDetails.findOne({ productId });

        if (!productDetails) {
            return res.status(404).send('Product not found');
        }

        productDetails.reviews.push({ userId, rating, comment });
        await productDetails.save();
        res.status(200).send('Review added');
    } catch (err) {
        res.status(500).send(err);
    }
};

// Get product details
exports.getProductDetails = async (req, res) => {
    try {
        const { productId } = req.params;

        const productDetails = await ProductDetails.findOne({ productId });

        if (!productDetails) {
            return res.status(404).send('Product not found');
        }
        res.status(200).send(productDetails);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Get all products with images and categories
exports.getAllProductsWithImages = async (req, res) => {
    try {
        const sql = `
            SELECT p.id, p.name, p.price, p.stock, p.image_url, c.name AS category_name
            FROM products p
            JOIN product_categories c ON p.category_id = c.id
        `;
        const results = await new Promise((resolve, reject) => {
            Product.query(sql, (err, results) => {
                if (err) reject(err);
                resolve(results);
            });
        });
        res.status(200).send(results);
    } catch (err) {
        res.status(500).send(err);
    }
};
