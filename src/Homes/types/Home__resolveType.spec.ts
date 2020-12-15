import td from "testdouble";

import { GqlContext, ResolversParentTypes } from "@generated/graphql/types";
import { Home__resolveType } from "./Home__resolveType";

type ParentType = Parameters<typeof Home__resolveType>[0];

const testHome__resolveType = (parent: ParentType, context: GqlContext) =>
  Home__resolveType(parent, context, null);

test("Home__resolveType House", async () => {
  const context = td.object<GqlContext>();

  const parent = { floors: "10" } as ParentType;

  const result = await testHome__resolveType(parent, context);
  expect(result).toEqual("House");
});

test("Home__resolveType Apartment", async () => {
  const context = td.object<GqlContext>();

  const parent = { floor: "5" } as ParentType;

  const result = await testHome__resolveType(parent, context);
  expect(result).toEqual("Apartment");
});
