import { RESTDataSource } from "apollo-datasource-rest";

export class AuthorAPI extends RESTDataSource {
  async getAuthorFor(bookId) {
    return authors.find((a) => a.books.includes(bookId));
  }
}

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
