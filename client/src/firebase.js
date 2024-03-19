// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "my-renter.firebaseapp.com",
  projectId: "my-renter",
  storageBucket: "my-renter.appspot.com",
  messagingSenderId: "503989362718",
  appId: "1:503989362718:web:15657bc268b3f30f020e0f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
