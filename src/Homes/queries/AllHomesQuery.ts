import { QueryResolvers } from "@generated/graphql/types";

export const AllHomesQuery: QueryResolvers["AllHomes"] = (
  parent,
  args,
  context
) => {
  return [
    { address: "dom", floors: "3" },
    { address: "apartment", floor: "10" },
    { address: "dom", floors: "4" },
    { address: "dom", floors: "5" },
  ];
};
