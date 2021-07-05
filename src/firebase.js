import firebase from "firebase";
const firebaseConfig=({
your firebase config
});

// Initialize Firebase 🔥 🔥 🔥 🔥
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export { auth };
// firebase.analytics();
