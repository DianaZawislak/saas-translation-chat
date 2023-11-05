// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHFYql8X6E271t4ElHFMzVFpbHxhr4OE0",
  authDomain: "saas-chat-48768.firebaseapp.com",
  projectId: "saas-chat-48768",
  storageBucket: "saas-chat-48768.appspot.com",
  messagingSenderId: "715915918016",
  appId: "1:715915918016:web:d18136c93ab8b90d640b25"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const functions = getFunctions(app);

export { db, auth, functions };
