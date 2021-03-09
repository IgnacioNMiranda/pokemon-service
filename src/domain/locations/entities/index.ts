import { Name } from '../../entities';
import { PokemonSpecies } from '../../pokemon/entities';

export class PalParkArea {
  id: number;
  name: string;
  names: Name[];
  pokemon_encounters: PalParkEncounterSpecies;
}

export class PalParkEncounterSpecies {
  base_score: number;
  rate: number;
  pokemon_species: PokemonSpecies;
}
