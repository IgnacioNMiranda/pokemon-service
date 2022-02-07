import {
  ContestEffect,
  ContestType,
  SuperContestEffect,
} from '../../contests/entities';
import { Generation, VersionGroup } from '../../generation/entities';
import {
  Description,
  Language,
  MachineVersionDetail,
  Name,
  VerboseEffect,
} from '../../entities';
import { AbilityEffectChange, Stat, Type } from '../../pokemon/entities';

export class Move {
  id: number;
  name: string;
  accuracy: number;
  effect_chance: number;
  pp: number;
  priority: number;
  power: number;
  contest_combos: ContestComboSets;
  contest_type: ContestType;
  contest_effect: ContestEffect;
  damage_class: MoveDamageClass;
  effect_entries: VerboseEffect[];
  effect_changes: AbilityEffectChange[];
  flavor_text_entries: MoveFlavorText[];
  generation: Generation;
  machines: MachineVersionDetail[];
  meta: MoveMetaData;
  names: Name[];
  past_values: PastMoveStatValues[];
  stat_changes: MoveStatChange[];
  super_contest_effect: SuperContestEffect;
  target: MoveTarget;
  type: Type;
}

export class ContestComboSets {
  normal: ContestComboDetail;
  super: ContestComboDetail;
}

export class ContestComboDetail {
  use_before: Move;
  use_after: Move;
}

export class MoveDamageClass {
  id: number;
  name: string;
  descriptions: Description[];
  moves: Move[];
  names: Name[];
}

export class MoveFlavorText {
  flavor_text: string;
  language: Language;
  version_group: VersionGroup;
}

export class MoveMetaData {
  ailment: MoveAilment;
  category: MoveCategory;
  min_hits: number;
  max_hits: number;
  min_turns: number;
  max_turns: number;
  drain: number;
  healing: number;
  crit_rate: number;
  aliment_chance: number;
  flinch_chance: number;
  stat_chance: number;
}

export class MoveAilment {
  id: number;
  name: string;
  moves: Move[];
  names: Name[];
}

export class MoveCategory {
  id: number;
  name: string;
  moves: Move[];
  descriptions: Description[];
}

export class PastMoveStatValues {
  accuracy: number;
  effect_chance: number;
  power: number;
  pp: number;
  effect_entries: VerboseEffect[];
  type: Type;
  version_group: VersionGroup;
}

export class MoveStatChange {
  change: number;
  stat: Stat;
}

export class MoveLearnMethod {
  id: number;
  name: string;
  descriptions: Description[];
  names: Name[];
  version_groups: VersionGroup[];
}

export class MoveTarget {
  id: number;
  name: string;
  descriptions: Description[];
  moves: Move[];
  names: Name[];
}
