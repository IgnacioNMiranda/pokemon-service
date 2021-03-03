import { ContestType } from 'src/domain/contests/interfaces';
import { Name } from 'src/domain/interfaces';
import { Item } from 'src/domain/item/interfaces';
import { Type } from 'src/domain/pokemon/interfaces';

export interface Berry {
  id: number;
  name: string;
  growth_time: number;
  max_harvest: number;
  natural_gift_power: number;
  size: number;
  smoothness: number;
  soil_dryness: number;
  firmness: BerryFirmness;
  flavors: BerryFlavorMap[];
  item: Item;
  natural_gift_type: Type;
}

export interface BerryFirmness {
  id: number;
  name: string;
  berries: Berry[];
  names: Name[];
}

export interface BerryFlavor {
  id: number;
  name: string;
  berries: FlavorBerryMap[];
  contest_type: ContestType;
  names: Name[];
}

export interface FlavorBerryMap {
  potency: number;
  berry: Berry;
}

export interface BerryFlavorMap {
  potency: number;
  flavor: BerryFlavor;
}
