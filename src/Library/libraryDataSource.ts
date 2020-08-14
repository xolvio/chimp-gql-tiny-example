import { RESTDataSource } from "apollo-datasource-rest";

export class LibraryAPI extends RESTDataSource {
  async getBooksFor(libraryId) {
    return books.filter((b) => b.library === libraryId);
  }

  async getLibraries() {
    return libraries;
  }

  async getBooksByIds(bookIds: string[]) {
    return books.filter((b) => bookIds.includes(b.id));
  }
}

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
