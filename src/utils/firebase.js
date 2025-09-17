// Firebase SDK imports
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

/**
 * Firebase Web App Configuration
 *
 * This configuration is used to initialize Firebase in the app.
 * For Firebase JS SDK v7.20.0 and later, `measurementId` is optional.
 */
const firebaseConfig = {
  apiKey: "AIzaSyBmCBpPuiSrbt7vw8W_PZq4JZJAt8lazZ4",
  authDomain: "netflixgpt-d64c4.firebaseapp.com",
  projectId: "netflixgpt-d64c4",
  storageBucket: "netflixgpt-d64c4.firebasestorage.app",
  messagingSenderId: "109163830099",
  appId: "1:109163830099:web:feec72e9c0c0bae42a9fa6",
  measurementId: "G-4XZQC0LCG8",
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics
const analytics = getAnalytics(app);

// Initialize Firebase Authentication
export const auth = getAuth();
