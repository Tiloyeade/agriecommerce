// File: models/MySQL/Product.js

const connection = require('../../config/db'); // Ensure the path is correct

const Product = {}; // Properly declare the Product object

Product.create = (productData, callback) => {
    const sql = 'INSERT INTO products SET ?';
    connection.query(sql, productData, (err, result) => {
        if (err) throw err;
        callback(result.insertId);
    });
};

Product.findAll = (callback) => {
    const sql = 'SELECT * FROM products';
    connection.query(sql, (err, results) => {
        if (err) throw err;
        callback(results);
    });
};

module.exports = Product;
