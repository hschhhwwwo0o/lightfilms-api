require("dotenv").config();

import fetch from "node-fetch";

const __URL = process.env.JSONBIN_DB;

// Firebase
import firebase from "firebase/app";
import "firebase/database";

// Firebase config
import firebaseConfig from "../firebase.config";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export default {
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