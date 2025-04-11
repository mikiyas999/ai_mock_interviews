// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCG5Rd7R3BZeY-m3GbICpoB7zxJozIAVqs",
  authDomain: "pepwise-fa64e.firebaseapp.com",
  projectId: "pepwise-fa64e",
  storageBucket: "pepwise-fa64e.firebasestorage.app",
  messagingSenderId: "297633711987",
  appId: "1:297633711987:web:ae82d7420749183f522706",
  measurementId: "G-KZJ62T46P8",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
