// testQuery.js

const mysql = require('mysql2');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
    host: 'localhost',       // Your MySQL host, typically 'localhost'
    user: 'root',            // Your MySQL username
    password: 'abey11111',   // Your MySQL password
    database: 'agriecommerce' // The name of your MySQL database
});

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');

    // Execute the query to fetch product categories
    const sql = 'SELECT * FROM product_categories';
    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return;
        }

        // Log the results to the console
        console.log('Product Categories:', results);

        // Close the database connection
        connection.end();
    });
});
