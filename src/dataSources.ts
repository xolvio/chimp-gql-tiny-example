import { LibraryAPI } from "./Library/libraryDataSource";
import { AuthorAPI } from "./Author/authorDataSource";

export const dataSources = () => ({
  libraryApi: new LibraryAPI(),
  authorApi: new AuthorAPI(),
});
