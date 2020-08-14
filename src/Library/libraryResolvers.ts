export const libraryResolvers = {
  Query: {
    libraries: (_, __, { dataSources }) => {
      return dataSources.libraryApi.getLibraries();
    },
  },
  Library: {
    books: (library, _, { dataSources }) => {
      return dataSources.libraryApi.getBooksFor(library.id);
    },
  },
  Book: {
    library: async (book, _, { dataSources }) => {
      const libraries = await dataSources.libraryApi.getLibraries();
      return libraries.find((l) => l.id === book.library);
    },
  },
};
