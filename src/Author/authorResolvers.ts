export const authorResolvers = {
  Book: {
    author: (book) => {
      return authors.find((a) => a.books.includes(book.id));
    },
  },
};

const authors = [
  {
    name: "Marcus Aurelius",
    books: ["1"],
  },
  {
    name: "Uncle Bob",
    books: ["2"],
  },
];
