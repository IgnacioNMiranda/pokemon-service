import { BerryFlavor } from 'src/domain/berry/interfaces';
import { Effect, FlavorText, Language } from 'src/domain/interfaces';
import { Move } from 'src/domain/move/interfaces';

export interface ContestType {
  id: number;
  name: string;
  berry_flavor: BerryFlavor;
  names: ContestName[];
}

export interface ContestName {
  name: string;
  color: string;
  language: Language;
}

export interface ContestEffect {
  id: number;
  appeal: number;
  jam: number;
  effec_entries: Effect[];
  flavor_text_entries: FlavorText[];
}

export interface SuperContestEffect {
  id: number;
  appeal: number;
  flavor_text_entries: FlavorText[];
  moves: Move[];
}
