import { BerryFlavor } from '../../berry/entities';
import { Effect, FlavorText, Language } from '../../entities';
import { Move } from '../../move/entities';

export class ContestType {
  id: number;
  name: string;
  berry_flavor: BerryFlavor;
  names: ContestName[];
}

export class ContestName {
  name: string;
  color: string;
  language: Language;
}

export class ContestEffect {
  id: number;
  appeal: number;
  jam: number;
  effec_entries: Effect[];
  flavor_text_entries: FlavorText[];
}

export class SuperContestEffect {
  id: number;
  appeal: number;
  flavor_text_entries: FlavorText[];
  moves: Move[];
}
