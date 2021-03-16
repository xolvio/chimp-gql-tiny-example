import td from "testdouble";
import {
  GqlContext,
  ParentType,
  testLibraryBooks,
} from "~generated/graphql/helpers/LibraryBooksSpecWrapper";

test("LibraryBooks", async () => {
  const context = td.object<GqlContext>();
  // td.when(context.LibraryRepository.findOne()).thenResolve()
  // const parent: ParentType = {}

  // const result = await testLibraryBooks(parent,  context);
});
