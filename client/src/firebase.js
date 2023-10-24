// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "real-estate-5007d.firebaseapp.com",
    projectId: "real-estate-5007d",
    storageBucket: "real-estate-5007d.appspot.com",
    messagingSenderId: "110064965536",
    appId: "1:110064965536:web:04c6fe67737e6fc4e536c5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);