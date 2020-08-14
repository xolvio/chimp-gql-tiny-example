import { BookResolvers } from "@generated/graphql/types";

export const BookAuthor: BookResolvers["author"] = (
  book,
  args,
  { dataSources }
) => {
  return dataSources.authorApi.getAuthorFor(book.id);
};
