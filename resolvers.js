// DATA
const films = require("./data/films.json");
const persons = require("./data/persons.json");
const times = require("./data/times.json");

module.exports = {

    getAllFilms: () => {
        return films;
    },
    getAllPersons: () => {
        return persons;
    },

    getProducers: () => {
        return persons.filter( (p) => { return p.type === "producer" } )
    },
    getActers: () => {
        return persons.filter( (p) => { return p.type === "acter" } )
    },

    getPerson: (params) => {
        return persons.find( ( {id} ) => { return id === params.id } )
    }
    ,
    getFilm: (params) => {
        return films.find( ( {id} ) => { return id === params.id } )
    },
    getAllTimes: (params) => {
        return times;
    },
    getTime: (params) => {
        return times.find( ( {id} ) => { return id === params.id } )
    }
    
}