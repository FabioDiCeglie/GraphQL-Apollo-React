import { gql } from "@apollo/client";

export const FEED_QUERY = gql`
  query {
    feed {
      id
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`;
