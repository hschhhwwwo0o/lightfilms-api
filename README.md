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

# GraphQL type description

**GraphQL type Person.**
**Check all types <a href = "https://github.com/ssandry/lf-api/blob/main/api/schema.gql"><i>here</i></a>**

```graphql
type Person {
    id: ID!
    name: String!
    title: String!
    countries: [String]!
    imgs: [String]!
    type: String!
    about: About2!
    briefAbout: String!
    filmography: [Card]!
    yearsPopular: [String]!
}
```

# GraphQL query

**More GraphQL query examples <a href = "https://github.com/ssandry/lf-api/blob/main/queries.md"><i>here</i></a>**

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