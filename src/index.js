import express from "express";
import { ApolloServer } from "apollo-server-express";
import resolvers from "./graphql/resolvers";
import typeDefs from "./graphql/typeDefs";

const app = express();

/**
 * Make server 
*/
const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
});

/**
 * Apply Middleware on server. (Express) 
*/
server.applyMiddleware({ app });

/**
 * Run server
*/
app.listen({ port: process.env.PORT || 3008 }, () => {
    console.log("");

    process.env.PORT !== undefined ?
    console.log(`Server has been start on http://localhost:${ process.env.PORT }/graphql`) :
    console.log("Server has been start on http://localhost:3008/graphql");
});