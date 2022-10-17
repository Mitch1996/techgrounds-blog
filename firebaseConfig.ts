import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCgQnmMqKKXzrrHOy7xCRhQz9MiZV-nW_w",
  authDomain: "tg-testing-a6f41.firebaseapp.com",
  databaseURL:
    "https://tg-testing-a6f41-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tg-testing-a6f41",
  storageBucket: "tg-testing-a6f41.appspot.com",
  messagingSenderId: "781097526969",
  appId: "1:781097526969:web:4a4232e0272861123add68",
  measurementId: "G-21M6FHLPYN",
};

// Initialize Firebase
 
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

