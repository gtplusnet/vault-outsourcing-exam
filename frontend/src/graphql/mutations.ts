import { gql } from '@apollo/client';

export const REGISTER_LEAD = gql`
  mutation RegisterLead($name: String!, $email: String!, $mobile: String!, $postcode: String!, $services: [String!]!) {
    register(name: $name, email: $email, mobile: $mobile, services: $services, postcode: $postcode) {
      id
      name
      email
      mobile
      services
      postcode
    }
  }
`;