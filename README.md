<img src="./md/__frame.png" width="100%" />

## 🚀 API for the lightfilms repository.

**Live preview [here]** <br />
**Deployed thanks to [Heroku]**

## Setup

**To start, you need a [NodeJS]** <br />
**Install && Setup project**

```sh
$git clone https://github.com/ssandry/lf-api.git
$cd lf-api
$npm install # or yarn 
```

## Start

**Start GraphQL server**

```sh
$npm run start # or yarn start
```

## GraphQL type description

**GraphQL type Film**
**Check all types <a href = "https://github.com/ssandry/lf-api/blob/main/api/schema.gql"><i>here</i></a>**

```graphql
type Film {
    id: ID!
    title: String!
    coverIMG: String!
    genres: [String]
    countries: [String]
    year: String!
    producer: Card!
    about: About!
}
```

## GraphQL query

**More GraphQL query examples <a href = "https://github.com/ssandry/lf-api/blob/main/queries.md"><i>here</i></a>**

```graphql
{
  getAllFilms {
    id
    title
    about
  }
}
```

## Example of a GraphQL response

```json
{
  "data": {
    "getAllFilms": [
      {
        "id": "0",
        "title": "Male-female",
        "about": "About Film"
      }
    ]
  }
}
```

## Useful documentation

- **https://habr.com/ru/post/424199/**
- **https://www.apollographql.com/docs/react/data/queries/**
- **https://www.apollographql.com/docs/react/data/fragments/**

[here]: <https://lightfilms-api.herokuapp.com/graphql>
[Heroku]: <https://dashboard.heroku.com/>
[NodeJS]: <https://dashboard.heroku.com/>
