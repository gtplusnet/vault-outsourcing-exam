import { ApolloServer, gql } from "apollo-server";
import { importSchema } from 'graphql-import';
import { resolvers } from './graphql/resolvers';

const typeDefs = gql(importSchema("src/graphql/schema.graphql"));

export const server = new ApolloServer({ typeDefs, resolvers });