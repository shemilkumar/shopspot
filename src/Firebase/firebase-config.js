// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9eNiT8BLoFAT0dmxqeQtxKjrz85S8EkY",
  authDomain: "shopspot-42028.firebaseapp.com",
  projectId: "shopspot-42028",
  storageBucket: "shopspot-42028.appspot.com",
  messagingSenderId: "993152299088",
  appId: "1:993152299088:web:9beeead897a3104be26155",
  measurementId: "G-7DM2Z9WXZS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export const userCollectionRef = collection(db, "users");
