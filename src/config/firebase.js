// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAv6QvKFma4OSTeAOiepiasKo_rxoALIBs",
  authDomain: "fir-learn-c6404.firebaseapp.com",
  projectId: "fir-learn-c6404",
  storageBucket: "fir-learn-c6404.appspot.com",
  messagingSenderId: "20040833228",
  appId: "1:20040833228:web:42384113c0fd7217194a69",
  measurementId: "G-7H7F3SPY3G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);