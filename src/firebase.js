// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmkmU2o90eMW7EnIQ_j7ykx3JqutDYP1A",
  authDomain: "cityhospital-f18e0.firebaseapp.com",
  projectId: "cityhospital-f18e0",
  storageBucket: "cityhospital-f18e0.appspot.com",
  messagingSenderId: "171277125624",
  appId: "1:171277125624:web:a52bbaa78ccf2e2197780d",
  measurementId: "G-B057YNPJDT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);