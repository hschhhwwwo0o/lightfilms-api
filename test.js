const fetch = require("node-fetch");

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/database");
// Set the configuration for your app
// TODO: Replace with your project's config object
var config = {
    apiKey: "AIzaSyBxNIFC2yeKJLPzRnceEFZCzaOSS-K72Mw",
    authDomain: "light-2b1fe.firebaseapp.com",
    // For databases not in the us-central1 location, databaseURL will be of the
    // form https://[databaseName].[region].firebasedatabase.app.
    // For example, https://your-database-123.europe-west1.firebasedatabase.app
    databaseURL: "https://light-2b1fe-default-rtdb.firebaseio.com",
    storageBucket: "light-2b1fe.appspot.com"
};

firebase.initializeApp(config);

let database = firebase.database();

database.ref().child("films").child(1).get().then(function(snapshot) {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    }
    else {
      console.log("No data available");
    }
  }).catch(function(error) {
    console.error(error);
});
  

// let films

// const getFilms = async () => {
//     const data = await fetch("https://api.jsonbin.io/b/605a27a9f0d4144079f2419a/1")
//     films = await data.json()
// }

// const data = getFilms().then( () => { return films } )

// getFilms().then( () => { console.log(films) } )