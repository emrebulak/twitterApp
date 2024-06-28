// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9RkMga2lDokn-uJxcs44WpPZhgNprIrI",
  authDomain: "twitterapp-c993c.firebaseapp.com",
  projectId: "twitterapp-c993c",
  storageBucket: "twitterapp-c993c.appspot.com",
  messagingSenderId: "429146852423",
  appId: "1:429146852423:web:5d7ef362d973c2eed8b562"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();