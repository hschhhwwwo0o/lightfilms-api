![API Presentation](md/__frame.png "API Presentation")

## API for the lightfilms repository

**[LIGHTFILMS]** <br />

**Live preview [here]** <br />
**Deployed thanks to [Heroku]** <br />
**Database: [Firebase]**

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

**GraphQL type Film** <br />
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

[LIGHTFILMS]: <https://github.com/ssandry/lightfilms>
[here]: <https://lightfilms-api.herokuapp.com/graphql>
[Firebase]: <https://firebase.google.com/>
[Heroku]: <https://dashboard.heroku.com/>
[NodeJS]: <https://dashboard.heroku.com/>
