const fetch = require("node-fetch")

let films

const getFilms = async () => {
    const data = await fetch("https://api.jsonbin.io/b/605a27a9f0d4144079f2419a/1")
    films = await data.json()
}

const data = getFilms().then( () => { return films } )

getFilms().then( () => { console.log(films) } )