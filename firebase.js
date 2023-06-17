// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJfoGxu823gRq11CJsxHdMdgBDIHPA408",
  authDomain: "estoque-6554a.firebaseapp.com",
  projectId: "estoque-6554a",
  storageBucket: "estoque-6554a.appspot.com",
  messagingSenderId: "909588693193",
  appId: "1:909588693193:web:1704a4dc6b6f4605148d18",
  measurementId: "G-BYNR6S4RQH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
