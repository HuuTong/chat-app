// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN5iN9YoIjfdtvM0Y5fkQKWzdFbXjn-Jk",
  authDomain: "chat-75ed4.firebaseapp.com",
  projectId: "chat-75ed4",
  storageBucket: "chat-75ed4.appspot.com",
  messagingSenderId: "345564408877",
  appId: "1:345564408877:web:3b91112c4d2484c7f61ca4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();