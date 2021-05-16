import database from ".";

export default (child, sort, parametr) => {
    if(sort === "all" || sort === undefined) {
        let data;
        const getData = async () => {
            await database.ref().child(child).get()
            .then((s) => { if ( s.exists() ) { data = s.val() }})
            .catch((error) => { console.error(error) });
        };

        return getData().then( () => data );
    } else if(sort === "filter") {
        let data;
        const getData = async () => {
            await database.ref()
            .child(child).get()
            .then((s) => { if ( s.exists() ) { data = s.val() }})
            .catch((error) => { console.error(error) });
        };

        return getData().then(() => { 
            return data.filter((p) => { return p.type === parametr });
        });
    } else if(sort === "find") {
        let data;
        const getData = async () => {
            await database.ref()
            .child("times").get()
            .then((s) => { if (s.exists()) { data = s.val() }})
            .catch((error) => { console.error(error) });
        };

        return getData().then(() => { 
            return data.find( ({ id }) => { return id === parametr}) ;
        });
    }
}