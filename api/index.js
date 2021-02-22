const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const { readFileSync } = require("fs");

// RESOLVERS
const resolvers = require("./resolvers");

// SCHEMA
const SCHEMAGQL = readFileSync(`${__dirname}/schema.gql`, { encoding: "utf8" });
const schema = buildSchema(SCHEMAGQL);

const port = 3008;

const app = express();

app.use("/", graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}))

app.listen(process.env.PORT || port);