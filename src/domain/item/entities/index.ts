import { Pokemon } from '../../pokemon/entities';
import { Version } from '../../generation/entities';
import {
  ApiResource,
  Description,
  Effect,
  GenerationGameIndex,
  MachineVersionDetail,
  Name,
  NamedApiResource,
  VerboseEffect,
  VersionGroupFlavorText,
} from '../../entities';
import { ApiProperty } from '@nestjs/swagger';

export class ItemSprites {
  default: string;
}

export class ItemHolderPokemon {
  pokemon: Pokemon;
  version_details: ItemHolderPokemonVersionDetail[];
}

export class ItemHolderPokemonVersionDetail {
  rarity: number;
  version: Version;
}

export class ItemAttribute {
  id: number;
  name: string;
  items: Item[];
  names: Name[];
  descriptions: Description[];
}

export class ItemCategory {
  id: number;
  name: string;
  items: Item[];
  names: Name[];
  pocket: ItemPocket;
}

export class ItemFlingEffect {
  id: number;
  name: string;
  effect_entries: Effect[];
  items: Item[];
}

export class ItemPocket {
  id: number;
  name: string;
  categories: ItemCategory[];
  names: Name[];
}

export class Item {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  cost: number;

  @ApiProperty()
  fling_power: number;

  @ApiProperty()
  fling_effect: NamedApiResource;

  @ApiProperty({ type: [NamedApiResource] })
  attributes: NamedApiResource[];

  @ApiProperty()
  category: NamedApiResource;

  @ApiProperty({ type: [VerboseEffect] })
  effect_entries: VerboseEffect[];

  @ApiProperty({ type: [VersionGroupFlavorText] })
  flavor_text_entries: VersionGroupFlavorText[];

  @ApiProperty({ type: [GenerationGameIndex] })
  game_indices: GenerationGameIndex[];

  @ApiProperty({ type: [Name] })
  names: Name[];

  @ApiProperty()
  sprites: ItemSprites;

  @ApiProperty({ type: [ItemHolderPokemon] })
  held_by_pokemon: ItemHolderPokemon[];

  @ApiProperty()
  baby_trigger_for: ApiResource;

  @ApiProperty({ type: [MachineVersionDetail] })
  machines: MachineVersionDetail[];
}
