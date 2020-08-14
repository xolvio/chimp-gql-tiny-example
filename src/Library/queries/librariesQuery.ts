import { QueryResolvers } from "@generated/graphql/types";

export const librariesQuery: QueryResolvers["libraries"] = (
  _,
  args,
  { dataSources }
) => {
  return dataSources.libraryApi.getLibraries();
};
