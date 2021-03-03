import { Description, Name } from '../../interfaces';

export interface Generation {
  id: number;
  name: string;
  abilities: any[];
  names: Name[];
  main_region: any;
  moves: any;
  pokemon_species: any[];
  types: any[];
  version_groups: any[];
}

export interface Pokedex {
  id: number;
  name: string;
  is_main_series: boolean;
  descriptions: Description[];
  names: any[];
  pokemon_entries: PokemonEntry[];
  region: any;
  version_groups: any[];
}

interface PokemonEntry {
  entry_number: number;
  pokemon_species: any;
}

export interface Version {
  id: number;
  name: string;
  names: [];
  version_group: VersionGroup;
}

export interface VersionGroup {
  id: number;
  name: string;
  order: number;
  generation: Generation;
  move_learn_methods: any[];
  // 'move_learn_methods': MoveLearnMethod[],
  pokedexes: Pokedex[];
  // regions: Region[],
  regions: any[];
  versions: Version[];
}
