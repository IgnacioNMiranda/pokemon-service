import { ContestType } from '../../contests/entities';
import { Name } from '../../entities';
import { Item } from '../../item/entities';
import { Type } from '../../pokemon/entities';

export class Berry {
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

export class BerryFirmness {
  id: number;
  name: string;
  berries: Berry[];
  names: Name[];
}

export class BerryFlavor {
  id: number;
  name: string;
  berries: FlavorBerryMap[];
  contest_type: ContestType;
  names: Name[];
}

export class FlavorBerryMap {
  potency: number;
  berry: Berry;
}

export class BerryFlavorMap {
  potency: number;
  flavor: BerryFlavor;
}
