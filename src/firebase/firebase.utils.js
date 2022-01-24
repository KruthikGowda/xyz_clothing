import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBuyOptFf05pqYz-at0_wPcU_-ZAWfdgzA",
  authDomain: "xyzclothing-db.firebaseapp.com",
  projectId: "xyzclothing-db",
  storageBucket: "xyzclothing-db.appspot.com",
  messagingSenderId: "261438502150",
  appId: "1:261438502150:web:698cfc64315c78fec21a87",
  measurementId: "G-X0G85VERD3",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
