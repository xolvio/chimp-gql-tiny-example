import { ApolloServer } from "apollo-server";
import { schemaWithResolvers } from "./schema";
import { dataSources } from "./dataSources";

const server = new ApolloServer({ schema: schemaWithResolvers, dataSources });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
