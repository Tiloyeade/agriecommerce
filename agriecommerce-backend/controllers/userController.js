// C:\Users\USER\Desktop\AGRIECOMMERCE\agriecommerce-backend\controllers\userController.js
const User = require('../models/MySQL/User');
const firebaseAdmin = require('../config/firebase');

// Create a new user
exports.createUser = (req, res) => {
    const userData = req.body;

    User.create(userData, (userId) => {
        res.status(201).send({ userId });
    });
};

// Get all users
exports.getAllUsers = (req, res) => {
    User.findAll((users) => {
        res.status(200).send(users);
    });
};

// Get user details by ID
exports.getUserById = (req, res) => {
    const { userId } = req.params;

    User.findById(userId, (user) => {
        if (!user) return res.status(404).send('User not found');
        res.status(200).send(user);
    });
};

// Authenticate user with Firebase
exports.authenticateUser = (req, res) => {
    const { token } = req.body;

    firebaseAdmin.auth().verifyIdToken(token)
        .then(decodedToken => {
            res.status(200).send(decodedToken);
        })
        .catch(err => {
            res.status(401).send('Invalid token');
        });
};

