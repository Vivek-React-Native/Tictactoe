import Country from './Country';
import SpaceX from './SpaceX';

export const Query_Navigations = [
  {
    name: 'Countries',
    component: Country,
  },
  {
    name: 'SpaceX',
    component: SpaceX,
  },
];

export const GraphQL_URL = {
  Countries: 'https://countries.trevorblades.com/graphql',
  SpaceX:
    'https://spacex-production.up.railway.app/' ||
    'https://api.spacex.land/graphql',
};
