// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDj1glkZzZSRQArIma93oTVSrXJ9OhBkFc",
  authDomain: "login-4ad72.firebaseapp.com",
  projectId: "login-4ad72",
  storageBucket: "login-4ad72.appspot.com",
  messagingSenderId: "603922272667",
  appId: "1:603922272667:web:3ba70706c36736c648d13e",
  measurementId: "G-77L10VYPG1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export  const db = getFirestore(app);