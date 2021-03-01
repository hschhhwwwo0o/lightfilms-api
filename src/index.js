import express from "express";
import { ApolloServer } from "apollo-server-express";

// RESOLVERS
import resolvers from "./resolvers";
import typeDefs from "./typeDefs";

const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
});

server.applyMiddleware({ app })

app.listen({ port: process.env.PORT || 3008 })