import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";
import merge from "lodash/merge";

import GoalSchema from "../../api/goals/Goals.graphql";
import GoalResolvers from "../../api/goals/resolvers";
import ResolutionSchema from "../../api/resolutions/Resolutions.graphql";
import ResolutionResolvers from "../../api/resolutions/resolvers";
import UserSchema from "../../api/users/User.graphql";
import UserResolvers from "../../api/users/resolvers";
//hsss
const typeDefs = [GoalSchema, ResolutionSchema, UserSchema];

const resolvers = merge(GoalResolvers, ResolutionResolvers, UserResolvers);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({ schema });
