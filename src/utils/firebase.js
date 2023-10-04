// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "next-blog-400813.firebaseapp.com",
  projectId: "next-blog-400813",
  storageBucket: "next-blog-400813.appspot.com",
  messagingSenderId: "503610169839",
  appId: "1:503610169839:web:e29b7d7464d020ac56be1a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
