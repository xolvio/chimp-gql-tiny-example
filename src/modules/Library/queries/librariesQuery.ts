import { QueryResolvers } from "~generated/graphql/types";

export const librariesQuery: QueryResolvers["libraries"] = (
  _,
  __,
  { dataSources }
) => dataSources.libraryApi.getLibraries();
