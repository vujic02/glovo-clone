import firebase from "firebase/compat";
import "firebase/firestore";
import "firebase/auth";
import {  getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATiflYD1G1QVUWLekBWGaFSVPbocTVQOI",
  authDomain: "glovo-clone2023.firebaseapp.com",
  projectId: "glovo-clone2023",
  storageBucket: "glovo-clone2023.appspot.com",
  messagingSenderId: "649308913438",
  appId: "1:649308913438:web:5960828dcc32d0b2ed130f"
};

let app = null;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth};