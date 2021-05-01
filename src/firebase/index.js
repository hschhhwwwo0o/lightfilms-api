import firebase from "firebase/app";
import "firebase/database";

import firebaseConfig from "./firebase.config";

firebase.initializeApp(firebaseConfig);

export default firebase.database();