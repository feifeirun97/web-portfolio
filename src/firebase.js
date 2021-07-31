import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD_R22HWB4aYT9CuIIKDPWLKHUhJHw8_bo",
  authDomain: "web-twitter-clone.firebaseapp.com",
  projectId: "web-twitter-clone",
  storageBucket: "web-twitter-clone.appspot.com",
  messagingSenderId: "700764848261",
  appId: "1:700764848261:web:255ca6ff227ad8cbf329ec",
  measurementId: "G-W8JXF7V3MD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;