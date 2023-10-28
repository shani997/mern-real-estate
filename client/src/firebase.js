// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "estate-8426e.firebaseapp.com",
    projectId: "estate-8426e",
    storageBucket: "estate-8426e.appspot.com",
    messagingSenderId: "934897319172",
    appId: "1:934897319172:web:13d01899823e0a6123a451"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
