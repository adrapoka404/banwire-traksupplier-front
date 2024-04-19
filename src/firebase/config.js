// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6U0RH1Zt1Iw9Ti4_IDkMZPuf6F6pQnBQ",
  authDomain: "react-cursos-bb34f.firebaseapp.com",
  projectId: "react-cursos-bb34f",
  storageBucket: "react-cursos-bb34f.appspot.com",
  messagingSenderId: "77653943159",
  appId: "1:77653943159:web:cf64e34fb25d885b80b772",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
