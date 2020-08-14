export const authorResolvers = {
  Book: {
    author: (book, _, { dataSources }) => {
      return dataSources.authorApi.getAuthorFor(book.id);
    },
  },
};
