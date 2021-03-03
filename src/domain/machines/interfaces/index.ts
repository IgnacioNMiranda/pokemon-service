import { VersionGroup } from 'src/domain/generation/interfaces';
import { Item } from 'src/domain/item/interfaces';
import { Move } from 'src/domain/move/interfaces';

export interface Machine {
  id: number;
  item: Item;
  move: Move;
  version_group: VersionGroup;
}
