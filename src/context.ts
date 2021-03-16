import { dataSources } from "./dataSources";

export type GqlContext = { dataSources: ReturnType<typeof dataSources> };
