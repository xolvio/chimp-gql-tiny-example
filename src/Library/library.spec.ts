import { makeExecutableSchema } from "graphql-tools";
import { importSchema } from "graphql-import";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import SchemaLink from "apollo-link-schema";
import { gql } from "apollo-server";

import { resolvers } from "../resolvers";

const createClient = () => {
  let typeDefs = importSchema([
    "src/Library/Library.graphql",
    "src/Book/Book.graphql",
  ]);
  const schema = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers,
  });
  return new ApolloClient({
    cache: new InMemoryCache({ addTypename: false }),
    link: new SchemaLink({ schema, context: {} }),
  });
};

const query = gql`
  query {
    libraries {
      branch
      books {
        author {
          name
        }
        library {
          branch
        }
      }
    }
  }
`;

test("Library Query", async () => {
  const { data } = await createClient().query({ query });

  expect(data).toEqual({
    libraries: [
      {
        books: [
          {
            author: { name: "Marcus Aurelius" },
            library: { branch: "Thinkers" },
          },
        ],
        branch: "Thinkers",
      },
      {
        books: [
          {
            author: { name: "Uncle Bob" },
            library: { branch: "Coders" },
          },
        ],
        branch: "Coders",
      },
    ],
  });
});
