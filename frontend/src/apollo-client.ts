// src/apollo-client.ts
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.GRAPHQL_URL || 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

export default client;