import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAmQMc3Ut5LuqvJ6WYZlZjPeyqqyjh-uqg",
  authDomain: "mymemo-60af1.firebaseapp.com",
  projectId: "mymemo-60af1",
  storageBucket: "mymemo-60af1.appspot.com",
  messagingSenderId: "691329737816",
  appId: "1:691329737816:web:061cd5f603961f5cfc162d",
  measurementId: "G-CS5JP8DE5T"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);

export const db = getFirestore();