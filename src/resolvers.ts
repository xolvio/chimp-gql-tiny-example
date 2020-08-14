import merge from "lodash/merge";
import { authorResolvers } from "./Author/authorResolvers";
import { libraryResolvers } from "./Library/libraryResolvers";
export const resolvers = merge({}, authorResolvers, libraryResolvers);
