import td from "testdouble";

import { GqlContext, ResolversParentTypes } from "@generated/graphql/types";
import { BookLibrary } from "./BookLibrary";

const testBookLibrary = (
  parent: ResolversParentTypes["Book"],
  context: GqlContext
) => BookLibrary(parent, {}, context, null);

test("BookLibrary", async () => {
  const context = td.object<GqlContext>();

  const matchingBranch = { branch: "matchingBranch", id: "matchingId" };
  td.when(context.dataSources.libraryApi.getLibraries()).thenResolve([
    { branch: "otherBranch", id: "someId" },
    matchingBranch,
  ]);

  const parent: ResolversParentTypes["Book"] = {
    library: "matchingId",
    title: "",
    id: "",
  };

  const result = await testBookLibrary(parent, context);

  expect(result).toEqual(matchingBranch);
});
