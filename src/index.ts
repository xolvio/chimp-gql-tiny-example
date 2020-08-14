import { ApolloServer } from "apollo-server";
import { schemaWithResolvers } from "./schema";

const server = new ApolloServer({ schema: schemaWithResolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
