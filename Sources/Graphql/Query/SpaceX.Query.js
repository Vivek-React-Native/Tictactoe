import { gql } from '@apollo/client';

const CapsulesQuery = gql`
  query CapsulesQuery($limit: Int, $offset: Int) {
    capsules(limit: $limit, offset: $offset) {
      id
      landings
      reuse_count
      status
      type
    }
  }
`;

const LaunchesPastQuery = gql`
  query LaunchesPastQuery($limit: Int, $offset: Int) {
    launchesPast(limit: $limit, offset: $offset) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
      }
    }
  }
`;

export { CapsulesQuery, LaunchesPastQuery };
