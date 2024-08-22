const connection = require('../../config/db');

const Category = {};

Category.findAll = (callback) => {
    const sql = 'SELECT * FROM product_categories';
    connection.query(sql, (err, results) => {
        if (err) throw err;
        callback(results);
    });
};

module.exports = Category;