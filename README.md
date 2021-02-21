<img src = "./md/giphyme.gif" width = "100%" />

# API for the lightfilms repository.

# Setup

**Install && Setup project**

```sh
$git clone https://github.com/ssandry/lf-api.git
$cd lf-api
$npm install # or yarn 
```

# Start

**Console command for start GraphQL server**

```sh
$npm run start # or yarn start
```

# GraphQL query

**More GraphQL query examples here**

```graphql
{
  getAllPersons {
    id
    name
    countries
    type
  }
}
```

# Example of a GraphQL response

```json
{
  "data": {
    "getAllFilms": [
      {
        "id": "0",
        "title": "Male-female",
        "briefAbout": "About Film"
      }
    ]
  }
}
```