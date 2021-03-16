import { BookResolvers } from "~generated/graphql/types";

export const BookLibrary: BookResolvers["library"] = async (
  book,
  _,
  { dataSources }
) => {
  const libraries = await dataSources.libraryApi.getLibraries();
  return libraries.find((l) => l.id === book.library);
};
