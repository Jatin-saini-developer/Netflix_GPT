import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBI9EUM9a6K6JOHwmYIG0uJBX0M9iaHaag",
  authDomain: "netflix-gpt-737fb.firebaseapp.com",
  projectId: "netflix-gpt-737fb",
  storageBucket: "netflix-gpt-737fb.appspot.com", // ✅ FIXED this line
  messagingSenderId: "313155016580",
  appId: "1:313155016580:web:e336d63f5f98dc907dafd1",
  measurementId: "G-FDP0HHH0PY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth only (not analytics, which causes issues on Vercel)
export const auth = getAuth(app);
