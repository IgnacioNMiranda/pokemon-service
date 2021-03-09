import { NamedApiResourceList } from '../entities';
import { Generation } from '../generation/entities';

export const namedAPIResourceListMock: NamedApiResourceList = {
  count: 1,
  next: null,
  previous: null,
  results: [
    {
      name: 'generation-i',
      url: 'https://pokeapi.co/api/v2/generation/1/',
    },
  ],
};

export const generationMock: Generation = {
  id: 1,
  name: 'generation-i',
  abilities: [],
  names: [],
  main_region: {
    name: 'kanto',
    url: 'https://pokeapi.co/api/v2/region/1/',
  },
  moves: [],
  pokemon_species: [],
  types: [],
  version_groups: [],
};
