export const libraryResolvers = {
  Query: {
    libraries: () => {
      return libraries;
    },
  },
  Library: {
    books: (library) => {
      return books.filter((b) => b.library === library.id);
    },
  },
  Book: {
    library: (book) => {
      return libraries.find((l) => l.id === book.library);
    },
  },
};

const libraries = [
  { id: "lib-1", branch: "Thinkers" },
  { id: "lib-2", branch: "Coders" },
];

const books = [
  {
    id: "1",
    library: "lib-1",
    title: "Meditations",
  },
  {
    id: "2",
    library: "lib-2",
    title: "Clean Code",
  },
];
