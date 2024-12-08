import { gql } from '@apollo/client';

export const GET_LEADS = gql`
  query GetLeads {
    leads {
      id
      name
      email
      mobile
      postcode
      services
    }
  }
`;

export const GET_SERVICE_COUNTS = gql`
  query GetServiceCounts {
    serviceCounts {
      delivery
      pickup
      payment
    }
  }
`;