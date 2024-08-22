const connection = require('../../config/db');

constOrder = {};

Order.create = (orderData, callback) => {
    const sql = 'INSERT INTO orders SET ?';
    connection.query(sql, orderData, (err, result) => {
        if (err) throw err;
        callback(result.insertId);
    });
};

Order.findByUserId = (userId, callback) => {
    const sql = 'SELECT * FROM orders WHERE user_id = ?';
    connection.query(sql, [userId], (err, results) => {
        if (err) throw err;
        callback(results);
    });
};

module.exports = Order;

