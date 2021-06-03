import firebase from "firebase/app";
import "firebase/database";
import firebaseConfig from "./firebase.config";

/**
 *  Initializing the database Firebase 
*/
export default firebase.initializeApp(firebaseConfig).database();