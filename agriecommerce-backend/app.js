const express = require('express');
const bodyParser = require('body-parser');
const connectMongoDB = require('./config/mongo');
const productRoutes = require('./routes/productRoutes');

const cors = require('cors');
const mysql = require('mysql2'); // Import MySQL module

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:3000' })); // Adjust this for production

// Connect to MongoDB
connectMongoDB();
// MySQL database connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Your MySQL username
    password: 'abey11111', // Your MySQL password
    database: 'agriecommerce' // Your MySQL database name
});

// Connect to the MySQL database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

// Route to fetch all product categories
app.get('/api/products/categories', (req, res) => {
    const sql = 'SELECT * FROM product_categories';
    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Failed to fetch categories' });
        }
        res.status(200).json(results);
    });
});

// Route to fetch products under a specific category (e.g., Bakery)
app.get('/api/products/category/:categoryName', (req, res) => {
    const { categoryName } = req.params;

    const sql = `
        SELECT p.* 
        FROM products p
        JOIN product_categories c ON p.category_id = c.id
        WHERE c.name = ?
    `;

    connection.query(sql, [categoryName], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Failed to fetch products' });
        }

        res.status(200).json(results);
    });
});

app.use('/api/products', productRoutes);

// Listen for requests
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
