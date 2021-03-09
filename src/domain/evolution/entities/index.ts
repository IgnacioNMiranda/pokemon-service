import { Name } from '../../entities';
import { Item } from '../../item/entities';
import { Move } from '../../move/entities';
import { PokemonSpecies, Type } from '../../pokemon/entities';

export class EvolutionChain {
  id: number;
  baby_trigger_item: Item;
  chain: ChainLink;
}

export class ChainLink {
  is_baby: boolean;
  species: PokemonSpecies;
  evolution_details: EvolutionDetail;
  evolves_to: ChainLink[];
}

export class EvolutionDetail {
  item: Item;
  trigger: EvolutionTrigger;
  gender: number;
  held_item: Item;
  known_move: Move;
  known_move_type: Type;
  location: Location;
  min_level: number;
  min_happiness: number;
  min_beauty: number;
  min_affection: number;
  needs_overworld_rain: boolean;
  party_species: PokemonSpecies;
  party_type: Type;
  relative_physical_stats: number;
  time_of_day: string;
  trade_species: PokemonSpecies;
  turn_upside_down: boolean;
}

export class EvolutionTrigger {
  id: number;
  name: string;
  names: Name[];
  pokemon_species: PokemonSpecies[];
}
