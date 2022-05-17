import { gql } from "@apollo/client";

export const LOAD__URLS = gql`
  query {
    getAllUrl {
      originalUrl
      shortUrl
    }
  }
`;
