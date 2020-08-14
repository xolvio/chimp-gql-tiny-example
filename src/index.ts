import { ApolloServer } from "apollo-server";
import { schema } from "@generated/graphql/schema";
import { dataSources } from "./dataSources";

const server = new ApolloServer({ schema, dataSources });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
