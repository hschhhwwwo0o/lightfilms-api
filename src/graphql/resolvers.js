import firebaseRequest from "../firebase/firebase.request";

export default {
    Query: {
        getAllFilms: () => {
            return firebaseRequest("films");
        },
    
        getAllPersons: () => {
            return firebaseRequest("persons");
        },
    
        getProducers: () => {
            return firebaseRequest("persons", "filter", "producer");
        },
    
        getActers: () => {
            return firebaseRequest("persons", "filter", "acter");
        },
    
        getPerson: (_, { id }) => {
            return firebaseRequest(`/persons/${id}`);
        },
    
        getFilm: (_, { id }) => {
            return firebaseRequest(`/films/${id}`);
        },
    
        getAllTimes: () => {
            return firebaseRequest("times");
        },
        
        getTime: (_, { id }) => {
            return firebaseRequest("times", "find", id);
        }
    } 
};