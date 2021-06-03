import firebaseRequest from "../firebase/firebase.request";

export default {
    Query: {

        /**
         * 
         * Make request
         * 
         * @returns {Array} Films array. Without sorting
        */
        getAllFilms: () => {
            return firebaseRequest("films");
        },
    
        /**
         * 
         * Make request
         * 
         * @returns {Array} Persons array. Without sorting
        */
        getAllPersons: () => {
            return firebaseRequest("persons");
        },
    
        /**
         * 
         * Make request
         * 
         * @returns {Array} Persons array. With "producer" type sorting. Sort type = "filter"
        */
        getProducers: () => {
            return firebaseRequest("persons", "filter", "producer");
        },
    
        /**
         * 
         * Make request
         * 
         * @returns {Array} Persons array. With "acter" type sorting. Sort type = "filter"
        */
        getActers: () => {
            return firebaseRequest("persons", "filter", "acter");
        },
    
        /**
         * 
         * Make request
         * 
         * @returns {Object} Finds an person object by id. Sort type = "find"
        */
        getPerson: (_, { id }) => {
            return firebaseRequest(`/persons/${id}`);
        },
    
        /**
         * 
         * Make request
         * 
         * @returns {Object} Finds an film object by id. Sort type = "find"
        */
        getFilm: (_, { id }) => {
            return firebaseRequest(`/films/${id}`);
        },
    
        /**
         * 
         * Make request
         * 
         * @returns {Array} Times
        */
        getAllTimes: () => {
            return firebaseRequest("times");
        },
        
        /**
         * 
         * Make request
         * 
         * @returns {Object} Finds an time object by id. Sort type = "find"
        */
        getTime: (_, { id }) => {
            return firebaseRequest("times", "find", id);
        }
    } 
};