import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// Perfectly fine to expose public firebase keys to the front-end
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

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();
export const fromMillis = firebase.firestore.Timestamp.fromMillis;
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;

export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
export const increment = firebase.firestore.FieldValue.increment;

// Helper functions

/**
 * Gets a users/{uid} document with username
 * @param {string} username
 */

export async function getUserWithUsername(username) {
  const usersRef = firestore.collection("users");
  const query = usersRef.where("username", "==", username).limit(1);
  const userDoc = (await query.get()).docs[0];
  return userDoc;
}

/**
 * Converts a firestore document to JSON
 * @param {DocumentSnapshot} doc
 */
export function postToJSON(doc) {
  try {
    const data = doc.data();
    return {
      ...data,
      createdAt: data?.createdAt.toMillis() || 0,
      updatedAt: data?.updatedAt.toMillis() || 0,
    };
  } catch (err) {
    console.log(err);
  }
}
