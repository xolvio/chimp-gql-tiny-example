import td from "testdouble";
import { GqlContext } from "@generated/graphql/types";
import { AllHomesQuery } from "./AllHomesQuery";

const testAllHomes = (context: GqlContext) =>
  AllHomesQuery({}, {}, context, null);

test.skip("AllHomes", async () => {
  const context = td.object<GqlContext>();

  // td.when(context.HousesRepository.findOne()).thenResolve()

  const result = await testAllHomes(context);
});
