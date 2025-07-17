// firebase-config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC6G7JfaTCSpvwkX4PXTTJ6I92LIpzkkxk",
  authDomain: "belediyeenvanter.firebaseapp.com",
  projectId: "belediyeenvanter",
  storageBucket: "belediyeenvanter.firebasestorage.app",
  messagingSenderId: "1088833874170",
  appId: "1:1088833874170:web:2e2c1c069a9880917b8143",
  measurementId: "G-6G8V5MLPYN"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db };
