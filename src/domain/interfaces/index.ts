import {
  EncounterConditionValue,
  EncounterMethod,
} from '../encounters/interfaces';
import { Generation, Version, VersionGroup } from '../generation/interfaces';
import { Machine } from '../machines/interfaces';

export interface Language {
  id: number;
  name: string;
  official: boolean;
  iso639: string;
  iso3166: string;
  names: Name[];
}

export interface ApiResource {
  name: string;
}

export interface Description {
  description: string;
  language: Language;
}

export interface Effect {
  effect: string;
  language: Language;
}

export interface Encounter {
  min_level: number;
  max_number: number;
  conditional_values: EncounterConditionValue[];
  chance: number;
  method: EncounterMethod;
}

export interface FlavorText {
  flavor_text: string;
  language: Language;
  version: Version;
}

export interface GenerationGameIndex {
  game_index: number;
  generation: Generation;
}

export interface MachineVersionDetail {
  machine: Machine;
  version_group: VersionGroup;
}

export interface Name {
  name: string;
  language: Language;
}

export interface NamedApiResource {
  name: string;
  url: string;
}

export interface NamedApiResourceList {
  count: number;
  next: string;
  previous: boolean;
  results: Array<NamedApiResource>;
}

export interface VerboseEffect {
  effect: string;
  short_effect: string;
  language: Language;
}

export interface VersionEncounterDetail {
  version: Version;
  max_chance: number;
  encounter_details: Encounter[];
}

export interface VersionGameIndex {
  game_index: number;
  version: Version;
}

export interface VersionGroupFlavorText {
  text: string;
  language: Language;
  version_group: VersionGroup;
}
