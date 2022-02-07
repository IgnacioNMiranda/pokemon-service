import { VersionGroup } from '../../generation/entities';
import { Item } from '../../item/entities';
import { Move } from '../../move/entities';

export class Machine {
  id: number;
  item: Item;
  move: Move;
  version_group: VersionGroup;
}
