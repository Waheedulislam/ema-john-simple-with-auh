// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCOxJNPs3N0JVcC7r61S5zqDGDDzE9vNtM",
    authDomain: "ema-john-simple-353a4.firebaseapp.com",
    projectId: "ema-john-simple-353a4",
    storageBucket: "ema-john-simple-353a4.appspot.com",
    messagingSenderId: "148659859683",
    appId: "1:148659859683:web:2bd16a77313dbc2d7255d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

expect default auth;