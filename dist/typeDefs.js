"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _apolloServerExpress = require("apollo-server-express");

const typeDefs = (0, _apolloServerExpress.gql)`
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
var _default = typeDefs;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90eXBlRGVmcy5qcyJdLCJuYW1lcyI6WyJ0eXBlRGVmcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLFFBQVEsR0FBRyw2QkFBSTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBMUVBO2VBNEVlQSxRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsIH0gZnJvbSBcImFwb2xsby1zZXJ2ZXItZXhwcmVzc1wiO1xyXG5cclxuY29uc3QgdHlwZURlZnMgPSBncWxgXHJcbiAgICB0eXBlIENhcmQge1xyXG4gICAgICAgIGlkOiBJRCFcclxuICAgICAgICBoMzogU3RyaW5nIVxyXG4gICAgICAgIGg2dG9wOiBTdHJpbmchXHJcbiAgICAgICAgaDZib3Q6IFN0cmluZyFcclxuXHJcbiAgICAgICAgaW1nOiBTdHJpbmdcclxuICAgICAgICBpbWdzOiBbU3RyaW5nXVxyXG4gICAgfVxyXG5cclxuICAgIHR5cGUgQWJvdXQge1xyXG4gICAgICAgIGltZzogU3RyaW5nXHJcbiAgICAgICAgcGFyYWdyYXBoczogW1N0cmluZ11cclxuICAgIH1cclxuXHJcbiAgICB0eXBlIEFib3V0MiB7XHJcbiAgICAgICAgbW9zdFBvcHVsYXJGaWxtOiBDYXJkIVxyXG4gICAgICAgIHBhcmFncmFwaHM6IFtTdHJpbmddXHJcbiAgICB9XHJcblxyXG4gICAgdHlwZSBGaWxtIHtcclxuICAgICAgICBpZDogSUQhXHJcbiAgICAgICAgdGl0bGU6IFN0cmluZyFcclxuICAgICAgICBwcm9kdWNlZEJ5OiBTdHJpbmchXHJcbiAgICAgICAgY292ZXJJTUc6IFN0cmluZyFcclxuICAgICAgICBnZW5yZXM6IFtTdHJpbmddXHJcbiAgICAgICAgY291bnRyaWVzOiBbU3RyaW5nXVxyXG4gICAgICAgIHllYXI6IFN0cmluZyFcclxuICAgICAgICBwcm9kdWNlcjogQ2FyZCFcclxuICAgICAgICBjb2xsYWdlOiBTdHJpbmchXHJcbiAgICAgICAgYnJpZWZBYm91dDogU3RyaW5nIVxyXG4gICAgICAgIGFib3V0OiBBYm91dCFcclxuICAgICAgICBhY3RlcnM6IFtDYXJkXSFcclxuICAgIH1cclxuXHJcbiAgICB0eXBlIFBlcnNvbiB7XHJcbiAgICAgICAgaWQ6IElEIVxyXG4gICAgICAgIG5hbWU6IFN0cmluZyFcclxuICAgICAgICB0aXRsZTogU3RyaW5nIVxyXG4gICAgICAgIGNvdW50cmllczogW1N0cmluZ10hXHJcbiAgICAgICAgaW1nczogW1N0cmluZ10hXHJcbiAgICAgICAgdHlwZTogU3RyaW5nIVxyXG4gICAgICAgIGFib3V0OiBBYm91dDIhXHJcbiAgICAgICAgYnJpZWZBYm91dDogU3RyaW5nIVxyXG4gICAgICAgIGZpbG1vZ3JhcGh5OiBbQ2FyZF0hXHJcbiAgICAgICAgeWVhcnNQb3B1bGFyOiBbU3RyaW5nXSFcclxuICAgIH1cclxuXHJcbiAgICB0eXBlIHRpbWVTZWN0aW9ucyB7XHJcbiAgICAgICAgdGl0bGU6IFN0cmluZyFcclxuICAgICAgICBwOiBbU3RyaW5nXVxyXG4gICAgfVxyXG5cclxuICAgIHR5cGUgVGltZSB7XHJcbiAgICAgICAgaWQ6IElEIVxyXG4gICAgICAgIHRpdGxlOiBTdHJpbmchXHJcbiAgICAgICAgc2VjdGlvbnM6IFt0aW1lU2VjdGlvbnNdIVxyXG4gICAgICAgIGJlc3RNb3ZpZXM6IFtDYXJkXSFcclxuICAgIH1cclxuXHJcbiAgICB0eXBlIFF1ZXJ5IHtcclxuICAgICAgICBnZXRBbGxGaWxtczogW0ZpbG1dIVxyXG4gICAgICAgIGdldEFsbFBlcnNvbnM6IFtQZXJzb25dIVxyXG5cclxuICAgICAgICBnZXRQcm9kdWNlcnM6IFtQZXJzb25dIVxyXG4gICAgICAgIGdldEFjdGVyczogW1BlcnNvbl0hXHJcblxyXG4gICAgICAgIGdldFBlcnNvbihpZDogSUQhKTogUGVyc29uIVxyXG4gICAgICAgIGdldEZpbG0oaWQ6IElEISk6IEZpbG0hXHJcblxyXG4gICAgICAgIGdldFRpbWUoaWQ6IElEISk6IFRpbWUhXHJcbiAgICAgICAgZ2V0QWxsVGltZXM6IFtUaW1lXSFcclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdHlwZURlZnM7Il19