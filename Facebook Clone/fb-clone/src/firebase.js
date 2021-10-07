import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDhUL6zTwRkOkXr7GLbBjc4YbAJxcJD0D0",
    authDomain: "facebook-clone-dc424.firebaseapp.com",
    projectId: "facebook-clone-dc424",
    storageBucket: "facebook-clone-dc424.appspot.com",
    messagingSenderId: "69127725033",
    appId: "1:69127725033:web:3d5a4b1e131b6db7f17578"
};

// npm i firebase to install firebase into our project

const firebaseApp = firebase.initializeApp(firebaseConfig);
// connect react frontend with react backend 
const db = firebaseApp.firestore();
// access to the database
const auth = firebase.auth();
// authentication
const provider = new firebase.auth.GoogleAuthProvider();
// tell Google we want the Google Login service

export { auth, provider };
export default db;
