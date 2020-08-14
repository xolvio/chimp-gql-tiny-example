import { LibraryResolvers } from "@generated/graphql/types";

export const LibraryBooks: LibraryResolvers["books"] = (
  library,
  args,
  { dataSources }
) => {
  return dataSources.libraryApi.getBooksFor(library.id);
};
