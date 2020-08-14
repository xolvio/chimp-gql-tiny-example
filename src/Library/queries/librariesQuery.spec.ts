import td from "testdouble";
import { GqlContext } from "@generated/graphql/types";
import { librariesQuery } from "./librariesQuery";

const testlibraries = (context: GqlContext) =>
  librariesQuery({}, {}, context, null);

test("libraries", async () => {
  const context = td.object<GqlContext>();

  const libraries = [{ branch: "someBranch", id: "someId" }];
  td.when(context.dataSources.libraryApi.getLibraries()).thenResolve(libraries);

  const result = await testlibraries(context);

  expect(result).toEqual(libraries);
});
