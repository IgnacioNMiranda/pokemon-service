import { ApiProperty } from '@nestjs/swagger';
import {
  EncounterConditionValue,
  EncounterMethod,
} from '../encounters/entities';
import { Generation, Version, VersionGroup } from '../generation/entities';
import { Machine } from '../machines/entities';

export class Language {
  id: number;
  name: string;
  official: boolean;
  iso639: string;
  iso3166: string;
  names: Name[];
}

export class ApiResource {
  name: string;
}

export class Description {
  description: string;
  language: Language;
}

export class Effect {
  effect: string;
  language: Language;
}

export class Encounter {
  min_level: number;
  max_number: number;
  conditional_values: EncounterConditionValue[];
  chance: number;
  method: EncounterMethod;
}

export class FlavorText {
  flavor_text: string;
  language: Language;
  version: Version;
}

export class GenerationGameIndex {
  game_index: number;
  generation: Generation;
}

export class MachineVersionDetail {
  machine: Machine;
  version_group: VersionGroup;
}

export class Name {
  name: string;
  language: Language;
}

export class NamedApiResource {
  @ApiProperty()
  name: string;

  @ApiProperty()
  url: string;
}

export class NamedApiResourceList {
  @ApiProperty()
  count: number;

  @ApiProperty()
  next: string;

  @ApiProperty()
  previous: string;

  @ApiProperty({ type: [NamedApiResource] })
  results: Array<NamedApiResource>;
}

export class VerboseEffect {
  effect: string;
  short_effect: string;
  language: Language;
}

export class VersionEncounterDetail {
  version: Version;
  max_chance: number;
  encounter_details: Encounter[];
}

export class VersionGameIndex {
  game_index: number;
  version: Version;
}

export class VersionGroupFlavorText {
  text: string;
  language: Language;
  version_group: VersionGroup;
}
