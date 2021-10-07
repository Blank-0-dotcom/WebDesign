import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBD4OlQDza1cFv7ZuIpOLfNVMWZ-Eiknqw",
  authDomain: "challenge-4859f.firebaseapp.com",
  databaseURL: "https://challenge-4859f.firebaseio.com",
  projectId: "challenge-4859f",
  storageBucket: "challenge-4859f.appspot.com",
  messagingSenderId: "975022146881",
  appId: "1:975022146881:web:a66ff1d50289aaed970dc0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };