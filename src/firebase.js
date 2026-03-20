// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyClXkeRM-cKgFVIv5AI6DOzKihRhgEUwxU",
  authDomain: "elie-and-marietherese.firebaseapp.com",
  projectId: "elie-and-marietherese",
  storageBucket: "elie-and-marietherese.firebasestorage.app",
  messagingSenderId: "152238688917",
  appId: "1:152238688917:web:b966e1f5d9fa1cf8ada99c"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
