import { GraphQLServer, PubSub } from "graphql-yoga";
import Query from "./resolvers/Query";
import Mutation from "./resolvers/Mutation";
import User from "./resolvers/User";
import Score from "./resolvers/Score";
import Subscription from "./resolvers/Subscription";
import userModel from "./models/user";
import "dotenv-defaults/config.js";

const SALT_ROUNDS = Number(process.env.SALT_ROUNDS);

const pubSub = new PubSub();
const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers: {
    Query,
    Mutation,
    Subscription,
    User,
    Score,
  },
  context: {
    saltRounds: SALT_ROUNDS,
    userModel,
    pubSub,
  },
});

export default server;
