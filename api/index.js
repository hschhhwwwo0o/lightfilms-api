import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import { readFileSync } from "fs";

// RESOLVERS
import resolvers from "./resolvers";

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