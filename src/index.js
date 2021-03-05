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

app.listen({ port: process.env.PORT || 3008 }, () => {
    console.log( "" );
    console.log('\x1b[36m%s\x1b[0m', `Server has been start on http://localhost:${process.env.PORT || 3008}/graphql`);
})