import td from "testdouble";

import { GqlContext, ResolversParentTypes } from "@generated/graphql/types";
import { BookAuthor } from "./BookAuthor";

const testBookAuthor = (
  parent: ResolversParentTypes["Book"],
  context: GqlContext
) => BookAuthor(parent, {}, context, null);

test("BookAuthor", async () => {
  const context = td.object<GqlContext>();

  const BOOK_ID = "book_id";

  let author = {
    name: "authorName",
  };

  td.when(context.dataSources.authorApi.getAuthorFor(BOOK_ID)).thenResolve(
    author
  );

  const parent: ResolversParentTypes["Book"] = {
    id: BOOK_ID,
    library: "",
    title: "",
  };

  const result = await testBookAuthor(parent, context);

  expect(result).toEqual(author);
});
