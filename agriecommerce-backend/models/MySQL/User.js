const connection = require('../../config/db');

constUser = {};

User.create = (userData, callback) => {
    const sql = 'INSERT INTO users SET ?';
    connection.query(sql, userData, (err, result) => {
        if (err) throw err;
        callback(result.insertId);
    });
};

User.findById = (id, callback) => {
    const sql = 'SELECT * FROM users WHERE id = ?';
    connection.query(sql, [id], (err, result) => {
        if (err) throw err;
        callback(result[0]);
    });
};

module.exports = User;

