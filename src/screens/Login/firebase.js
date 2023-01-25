// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnvw3sQsUQegJtZJxYZNZcVGBsRjXQgx4",
  authDomain: "sialta.firebaseapp.com",
  projectId: "sialta",
  storageBucket: "sialta.appspot.com",
  messagingSenderId: "1080860096489",
  appId: "1:1080860096489:web:d6a15fe08adf8ca7763d78",
  measurementId: "G-6RDVBZ76WL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
