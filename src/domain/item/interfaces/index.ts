import { Pokemon } from 'src/domain/pokemon/interfaces';
import { Version } from '../../generation/interfaces';
import {
  Description,
  Effect,
  GenerationGameIndex,
  MachineVersionDetail,
  Name,
  VerboseEffect,
  VersionGroupFlavorText,
} from '../../interfaces';

export interface Item {
  id: number;
  name: string;
  cost: number;
  fling_power: number;
  fling_effect: ItemFlingEffect;
  attributes: ItemAttribute;
  category: ItemCategory;
  effect_entries: VerboseEffect[];
  flavor_text_entries: VersionGroupFlavorText[];
  game_indices: GenerationGameIndex[];
  names: Name[];
  sprites: ItemSprites;
  held_by_pokemon: ItemHolderPokemon[];
  baby_trigger_for: any;
  machines: MachineVersionDetail[];
}

export interface ItemSprites {
  default: string;
}

export interface ItemHolderPokemon {
  pokemon: Pokemon;
  version_details: ItemHolderPokemonVersionDetail[];
}

export interface ItemHolderPokemonVersionDetail {
  rarity: number;
  version: Version;
}

export interface ItemAttribute {
  id: number;
  name: string;
  items: Item[];
  names: Name[];
  descriptions: Description[];
}

export interface ItemCategory {
  id: number;
  name: string;
  items: Item[];
  names: Name[];
  pocket: ItemPocket;
}

export interface ItemFlingEffect {
  id: number;
  name: string;
  effect_entries: Effect[];
  items: Item[];
}

export interface ItemPocket {
  id: number;
  name: string;
  categories: ItemCategory[];
  names: Name[];
}
