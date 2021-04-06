// Firebase
import firebase from "firebase/app";
import "firebase/database";

// Firebase config
import firebaseConfig from "./firebase.config";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export default database;