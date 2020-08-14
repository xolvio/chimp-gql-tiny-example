export const libraryResolvers = {
  Query: {
    libraries: () => {
      return libraries;
    },
  },
  Library: {
    books: (library) => {
      return books.filter((b) => b.libraryName === library.branch);
    },
  },
  Book: {
    library: (book) => {
      return libraries.find((l) => l.branch === book.libraryName);
    },
  },
};

const libraries = [{ branch: "Thinkers" }, { branch: "Coders" }];

const books = [
  {
    libraryName: "Thinkers",
    title: "Meditations",
  },
  {
    libraryName: "Coders",
    title: "Clean Code",
  },
];
