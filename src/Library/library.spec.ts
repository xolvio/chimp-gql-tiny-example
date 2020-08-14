import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import SchemaLink from "apollo-link-schema";
import { gql } from "apollo-server";
import { schema } from "@generated/graphql/schema";
import { dataSources } from "../dataSources";

const createClient = () => {
  return new ApolloClient({
    cache: new InMemoryCache({ addTypename: false }),
    link: new SchemaLink({
      schema,
      context: { dataSources: dataSources() },
    }),
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
