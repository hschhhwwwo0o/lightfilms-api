import express from "express";
import { ApolloServer } from "apollo-server-express";
import resolvers from "./graphql/resolvers";
import typeDefs from "./graphql/typeDefs";

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

server.applyMiddleware({ app });

app.listen({ port: process.env.PORT || 3008 });
