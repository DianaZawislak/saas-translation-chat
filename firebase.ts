// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABsnTyybAEu_iBcYi4RGBVEAeElsnhgPI",
  authDomain: "ai-translator-chat.firebaseapp.com",
  projectId: "ai-translator-chat",
  storageBucket: "ai-translator-chat.appspot.com",
  messagingSenderId: "297674687117",
  appId: "1:297674687117:web:0da8856e5a14f3e1a958c4",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const functions = getFunctions(app);

export { db, auth, functions };
