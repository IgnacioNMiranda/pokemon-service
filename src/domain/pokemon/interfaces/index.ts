import { BerryFlavor } from '../../berry/interfaces';
import { EvolutionChain } from '../../evolution/interfaces';
import {
  Generation,
  Pokedex,
  Version,
  VersionGroup,
} from '../../generation/interfaces';
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
} from '../../interfaces';
import { Item } from '../../item/interfaces';
import { PalParkArea } from '../../locations/interfaces';
import { Move, MoveDamageClass, MoveLearnMethod } from '../../move/interfaces';
import { PokemonController } from '../controllers/pokemon.controller';

export interface Ability {
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

export interface AbilityEffectChange {
  effect_entries: Effect[];
  version_group: VersionGroup;
}

export interface AbilityFlavorText {
  flavor_text: string;
  language: Language;
  version_group: VersionGroup;
}

export interface AbilityPokemon {
  is_hidden: boolean;
  slot: number;
  pokemon: PokemonController;
}

export interface Characteristic {
  id: number;
  gene_modulo: number;
  possible_values: number[];
}

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: PokemonAbility[];
  forms: NamedApiResource[];
  game_indices: VersionGameIndex[];
  held_items: PokemonHeldItem[];
  location_area_encounters: string;
  moves: PokemonMove[];
  sprites: PokemonSprites;
  species: NamedApiResource;
  stats: PokemonStat[];
  types: PokemonType[];
}

export interface PokemonAbility {
  is_hidden: boolean;
  slot: number;
  ability: Ability;
}

export interface PokemonForm {
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

export interface PokemonFormSprites {
  front_default: string;
  front_shiny: string;
  back_default: string;
  back_shiny: string;
}

export interface PokemonHabitat {
  id: number;
  name: string;
  names: Name[];
  pokemon_species: PokemonSpecies[];
}

export interface PokemonHeldItem {
  item: Item;
  version_details: PokemonHeldItemVersion[];
}

export interface PokemonHeldItemVersion {
  version: Version;
  rarity: number;
}

export interface PokemonMove {
  move: Move;
  version_group_details: PokemonMoveVersion[];
}

export interface PokemonMoveVersion {
  move_learn_method: MoveLearnMethod;
  version_group: VersionGroup;
  level_learned_at: number;
}

export interface PokemonSprites {
  front_default: string;
  front_shiny: string;
  front_female: string;
  front_shiny_female: string;
  back_default: string;
  back_shiny: string;
  back_female: string;
  back_shiny_female: string;
}

export interface PokemonSpecies {
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

export interface Genus {
  genus: string;
  language: Language;
}

export interface PalParkEncounterArea {
  base_score: number;
  rate: number;
  area: PalParkArea;
}

export interface PokemonSpeciesVariety {
  is_default: boolean;
  pokemon: Pokemon;
}

export interface GrowthRate {
  id: number;
  name: string;
  formula: string;
  descriptions: Description[];
  levels: GrowthRateExperienceLevel[];
  pokemon_species: PokemonSpecies[];
}

export interface GrowthRateExperienceLevel {
  level: number;
  experience: number;
}

export interface PokemonSpeciesDexEntry {
  entry_number: number;
  pokedex: Pokedex;
}

export interface EggGroup {
  id: number;
  name: string;
  names: Name[];
  pokemon_species: PokemonSpecies[];
}

export interface PokemonColor {
  id: number;
  name: string;
  names: Name[];
  pokemon_species: PokemonSpecies[];
}

export interface PokemonShape {
  id: number;
  name: string;
  awesome_names: AwesomeName[];
  names: Name[];
  pokemon_species: PokemonSpecies[];
}

export interface AwesomeName {
  awesome_name: string;
  language: Language;
}

export interface PokemonType {
  slot: number;
  type: NamedApiResource;
}

export interface PokemonStat {
  stat: Stat;
  effort: number;
  base_stat: number;
}

export interface Stat {
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

export interface MoveStatAffectSets {
  increase: MoveStatAffect;
  decrease: MoveStatAffect;
}

export interface MoveStatAffect {
  change: number;
  move: Move;
}

export interface NatureStatAffectSets {
  increase: Nature;
  decrease: Nature;
}

export interface Nature {
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

export interface NatureStatChange {
  max_change: number;
  pokeathlon_stat: PokeathlonStat;
}

export interface MoveBattleStylePreference {
  low_hp_preference: number;
  high_hp_preference: number;
  move_battle_style: MoveBattleStyle;
}

export interface MoveBattleStyle {
  id: number;
  name: string;
  names: Name[];
}

export interface PokeathlonStat {
  id: number;
  name: string;
  names: Name[];
  affecting_natures: NaturePokeathlonStatAffectSets;
}

export interface NaturePokeathlonStatAffectSets {
  increase: NaturePokeathlonStatAffect;
  decrease: NaturePokeathlonStatAffect;
}

export interface NaturePokeathlonStatAffect {
  max_change: number;
  nature: Nature;
}

export interface Type {
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

export interface TypePokemon {
  slot: number;
  pokemon: Pokemon;
}

export interface TypeRelations {
  no_damage_to: Type[];
  half_damage_to: Type[];
  double_damage_to: Type[];
  no_damage_from: Type[];
  half_damage_from: Type[];
  double_damage_from: Type[];
}
