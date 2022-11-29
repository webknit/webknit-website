import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyCbBdXumN8XmZsH5uuGe1ONSpmSrbSjrnw",
  authDomain: "webknit-ad8b9.firebaseapp.com",
  projectId: "webknit-ad8b9",
  storageBucket: "webknit-ad8b9.appspot.com",
  messagingSenderId: "891324404979",
  appId: "1:891324404979:web:21bf694812872d58a51386",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
