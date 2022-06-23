// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyByWD8IrNVvBp8OeOy4uvfp05XxtKDqGhU",
    authDomain: "crud-simples-d523f.firebaseapp.com",
    projectId: "crud-simples-d523f",
    storageBucket: "crud-simples-d523f.appspot.com",
    messagingSenderId: "967361955582",
    appId: "1:967361955582:web:4cddf6ef7fe66cd4a7c7af"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
