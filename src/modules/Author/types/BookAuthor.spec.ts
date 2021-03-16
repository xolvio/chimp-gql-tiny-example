import td from "testdouble";
import {
  GqlContext,
  ParentType,
  testBookAuthor,
} from "~generated/graphql/helpers/BookAuthorSpecWrapper";

test("BookAuthor", async () => {
  const context = td.object<GqlContext>();
  // td.when(context.AuthorRepository.findOne()).thenResolve()
  // const parent: ParentType = {}

  // const result = await testBookAuthor(parent,  context);
});
