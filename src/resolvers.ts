import merge from "lodash/merge";
import { bookResolvers } from "./Book/bookResolvers";
import { libraryResolvers } from "./Library/libraryResolvers";
export const resolvers = merge({}, bookResolvers, libraryResolvers);
