const admin = require('firebase-admin');
const serviceAccount = require('./agriecommerce-9d00e-firebase-adminsdk-ls6a7-936a3f9fb6.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_DB_URL
});

const db = admin.firestore();

module.exports = db;

