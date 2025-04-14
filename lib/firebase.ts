import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { config } from "./config";

// Determine environment
const env = process.env.NODE_ENV || 'development';
const firebaseConfig = config.firebase[env];

// Initialize Firebase only if it hasn't been initialized
let app;
let analytics;
let db;
let database;
let auth;

try {
  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
    
    // Initialize services only in browser environment
    if (typeof window !== 'undefined') {
      analytics = getAnalytics(app);
      auth = getAuth(app);
    }
    
    db = getFirestore(app);
    database = getDatabase(app);
  }
} catch (error) {
  console.error('Error initializing Firebase:', error);
  
  // Provide fallback or handle error appropriately
  if (process.env.NODE_ENV === 'development') {
    console.warn('Firebase initialization failed. Make sure all config values are set correctly.');
  }
}

export { app, analytics, db, database, auth };

// Utility function to check Firebase connection
export const checkFirebaseConnection = async () => {
  try {
    const db = getFirestore();
    await db.terminate(); // This will attempt to close any connections
    await db.enableNetwork(); // This will attempt to reconnect
    return true;
  } catch (error) {
    console.error('Firebase connection check failed:', error);
    return false;
  }
}; 