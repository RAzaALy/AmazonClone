import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBJsxng1FIFUfHgl8Tgir6TX-M-xYRUMZM",
    authDomain: "amaznclone-4ca2c.firebaseapp.com",
    projectId: "amaznclone-4ca2c",
    storageBucket: "amaznclone-4ca2c.appspot.com",
    messagingSenderId: "98709223557",
    appId: "1:98709223557:web:a1c2a9761817cb761111ec",
    measurementId: "G-WXXLP5K62C"
  };

//     // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();