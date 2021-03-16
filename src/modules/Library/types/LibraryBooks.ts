import { LibraryResolvers } from "~generated/graphql/types";

export const LibraryBooks: LibraryResolvers["books"] = (
  library,
  _,
  { dataSources }
) => dataSources.libraryApi.getBooksFor(library.id);
