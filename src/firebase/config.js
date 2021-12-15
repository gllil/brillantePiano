// imported firebase after npm install
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
import "firebase/functions";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUZrNv6bClcFRCcIfuA0ED2Te-cmws4Bs",
  authDomain: "brillante-piano.firebaseapp.com",
  projectId: "brillante-piano",
  storageBucket: "brillante-piano.appspot.com",
  appId: "1:662839515080:web:09087d2b891c1f9e4012fd",
};

//called firebase.intializeApp to initialize app
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

//declaring variables for each of the the methods we will use to call the data we need
const firestore = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const functions = firebase.functions();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
//exporting deconstructed variables for multiple reuse in other components
export { firestore, storage, auth, functions, timestamp };
