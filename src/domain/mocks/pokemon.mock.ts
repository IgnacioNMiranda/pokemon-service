import { NamedApiResourceList } from '../entities';
import { Pokemon } from '../pokemon/entities';

export const namedAPIResourceListMock: NamedApiResourceList = {
  count: 1,
  next: '/next',
  previous: '/previous',
  results: [
    {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/',
    },
  ],
};

export const pokemonMock: Pokemon = {
  id: 1,
  name: 'bulbasaur',
  base_experience: 64,
  height: 7,
  is_default: true,
  order: 1,
  weight: 69,
  abilities: [],
  forms: [],
  game_indices: [],
  held_items: [],
  location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/1/encounters',
  moves: [],
  sprites: {
    front_default: '',
    front_shiny: '',
    front_female: '',
    front_shiny_female: '',
    back_default: '',
    back_shiny: '',
    back_female: '',
    back_shiny_female: '',
  },
  species: {
    name: 'bulbasaur',
    url: 'https://pokeapi.co/api/v2/pokemon-species/1/',
  },
  stats: [],
  types: [
    {
      slot: 1,
      type: {
        name: 'grass',
        url: 'https://pokeapi.co/api/v2/type/12/',
      },
    },
  ],
};
