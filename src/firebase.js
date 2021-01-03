// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDCyqyqWYMw0XK6GK6L9mDMgBOSBhaonjM",
  authDomain: "clone-89212.firebaseapp.com",
  projectId: "clone-89212",
  storageBucket: "clone-89212.appspot.com",
  messagingSenderId: "176685350980",
  appId: "1:176685350980:web:64f5b4d6bd28bc11f93c11",
  measurementId: "G-80SYZKBFL7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
