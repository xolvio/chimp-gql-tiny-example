import { ApolloServer } from "apollo-server";
import { dataSources } from "./dataSources";
import { schema } from "~generated/graphql/schema";

const server = new ApolloServer({ schema, dataSources });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
