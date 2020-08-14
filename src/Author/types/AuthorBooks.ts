import { AuthorResolvers } from "@generated/graphql/types";

export const AuthorBooks: AuthorResolvers["books"] = (
  author,
  args,
  { dataSources }
) => {
  return dataSources.libraryApi.getBooksByIds(author.books);
};
