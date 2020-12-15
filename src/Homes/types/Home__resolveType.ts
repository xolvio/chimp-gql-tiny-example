import { HomeResolvers } from "@generated/graphql/types";

export const Home__resolveType: HomeResolvers["__resolveType"] = (
  parent,
  context
) => {
  if ("floors" in parent) {
    return "House";
  }
  if ("floor" in parent) {
    return "Apartment";
  }
};
