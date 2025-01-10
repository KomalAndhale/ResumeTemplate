// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-dllohVo4gUfFyK1GGkDl3u6Fj-7kZ3k",
  authDomain: "otp-project-7eda8.firebaseapp.com",
  projectId: "otp-project-7eda8",
  storageBucket: "otp-project-7eda8.firebasestorage.app",
  messagingSenderId: "322539164007",
  appId: "1:322539164007:web:d92ddf14ff22d1b7fa5fc2",
  measurementId: "G-CRY1M4YM7M"
};

 // Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
