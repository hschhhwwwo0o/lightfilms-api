import database from ".";

export default (child, sort, parametr) => {
    let data;

    const getData = async (child) => {
        await database.ref().child(child).get()
        .then((s) => { if ( s.exists() ) { data = s.val() }})
        .catch((error) => { console.error(error) });
    };

    if(sort === "all" || sort === undefined) {
        return getData(child).then(() => { 
            return data 
        });
    } else if(sort === "filter" || sort === "f") {
        return getData(child).then(() => { 
            return data.filter(({ type }) => { 
                return type === parametr 
            });
        });
    } else if(sort === "find") {
        return getData(child).then(() => { 
            return data.find(({ id }) => { 
                return id === parametr
            });
        });
    };
};