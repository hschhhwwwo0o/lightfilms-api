import express from "express";
import { ApolloServer } from "apollo-server-express";

import resolvers from "./graphql/resolvers";
import typeDefs from "./graphql/typeDefs";

const app = express();

const DEV_PORT = 3008;

const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
});

server.applyMiddleware({ app });

app.listen({ port: process.env.PORT || DEV_PORT }, () => {
    console.log("");

    process.env.PORT !== undefined ?
    console.log(`Server has been start on http://localhost:${ process.env.PORT }/graphql`) :
    console.log(`Server has been start on http://localhost:${ DEV_PORT }/graphql`)
});