import firebase from 'firebase/app';
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyChjpN6MY60L05jtTpvChsxZrsdm58rsg8",
    authDomain: "gqlreactnode99-889.firebaseapp.com",
    projectId: "gqlreactnode99-889",
    storageBucket: "gqlreactnode99-889.appspot.com",
    messagingSenderId: "1097195736825",
    appId: "1:1097195736825:web:6073712ce39373a71e1c28",
    measurementId: "G-EFNMVFN2D9"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  }
  // Initialize Firebase
//   firebase.initializeApp({firebaseConfig});
//   firebase.analytics();

const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleAuthProvider};