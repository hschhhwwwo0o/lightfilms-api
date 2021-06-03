import database from ".";


/**
 * 
 * Make request in firebase database
 * 
 * @example firebaseRequest("persons", "filter", "producer");
 * 
 * @param {string} child Childs databse. Example: "persons", "films", "times"
 * @param {string} sort Sort type. "all", or undefined (blank) - no sorting required. Example sort types: "filter", "find"
 * @param {string} parametr Parametr for sorting 
 * 
 * @returns Data from firebase
*/

const requestFirebase = (child, sort, parametr) => {
    let data;

    
    /**
     * 
     * Function get data from firebase and writes to a variable data
     * 
     * @param {string} child Childs databse. Example: "persons", "films", "times"
     * 
     * @returns {Promise} Data from firebase
    */

    const getData = async (child) => {
        await database.ref().child(child).get()
        .then((s) => { if ( s.exists() ) { data = s.val() }})
        .catch((error) => { console.error(error) });
    };


    if(sort === "all" || sort === undefined) {

        /**
         * 
         * Without sorting 
         * 
         * @returns {Array} Return all data. Without sorting 
         * 
        */
        return getData(child).then(() => { 
            return data 
        });

    }
    else if(sort === "filter" || sort === "f") {

        /**
         * 
         * Allow filter.
         * Use arg "parametr" for sorting 
         * 
         * @return {Array} Return sorted data
         * 
        */
        return getData(child).then(() => { 
            return data.filter(({ type }) => { 
                return type === parametr 
            });
        });
    } 
    else if(sort === "find") {

        /**
         * 
         * Allow filter.
         * Use arg "parametr" for find object on ID 
         * 
         * @return {Object} Return finded object
         * 
        */
        return getData(child).then(() => { 
            return data.find(({ id }) => { 
                return id === parametr
            });
        });
    };
};

export default requestFirebase;