// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRfLHBzRydk_pWKxnLW3Gb81Ojojh1FQY",
  authDomain: "clone-12b4c.firebaseapp.com",
  projectId: "clone-12b4c",
  storageBucket: "clone-12b4c.appspot.com",
  messagingSenderId: "1067165585066",
  appId: "1:1067165585066:web:5bc4c25e6a612bd77d4ad3",
  measurementId: "G-H7QSQP9YST",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
