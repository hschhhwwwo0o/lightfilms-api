// const fetch = require("node-fetch");

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/database");
// Set the configuration for your app
// TODO: Replace with your project's config object

var firebaseConfig = {
    apiKey: "AIzaSyBxNIFC2yeKJLPzRnceEFZCzaOSS-K72Mw",
    authDomain: "light-2b1fe.firebaseapp.com",
    databaseURL: "https://light-2b1fe-default-rtdb.firebaseio.com",
    projectId: "light-2b1fe",
    storageBucket: "light-2b1fe.appspot.com",
    messagingSenderId: "879405031957",
    appId: "1:879405031957:web:c954eeb23bc06fc607e41c",
    measurementId: "G-MM6HSBWB6C"
};

firebase.initializeApp(firebaseConfig);

let database = firebase.database();

let data = database.ref().child("films").child(0).get().then(
    (s) => {
        if ( s.exists() ) {
            return s.val()
        }
    }).catch( (error) => {
        console.error(error);
});

data.then( () => { console.log( data ) } )
  

// let films

// const getFilms = async () => {
//     const data = await fetch("https://api.jsonbin.io/b/605a27a9f0d4144079f2419a/1")
//     films = await data.json()
// }

// const data = getFilms().then( () => { return films } )

// getFilms().then( () => { console.log(films) } )