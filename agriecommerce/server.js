// Import Express.js
const express = require('express');

// Create an instance of the Express application
const app = express();

// Define a route to handle GET requests to the '/api/data' endpoint
app.get('/api/data', (req, res) => {
    // Logic to fetch data from the server or database
    const data = [
        { id: 1, name: 'Data 1' },
        { id: 2, name: 'Data 2' },
        // Add more data as needed
    ];

    // Send the data as a JSON response
    res.json(data);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); 
});
