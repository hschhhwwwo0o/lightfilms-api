import firebase from "firebase/app";
import "firebase/database";
import firebaseConfig from "./firebase.config";

/**
 * 
 * Initializing the database Firebase 
 * 
 * Firebase documentation: https://firebase.google.cn/docs
 * 
*/
export default firebase.initializeApp(firebaseConfig).database();