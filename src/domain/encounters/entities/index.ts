import { Name } from '../../entities';

export class EncounterMethod {
  id: number;
  name: string;
  order: number;
  names: Name[];
}

export class EncounterCondition {
  id: number;
  name: string;
  names: Name[];
  values: EncounterConditionValue[];
}

export class EncounterConditionValue {
  id: number;
  name: string;
  condition: EncounterCondition;
  names: Name[];
}
