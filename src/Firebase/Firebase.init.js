// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCwJRcNmfDC9mMjS6pAswcjN2HcQsUGKWE",
    authDomain: "platform-for-learning.firebaseapp.com",
    projectId: "platform-for-learning",
    storageBucket: "platform-for-learning.appspot.com",
    messagingSenderId: "903492518455",
    appId: "1:903492518455:web:d9de60ff73dfae3f90b5b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;