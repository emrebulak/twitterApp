// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9RkMga2lDokn-uJxcs44WpPZhgNprIrI",
  authDomain: "twitterapp-c993c.firebaseapp.com",
  projectId: "twitterapp-c993c",
  storageBucket: "twitterapp-c993c.appspot.com",
  messagingSenderId: "429146852423",
  appId: "1:429146852423:web:5d7ef362d973c2eed8b562"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getFirestore(app);

export const provider = new GoogleAuthProvider();
