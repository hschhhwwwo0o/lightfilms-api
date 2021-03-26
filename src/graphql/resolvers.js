require("dotenv").config();

import fetch from "node-fetch";

const __URL = process.env.JSONBIN_DB;



var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/database");

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

module.exports = {
    Query: {
        getAllFilms: () => {

            let data

            const getData = async () => {
                await database.ref().child("films").get()
                .then( 
                    (s) => { if ( s.exists() ) {  data = s.val() } }
                )
                .catch( (error) => { console.error(error) });
            }

            return getData().then( () => { return data } )
        },
    
        getAllPersons: () => {

            let data

            const getData = async () => {
                const res = await fetch(__URL)
                data = await res.json()
            }

            return getData().then( () => { return data.persons } )
        },
    
        getProducers: () => {

            let data

            const getData = async () => {
                const res = await fetch(__URL)
                data = await res.json()
            }

            return getData().then( () => { return data.persons.filter( (p) => { return p.type === "producer" } ) } )

            //return persons.filter( (p) => { return p.type === "producer" } )
        },
    
        getActers: () => {

            let data

            const getData = async () => {
                const res = await fetch(__URL)
                data = await res.json()
            }

            return getData().then( () => { return data.persons.filter( (p) => { return p.type === "acter" } ) } )
        },
    
        getPerson: ( _, params ) => {

            let data

            const getData = async () => {
                const res = await fetch(__URL)
                data = await res.json()
            }

            return getData().then( () => { return data.persons.find( ({ id }) => { return id === params.id } ) } )
        },
    
        getFilm: ( _, params ) => {

            let data

            const getData = async () => {
                const res = await fetch(__URL)
                data = await res.json()
            }

            return getData().then( () => { return data.films.find( ({ id }) => { return id === params.id } ) } )
        },
    
        getAllTimes: () => {

            let data

            const getData = async () => {
                const res = await fetch(__URL)
                data = await res.json()
            }

            return getData().then( () => { return data.times } )
        },
        
        getTime: ( _, params ) => {

            let data

            const getData = async () => {
                const res = await fetch(__URL)
                data = await res.json()
            }

            return getData().then( () => { return data.times.find( ({ id }) => { return id === params.id } ) } )
        }
    } 
}