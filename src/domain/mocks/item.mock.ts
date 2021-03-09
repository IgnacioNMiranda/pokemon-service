import { NamedApiResourceList } from '../entities';
import { Item } from '../item/entities';

export const namedAPIResourceListMock: NamedApiResourceList = {
  count: 1,
  next: '/next',
  previous: '/previous',
  results: [
    {
      name: 'master-ball',
      url: 'https://pokeapi.co/api/v2/item/1/',
    },
  ],
};

export const itemMock: Item = {
  id: 1,
  name: 'master-ball',
  cost: 0,
  fling_power: null,
  fling_effect: null,
  attributes: [],
  category: {
    name: 'standard-balls',
    url: 'https://pokeapi.co/api/v2/item-category/34/',
  },
  effect_entries: [],
  flavor_text_entries: [],
  game_indices: [],
  names: [],
  sprites: {
    default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/master-ball.png',
  },
  held_by_pokemon: [],
  baby_trigger_for: null,
  machines: [],
};
