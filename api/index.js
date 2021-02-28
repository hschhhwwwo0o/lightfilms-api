import express from "express";
import { ApolloServer } from "apollo-server-express";

// RESOLVERS
import resolvers from "./resolvers";
import typeDefs from "./typeDefs";

const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.applyMiddleware({ app })

app.listen({ port: 3008 })