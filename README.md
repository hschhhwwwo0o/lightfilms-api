<img src = "./md/giphyme.gif" width = "100%" />

# API for the lightfilms repository.

# Setup

```sh
$git clone https://github.com/ssandry/lf-api.git
$cd lf-api
```

# Start

```sh
$npm run start # or yarn start
```

# Example of a GraphQL query

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