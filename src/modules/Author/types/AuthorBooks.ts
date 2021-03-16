import { AuthorResolvers } from "~generated/graphql/types";

export const AuthorBooks: AuthorResolvers["books"] = (parent, args, context) =>
  context.dataSources.libraryApi.getBooksByIds(parent.books);
