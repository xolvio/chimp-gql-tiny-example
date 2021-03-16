import td from "testdouble";
import {
  GqlContext,
  testLibraries,
} from "~generated/graphql/helpers/librariesQuerySpecWrapper";

test("libraries", async () => {
  const context = td.object<GqlContext>();

  // td.when(context.LibraryRepository.findOne()).thenResolve()

  // const result = await testLibraries( context);
});
