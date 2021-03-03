import { Name } from 'src/domain/interfaces';

export interface EncounterMethod {
  id: number;
  name: string;
  order: number;
  names: Name[];
}

export interface EncounterCondition {
  id: number;
  name: string;
  names: Name[];
  values: EncounterConditionValue[];
}

export interface EncounterConditionValue {
  id: number;
  name: string;
  condition: EncounterCondition;
  names: Name[];
}
