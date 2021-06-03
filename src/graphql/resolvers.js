import firebaseRequest from "../firebase/firebase.request";

export default {
    Query: {

        /**
         * 
         * getAllFilms request
         * 
         * @example getAllFilms { id }
         * 
         * @returns {Array} Films array. Without sorting
        */
        getAllFilms: () => {
            return firebaseRequest("films");
        },
    
        /**
         * 
         * getAllPersons request
         * 
         * @example getAllPersons { id }
         * 
         * @returns {Array} Persons array. Without sorting
        */
        getAllPersons: () => {
            return firebaseRequest("persons");
        },
    
        /**
         * 
         * getProducers request
         * 
         * @example getProducers { id }
         * 
         * @returns {Array} Persons array. With "producer" type sorting. Sort type = "filter"
        */
        getProducers: () => {
            return firebaseRequest("persons", "filter", "producer");
        },
    
        /**
         * 
         * getActers request
         * 
         * @example getActers { id }
         * 
         * @returns {Array} Persons array. With "acter" type sorting. Sort type = "filter"
        */
        getActers: () => {
            return firebaseRequest("persons", "filter", "acter");
        },
    
        /**
         * 
         * getPerson request
         * 
         * @example getPerson(id: 1) { id }
         * 
         * @returns {Object} Finds an person object by id. Sort type = "find"
        */
        getPerson: (_, { id }) => {
            return firebaseRequest(`/persons/${id}`);
        },
    
        /**
         * 
         * getFilm request
         * 
         * @example getFilm(id: 1) { title }
         * 
         * @returns {Object} Finds an film object by id. Sort type = "find"
        */
        getFilm: (_, { id }) => {
            return firebaseRequest(`/films/${id}`);
        },
    
        /**
         * 
         * getAllTimes request
         * 
         * @example getAllTimes { id }
         * 
         * @returns {Array} Times
        */
        getAllTimes: () => {
            return firebaseRequest("times");
        },
        
        /**
         * 
         * getTime request
         * 
         * @example getTime(id: 2) { id }
         * 
         * @returns {Object} Finds an time object by id. Sort type = "find"
        */
        getTime: (_, { id }) => {
            return firebaseRequest("times", "find", id);
        }
    } 
};