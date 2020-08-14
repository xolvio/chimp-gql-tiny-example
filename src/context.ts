import { dataSources } from "@app/dataSources";

export type GqlContext = {} & { dataSources: ReturnType<typeof dataSources> };
