"use strict";

var _express = _interopRequireDefault(require("express"));

var _apolloServerExpress = require("apollo-server-express");

var _resolvers = _interopRequireDefault(require("./resolvers"));

var _typeDefs = _interopRequireDefault(require("./typeDefs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// RESOLVERS
const app = (0, _express.default)();
const server = new _apolloServerExpress.ApolloServer({
  typeDefs: _typeDefs.default,
  resolvers: _resolvers.default
});
server.applyMiddleware({
  app
});
app.listen({
  port: process.env.PORT || 3008
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwaS9pbmRleC5qcyJdLCJuYW1lcyI6WyJhcHAiLCJzZXJ2ZXIiLCJBcG9sbG9TZXJ2ZXIiLCJ0eXBlRGVmcyIsInJlc29sdmVycyIsImFwcGx5TWlkZGxld2FyZSIsImxpc3RlbiIsInBvcnQiLCJwcm9jZXNzIiwiZW52IiwiUE9SVCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFHQTs7QUFDQTs7OztBQUZBO0FBSUEsTUFBTUEsR0FBRyxHQUFHLHVCQUFaO0FBRUEsTUFBTUMsTUFBTSxHQUFHLElBQUlDLGlDQUFKLENBQWlCO0FBQzVCQyxFQUFBQSxRQUFRLEVBQVJBLGlCQUQ0QjtBQUU1QkMsRUFBQUEsU0FBUyxFQUFUQTtBQUY0QixDQUFqQixDQUFmO0FBS0FILE1BQU0sQ0FBQ0ksZUFBUCxDQUF1QjtBQUFFTCxFQUFBQTtBQUFGLENBQXZCO0FBRUFBLEdBQUcsQ0FBQ00sTUFBSixDQUFXO0FBQUVDLEVBQUFBLElBQUksRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLElBQVosSUFBb0I7QUFBNUIsQ0FBWCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XHJcbmltcG9ydCB7IEFwb2xsb1NlcnZlciB9IGZyb20gXCJhcG9sbG8tc2VydmVyLWV4cHJlc3NcIjtcclxuXHJcbi8vIFJFU09MVkVSU1xyXG5pbXBvcnQgcmVzb2x2ZXJzIGZyb20gXCIuL3Jlc29sdmVyc1wiO1xyXG5pbXBvcnQgdHlwZURlZnMgZnJvbSBcIi4vdHlwZURlZnNcIjtcclxuXHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcclxuXHJcbmNvbnN0IHNlcnZlciA9IG5ldyBBcG9sbG9TZXJ2ZXIoe1xyXG4gICAgdHlwZURlZnMsXHJcbiAgICByZXNvbHZlcnNcclxufSlcclxuXHJcbnNlcnZlci5hcHBseU1pZGRsZXdhcmUoeyBhcHAgfSlcclxuXHJcbmFwcC5saXN0ZW4oeyBwb3J0OiBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDggfSkiXX0=