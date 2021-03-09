import { BerryFlavor } from '../../berry/entities';
import { EvolutionChain } from '../../evolution/entities';
import {
  Generation,
  Pokedex,
  Version,
  VersionGroup,
} from '../../generation/entities';
import {
  Description,
  Effect,
  FlavorText,
  GenerationGameIndex,
  Language,
  Name,
  NamedApiResource,
  VerboseEffect,
  VersionGameIndex,
} from '../../entities';
import { Item } from '../../item/entities';
import { PalParkArea } from '../../locations/entities';
import { Move, MoveDamageClass, MoveLearnMethod } from '../../move/entities';
import { PokemonController } from '../controllers/pokemon.controller';
import { ApiProperty } from '@nestjs/swagger';

export class Ability {
  id: number;
  name: string;
  is_main_series: boolean;
  generation: Generation;
  names: Name[];
  effect_entries: VerboseEffect[];
  effect_changes: AbilityEffectChange[];
  flavor_text_entries: AbilityFlavorText[];
  pokemon: AbilityPokemon;
}

export class AbilityEffectChange {
  effect_entries: Effect[];
  version_group: VersionGroup;
}

export class AbilityFlavorText {
  flavor_text: string;
  language: Language;
  version_group: VersionGroup;
}

export class AbilityPokemon {
  is_hidden: boolean;
  slot: number;
  pokemon: PokemonController;
}

export class Characteristic {
  id: number;
  gene_modulo: number;
  possible_values: number[];
}

export class PokemonAbility {
  is_hidden: boolean;
  slot: number;
  ability: Ability;
}

export class PokemonForm {
  id: number;
  name: string;
  order: number;
  form_order: number;
  is_default: boolean;
  is_battle_only: boolean;
  is_mega: boolean;
  form_name: string;
  pokemon: Pokemon;
  sprites: PokemonFormSprites;
  version_group: VersionGroup;
  names: Name[];
  form_names: Name[];
}

export class PokemonFormSprites {
  front_default: string;
  front_shiny: string;
  back_default: string;
  back_shiny: string;
}

export class PokemonHabitat {
  id: number;
  name: string;
  names: Name[];
  pokemon_species: PokemonSpecies[];
}

export class PokemonHeldItem {
  item: Item;
  version_details: PokemonHeldItemVersion[];
}

export class PokemonHeldItemVersion {
  version: Version;
  rarity: number;
}

export class PokemonMove {
  move: Move;
  version_group_details: PokemonMoveVersion[];
}

export class PokemonMoveVersion {
  move_learn_method: MoveLearnMethod;
  version_group: VersionGroup;
  level_learned_at: number;
}

export class PokemonSprites {
  front_default: string;
  front_shiny: string;
  front_female: string;
  front_shiny_female: string;
  back_default: string;
  back_shiny: string;
  back_female: string;
  back_shiny_female: string;
}

export class PokemonSpecies {
  id: number;
  name: string;
  order: number;
  gender_rate: number;
  capture_rate: number;
  base_happiness: number;
  is_babby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  hatch_counter: number;
  has_gender_differences: boolean;
  forms_switchable: boolean;
  growth_rate: GrowthRate;
  pokedex_numbers: PokemonSpeciesDexEntry[];
  egg_groups: EggGroup[];
  color: PokemonColor;
  shape: PokemonShape;
  evolves_from_species: PokemonSpecies;
  evolution_chain: EvolutionChain;
  habitat: PokemonHabitat;
  generation: Generation;
  names: Name[];
  pal_park_encounters: PalParkEncounterArea;
  flavor_text_entries: FlavorText[];
  form_descriptions: Description[];
  genera: Genus[];
  varieties: PokemonSpeciesVariety[];
}

export class Genus {
  genus: string;
  language: Language;
}

export class PalParkEncounterArea {
  base_score: number;
  rate: number;
  area: PalParkArea;
}

export class PokemonSpeciesVariety {
  is_default: boolean;
  pokemon: Pokemon;
}

export class GrowthRate {
  id: number;
  name: string;
  formula: string;
  descriptions: Description[];
  levels: GrowthRateExperienceLevel[];
  pokemon_species: PokemonSpecies[];
}

export class GrowthRateExperienceLevel {
  level: number;
  experience: number;
}

export class PokemonSpeciesDexEntry {
  entry_number: number;
  pokedex: Pokedex;
}

export class EggGroup {
  id: number;
  name: string;
  names: Name[];
  pokemon_species: PokemonSpecies[];
}

export class PokemonColor {
  id: number;
  name: string;
  names: Name[];
  pokemon_species: PokemonSpecies[];
}

export class PokemonShape {
  id: number;
  name: string;
  awesome_names: AwesomeName[];
  names: Name[];
  pokemon_species: PokemonSpecies[];
}

export class AwesomeName {
  awesome_name: string;
  language: Language;
}

export class PokemonType {
  slot: number;
  type: NamedApiResource;
}

export class PokemonStat {
  stat: Stat;
  effort: number;
  base_stat: number;
}

export class Stat {
  id: number;
  name: string;
  game_index: number;
  is_battle_only: boolean;
  affecting_moves: MoveStatAffectSets;
  affecting_natures: NatureStatAffectSets;
  characteristics: Characteristic;
  move_damage_class: MoveDamageClass;
  names: Name[];
}

export class MoveStatAffectSets {
  increase: MoveStatAffect;
  decrease: MoveStatAffect;
}

export class MoveStatAffect {
  change: number;
  move: Move;
}

export class NatureStatAffectSets {
  increase: Nature;
  decrease: Nature;
}

export class Nature {
  id: number;
  name: string;
  decreased_stat: Stat;
  increased_stat: Stat;
  hates_flavor: BerryFlavor;
  likes_flavor: BerryFlavor;
  pokeathlon_stat_changes: NatureStatChange;
  move_battle_style_preferences: MoveBattleStylePreference;
  names: Name[];
}

export class NatureStatChange {
  max_change: number;
  pokeathlon_stat: PokeathlonStat;
}

export class MoveBattleStylePreference {
  low_hp_preference: number;
  high_hp_preference: number;
  move_battle_style: MoveBattleStyle;
}

export class MoveBattleStyle {
  id: number;
  name: string;
  names: Name[];
}

export class PokeathlonStat {
  id: number;
  name: string;
  names: Name[];
  affecting_natures: NaturePokeathlonStatAffectSets;
}

export class NaturePokeathlonStatAffectSets {
  increase: NaturePokeathlonStatAffect;
  decrease: NaturePokeathlonStatAffect;
}

export class NaturePokeathlonStatAffect {
  max_change: number;
  nature: Nature;
}

export class Type {
  id: number;
  name: string;
  damage_relations: TypeRelations;
  game_indices: GenerationGameIndex[];
  generation: Generation;
  move_damage_class: MoveDamageClass;
  names: Name[];
  pokemon: TypePokemon;
  moves: Move[];
}

export class TypePokemon {
  slot: number;
  pokemon: Pokemon;
}

export class TypeRelations {
  no_damage_to: Type[];
  half_damage_to: Type[];
  double_damage_to: Type[];
  no_damage_from: Type[];
  half_damage_from: Type[];
  double_damage_from: Type[];
}

export class Pokemon {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  base_experience: number;

  @ApiProperty()
  height: number;

  @ApiProperty()
  is_default: boolean;

  @ApiProperty()
  order: number;

  @ApiProperty()
  weight: number;

  @ApiProperty({ type: [PokemonAbility] })
  abilities: PokemonAbility[];

  @ApiProperty({ type: [NamedApiResource] })
  forms: NamedApiResource[];

  @ApiProperty({ type: [VersionGameIndex] })
  game_indices: VersionGameIndex[];

  @ApiProperty({ type: [PokemonHeldItem] })
  held_items: PokemonHeldItem[];

  @ApiProperty()
  location_area_encounters: string;

  @ApiProperty({ type: [PokemonMove] })
  moves: PokemonMove[];

  @ApiProperty()
  sprites: PokemonSprites;

  @ApiProperty()
  species: NamedApiResource;

  @ApiProperty({ type: [PokemonStat] })
  stats: PokemonStat[];

  @ApiProperty({ type: [PokemonType] })
  types: PokemonType[];
}
