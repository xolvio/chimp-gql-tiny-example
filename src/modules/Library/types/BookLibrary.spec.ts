import td from "testdouble";
import {
  GqlContext,
  ParentType,
  testBookLibrary,
} from "~generated/graphql/helpers/BookLibrarySpecWrapper";

test("BookLibrary", async () => {
  const context = td.object<GqlContext>();

  td.when(context.dataSources.libraryApi.getLibraries()).thenResolve([
    { id: "matchingId", branch: "matching branch" },
    { id: "nonMatchingId", branch: "nonMatchingBranch" },
  ]);
  const parent: ParentType = { id: "", library: "matchingId", title: "" };

  const result = await testBookLibrary(parent, context);

  expect(result).toEqual({ id: "matchingId", branch: "matching branch" });
});
