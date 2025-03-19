// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBzxp-bYlKUax0SgoKLTqKqYAEfAp0je_k",
    authDomain: "hola-c2eac.firebaseapp.com",
    projectId: "hola-c2eac",
    storageBucket: "hola-c2eac.firebasestorage.app",
    messagingSenderId: "151398872884",
    appId: "1:151398872884:web:45ed600e66bd28cb23d761",
    measurementId: "G-N5QKKHXQV0",
    databaseURL: "https://hola-c2eac-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;