import { gql } from "apollo-server-express";

/**
 *
 * @name typeDefs
 *
 * TypeDefs (Schema) for GraphQL
 * An object that describes the existing entities and their fields
 *
 * Read more about typedefs: https://graphql.org/learn/schema/
 *
 */
const typeDefs = gql`
  type Card {
    id: ID!
    h3: String!
    h6top: String!
    h6bot: String!
    img: String
    imgs: [String]
  }

  type About {
    img: String
    paragraphs: [String]
  }

  type About2 {
    mostPopularFilm: Card!
    paragraphs: [String]
  }

  type Film {
    id: ID!
    title: String!
    producedBy: String!
    coverIMG: String!
    genres: [String]
    countries: [String]
    year: String!
    producer: Card!
    collage: String!
    briefAbout: String!
    about: About!
    acters: [Card]!
  }

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

  type timeSections {
    title: String!
    p: [String]
  }

  type Time {
    id: ID!
    title: String!
    sections: [timeSections]!
    bestMovies: [Card]!
  }

  type Query {
    getAllFilms: [Film]!
    getAllPersons: [Person]!

    getProducers: [Person]!
    getActers: [Person]!

    getPerson(id: ID!): Person!
    getFilm(id: ID!): Film!

    getTime(id: ID!): Time!
    getAllTimes: [Time]!
  }
`;

export default typeDefs;
