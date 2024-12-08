import { gql } from '@apollo/client';

export const REGISTER_LEAD = gql`
  mutation RegisterLead($name: String!, $email: String!, $mobile: String!, $services: [String!]!) {
    register(name: $name, email: $email, mobile: $mobile, services: $services) {
      id
      name
      email
      mobile
      services
    }
  }
`;