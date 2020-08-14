import td from "testdouble";

import { GqlContext, ResolversParentTypes } from "@generated/graphql/types";
import { LibraryBooks } from "./LibraryBooks";

const testLibraryBooks = (
  parent: ResolversParentTypes["Library"],
  context: GqlContext
) => LibraryBooks(parent, {}, context, null);

test("LibraryBooks", async () => {
  const context = td.object<GqlContext>();

  const LIBRARY_ID = "LIBRARY_ID";
  let BOOKS = [{ title: "someTitle", library: "", id: "" }];
  td.when(context.dataSources.libraryApi.getBooksFor(LIBRARY_ID)).thenResolve(
    BOOKS
  );

  const parent: ResolversParentTypes["Library"] = {
    id: LIBRARY_ID,
    branch: "",
  };

  const result = await testLibraryBooks(parent, context);
  expect(result).toEqual(BOOKS);
});
