// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBayd3urLWjdr542GiknzC7wdJqU3dUGd4",
  authDomain: "todolist-5f935.firebaseapp.com",
  projectId: "todolist-5f935",
  storageBucket: "todolist-5f935.appspot.com",
  messagingSenderId: "195998735585",
  appId: "1:195998735585:web:c133ad4319a458dbd4eba0",
  measurementId: "G-9BRKW9L1LC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig