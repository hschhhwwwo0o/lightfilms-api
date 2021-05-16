import firebase from "firebase/app";
import "firebase/database";
import firebaseConfig from "./firebase.config";

export default firebase.initializeApp(firebaseConfig).database();