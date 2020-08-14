export const bookResolvers = {
  Book: {
    author: (book) => {
      return authors.find((a) => a.bookTitles.includes(book.title));
    },
  },
};

const authors = [
  {
    name: "Marcus Aurelius",
    bookTitles: ["Meditations"],
  },
  {
    name: "Uncle Bob",
    bookTitles: ["Clean Code"],
  },
];
