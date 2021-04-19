import firebase from "firebase/app";
import "firebase/database";

import firebaseConfig from "./firebase.config";

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export default database;