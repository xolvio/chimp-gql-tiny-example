import { LibraryAPI } from "./modules/Library/libraryDataSource";
import { AuthorAPI } from "./modules/Author/authorDataSource";

export const dataSources = () => ({
  libraryApi: new LibraryAPI(),
  authorApi: new AuthorAPI(),
});
