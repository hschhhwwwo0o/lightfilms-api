![API Presentation](md/__preview.png "API Presentation")

## API for the lightfilms repository

**[LIGHTFILMS]**

**Live preview [here]** \
**Deployed thanks to [Heroku]** \
**Database: [Firebase]**

**Used package manager: [NPM]**

## GraphQL type description

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

<br />

Made with love ❤️

I'm on Telegram: **@ssandry0** \
I'm on Behance: **https://www.behance.net/aftertaste** \
I'm on Dribbble: **https://dribbble.com/ssandry0**

[lightfilms]: https://github.com/ssandry/lightfilms
[here]: https://lightfilms-api.herokuapp.com/graphql
[firebase]: https://firebase.google.com/
[heroku]: https://dashboard.heroku.com/
[nodejs]: https://dashboard.heroku.com/
[npm]: https://www.npmjs.com/
