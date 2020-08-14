import { ApolloServer } from "apollo-server";
import { resolvers } from "./resolvers";
import { importSchema } from "graphql-import";

let typeDefs = importSchema([
  "src/Library/Library.graphql",
  "src/Book/Book.graphql",
]);

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
