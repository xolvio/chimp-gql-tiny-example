import td from "testdouble";

import { GqlContext, ResolversParentTypes } from "@generated/graphql/types";
import { AuthorBooks } from "./AuthorBooks";

const testAuthorBooks = (
  parent: ResolversParentTypes["Author"],
  context: GqlContext
) => AuthorBooks(parent, {}, context, null);

test("AuthorBooks", async () => {
  const context = td.object<GqlContext>();

  const BOOK_IDS = ["someId"];

  const parent: ResolversParentTypes["Author"] = {
    name: "",
    books: BOOK_IDS,
  };

  let BOOKS = [{ id: "someId", library: "", title: "" }];
  td.when(context.dataSources.libraryApi.getBooksByIds(BOOK_IDS)).thenResolve(
    BOOKS
  );
  const result = await testAuthorBooks(parent, context);

  expect(result).toEqual(BOOKS);
});
