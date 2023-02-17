// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqw3HOPhAANEf1-dseqENmH2Aexgm7jV4",
  authDomain: "sialta-71961.firebaseapp.com",
  projectId: "sialta-71961",
  storageBucket: "sialta-71961.appspot.com",
  messagingSenderId: "679005005065",
  appId: "1:679005005065:web:db4ca0a2584c807f8a1fd8",
  measurementId: "G-98WC7MW0FB"
};

firebase.initializeApp(firebaseConfig);

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);

export const db = getFirestore(app);
export default firebase;

// const db = getFirestore(app);
