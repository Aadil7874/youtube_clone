// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3awe4n3VxXEOG1AdJTl6HYHITicDkxwc",
  authDomain: "clone-c5130.firebaseapp.com",
  projectId: "clone-c5130",
  storageBucket: "clone-c5130.appspot.com",
  messagingSenderId: "569538024744",
  appId: "1:569538024744:web:208df8da3b687b9e542c1d",
  measurementId: "G-2QG9YTKJGS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
