// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBI9EUM9a6K6JOHwmYIG0uJBX0M9iaHaag",
  authDomain: "netflix-gpt-737fb.firebaseapp.com",
  projectId: "netflix-gpt-737fb",
  storageBucket: "netflix-gpt-737fb.firebasestorage.app",
  messagingSenderId: "313155016580",
  appId: "1:313155016580:web:e336d63f5f98dc907dafd1",
  measurementId: "G-FDP0HHH0PY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();