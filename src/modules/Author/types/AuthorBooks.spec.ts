import td from "testdouble";
import {
  GqlContext,
  ParentType,
  testAuthorBooks,
} from "~generated/graphql/helpers/AuthorBooksSpecWrapper";

test("AuthorBooks", async () => {
  const context = td.object<GqlContext>();
  // td.when(context.AuthorRepository.findOne()).thenResolve()
  // const parent: ParentType = {}

  // const result = await testAuthorBooks(parent,  context);
});
