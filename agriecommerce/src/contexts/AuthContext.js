// AuthContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, sendEmailVerification, updateProfile, signInWithEmailAndPassword, signOut } from 'firebase/auth'; // Import necessary functions
import { app } from '../firebase';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const auth = getAuth(app);

    const signup = async (email, password, firstName, lastName, telephone) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Additional user info
            await sendEmailVerification(user); // Send email verification

            // Update user profile (optional)
            await updateProfile(user, {
                displayName: `${firstName} ${lastName}`
            });

            // Set telephone (custom field)
            // Consider storing telephone number in a different way, as updatePhoneNumber may not be directly supported
            // await user.updatePhoneNumber(telephone); // Update phone number (custom field)

            return user;
        } catch (error) {
            throw error; // Propagate error to handle in Signup component
        }
    };

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logout = () => {
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, [auth]);

    const value = {
        currentUser,
        signup,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
