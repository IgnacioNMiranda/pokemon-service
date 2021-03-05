import { Description, Name, NamedApiResource } from '../../interfaces';

export interface Generation {
  id: number;
  name: string;
  abilities: NamedApiResource[];
  names: Name[];
  main_region: NamedApiResource;
  moves: NamedApiResource[];
  pokemon_species: NamedApiResource[];
  types: NamedApiResource[];
  version_groups: NamedApiResource[];
}

export interface Pokedex {
  id: number;
  name: string;
  is_main_series: boolean;
  descriptions: Description[];
  names: Name[];
  pokemon_entries: PokemonEntry[];
  region: NamedApiResource;
  version_groups: NamedApiResource[];
}

interface PokemonEntry {
  entry_number: number;
  pokemon_species: NamedApiResource;
}

export interface Version {
  id: number;
  name: string;
  names: Name[];
  version_group: VersionGroup;
}

export interface VersionGroup {
  id: number;
  name: string;
  order: number;
  generation: Generation;
  move_learn_methods: NamedApiResource[];
  pokedexes: NamedApiResource[];
  regions: NamedApiResource[];
  versions: NamedApiResource[];
}
