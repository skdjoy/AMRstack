import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";
import merge from "lodash/merge";

import ResolutionSchema from "../../api/resolutions/Resolutions.graphql";
import ResolutionsResolvers from "../../api/resolutions/resolvers";
//hi
const typeDefs = [
  `
        type Query {
            hi: String
            resolutions: [Resolution]
        }
    `,
  ResolutionSchema
];
//test
const resolver = {
  Query: {
    hi() {
      return "Hello Level Up";
    }
  }
};

const resolvers = merge(resolver, ResolutionsResolvers);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({ schema });
