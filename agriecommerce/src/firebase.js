// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'; // Import auth from Firebase

const firebaseConfig = {
    apiKey: "AIzaSyDZLVgUoiGTgO4XMfjFAEECKk90VWc0rnY",
    authDomain: "agriecommerce-9d00e.firebaseapp.com",
    projectId: "agriecommerce-9d00e",
    storageBucket: "agriecommerce-9d00e.appspot.com",
    messagingSenderId: "595847672729",
    appId: "1:595847672729:web:ab210f9c6d776a1554d908",
    measurementId: "G-STN61KPB8W"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const auth = getAuth(app); // Initialize auth

export { app, analytics, firestore, auth }; // Export Firebase services including auth
