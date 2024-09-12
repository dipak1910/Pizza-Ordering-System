// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCxK-7L-cod5w0VJfc6OK-LJ-Pd4V-ZvXc",
  authDomain: "pizzaslice-by-dipak.firebaseapp.com",
  projectId: "pizzaslice-by-dipak",
  storageBucket: "pizzaslice-by-dipak.appspot.com",
  messagingSenderId: "665235858562",
  appId: "1:665235858562:web:0e90d80e4ab3e886a4809b"
};


const app = initializeApp(firebaseConfig);
export let auth = getAuth()
export let db = getFirestore()