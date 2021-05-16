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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFwaHFsL3R5cGVEZWZzLmpzIl0sIm5hbWVzIjpbInR5cGVEZWZzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsUUFBUSxHQUFHLDZCQUFJO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBekVBO2VBMkVlQSxRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsIH0gZnJvbSBcImFwb2xsby1zZXJ2ZXItZXhwcmVzc1wiO1xyXG5cclxuY29uc3QgdHlwZURlZnMgPSBncWxgXHJcbiAgICB0eXBlIENhcmQge1xyXG4gICAgICAgIGlkOiBJRCFcclxuICAgICAgICBoMzogU3RyaW5nIVxyXG4gICAgICAgIGg2dG9wOiBTdHJpbmchXHJcbiAgICAgICAgaDZib3Q6IFN0cmluZyFcclxuICAgICAgICBpbWc6IFN0cmluZ1xyXG4gICAgICAgIGltZ3M6IFtTdHJpbmddXHJcbiAgICB9XHJcblxyXG4gICAgdHlwZSBBYm91dCB7XHJcbiAgICAgICAgaW1nOiBTdHJpbmdcclxuICAgICAgICBwYXJhZ3JhcGhzOiBbU3RyaW5nXVxyXG4gICAgfVxyXG5cclxuICAgIHR5cGUgQWJvdXQyIHtcclxuICAgICAgICBtb3N0UG9wdWxhckZpbG06IENhcmQhXHJcbiAgICAgICAgcGFyYWdyYXBoczogW1N0cmluZ11cclxuICAgIH1cclxuXHJcbiAgICB0eXBlIEZpbG0ge1xyXG4gICAgICAgIGlkOiBJRCFcclxuICAgICAgICB0aXRsZTogU3RyaW5nIVxyXG4gICAgICAgIHByb2R1Y2VkQnk6IFN0cmluZyFcclxuICAgICAgICBjb3ZlcklNRzogU3RyaW5nIVxyXG4gICAgICAgIGdlbnJlczogW1N0cmluZ11cclxuICAgICAgICBjb3VudHJpZXM6IFtTdHJpbmddXHJcbiAgICAgICAgeWVhcjogU3RyaW5nIVxyXG4gICAgICAgIHByb2R1Y2VyOiBDYXJkIVxyXG4gICAgICAgIGNvbGxhZ2U6IFN0cmluZyFcclxuICAgICAgICBicmllZkFib3V0OiBTdHJpbmchXHJcbiAgICAgICAgYWJvdXQ6IEFib3V0IVxyXG4gICAgICAgIGFjdGVyczogW0NhcmRdIVxyXG4gICAgfVxyXG5cclxuICAgIHR5cGUgUGVyc29uIHtcclxuICAgICAgICBpZDogSUQhXHJcbiAgICAgICAgbmFtZTogU3RyaW5nIVxyXG4gICAgICAgIHRpdGxlOiBTdHJpbmchXHJcbiAgICAgICAgY291bnRyaWVzOiBbU3RyaW5nXSFcclxuICAgICAgICBpbWdzOiBbU3RyaW5nXSFcclxuICAgICAgICB0eXBlOiBTdHJpbmchXHJcbiAgICAgICAgYWJvdXQ6IEFib3V0MiFcclxuICAgICAgICBicmllZkFib3V0OiBTdHJpbmchXHJcbiAgICAgICAgZmlsbW9ncmFwaHk6IFtDYXJkXSFcclxuICAgICAgICB5ZWFyc1BvcHVsYXI6IFtTdHJpbmddIVxyXG4gICAgfVxyXG5cclxuICAgIHR5cGUgdGltZVNlY3Rpb25zIHtcclxuICAgICAgICB0aXRsZTogU3RyaW5nIVxyXG4gICAgICAgIHA6IFtTdHJpbmddXHJcbiAgICB9XHJcblxyXG4gICAgdHlwZSBUaW1lIHtcclxuICAgICAgICBpZDogSUQhXHJcbiAgICAgICAgdGl0bGU6IFN0cmluZyFcclxuICAgICAgICBzZWN0aW9uczogW3RpbWVTZWN0aW9uc10hXHJcbiAgICAgICAgYmVzdE1vdmllczogW0NhcmRdIVxyXG4gICAgfVxyXG5cclxuICAgIHR5cGUgUXVlcnkge1xyXG4gICAgICAgIGdldEFsbEZpbG1zOiBbRmlsbV0hXHJcbiAgICAgICAgZ2V0QWxsUGVyc29uczogW1BlcnNvbl0hXHJcblxyXG4gICAgICAgIGdldFByb2R1Y2VyczogW1BlcnNvbl0hXHJcbiAgICAgICAgZ2V0QWN0ZXJzOiBbUGVyc29uXSFcclxuXHJcbiAgICAgICAgZ2V0UGVyc29uKGlkOiBJRCEpOiBQZXJzb24hXHJcbiAgICAgICAgZ2V0RmlsbShpZDogSUQhKTogRmlsbSFcclxuXHJcbiAgICAgICAgZ2V0VGltZShpZDogSUQhKTogVGltZSFcclxuICAgICAgICBnZXRBbGxUaW1lczogW1RpbWVdIVxyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCB0eXBlRGVmczsiXX0=