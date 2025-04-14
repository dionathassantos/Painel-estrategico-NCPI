import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBYcTwJLUA9YXfZsigyLGJy6WMsYKfdJXo",
  authDomain: "ncpi-102ca.firebaseapp.com",
  databaseURL: "https://ncpi-102ca-default-rtdb.firebaseio.com",
  projectId: "ncpi-102ca",
  storageBucket: "ncpi-102ca.firebasestorage.app",
  messagingSenderId: "592471971260",
  appId: "1:592471971260:web:acea66a4add39211d387b9",
  measurementId: "G-KR1NKD77R7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
const db = getFirestore(app);
const auth = getAuth(app);

export { app, analytics, db, auth }; 