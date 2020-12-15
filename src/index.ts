import { ApolloServer } from "apollo-server";
import { schema } from "@generated/graphql/schema";

const server = new ApolloServer({ schema });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
