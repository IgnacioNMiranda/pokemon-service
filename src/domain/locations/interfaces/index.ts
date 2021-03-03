import { Name } from 'src/domain/interfaces';
import { PokemonSpecies } from 'src/domain/pokemon/interfaces';

export interface PalParkArea {
  id: number;
  name: string;
  names: Name[];
  pokemon_encounters: PalParkEncounterSpecies;
}

export interface PalParkEncounterSpecies {
  base_score: number;
  rate: number;
  pokemon_species: PokemonSpecies;
}
