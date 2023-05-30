import { gql } from '@apollo/client';

const Continent_Query = gql`
  query ContinentQuery {
    continents {
      code
      name
    }
  }
`;

const Countries_Query = gql`
  query CountriesQuery($code: ID!) {
    continent(code: $code) {
      countries {
        code
        name
      }
    }
  }
`;

const Country_Query = gql`
  query CountryQuery($code: ID!) {
    country(code: $code) {
      code
      name
      native
      phone
      currency
      emoji
      emojiU
      continent {
        code
        name
      }
    }
  }
`;

export { Continent_Query, Countries_Query, Country_Query };
