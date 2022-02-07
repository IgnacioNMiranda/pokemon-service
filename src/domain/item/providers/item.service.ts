import { Injectable } from '@nestjs/common';
import { BaseService } from '../../base.service';
import { NamedApiResourceList } from '../../entities';
import { Item } from '../entities';

@Injectable()
export class ItemService {
  constructor(private readonly baseService: BaseService) {}

  /**
   * Obtains information of every item
   */
  getAllItems(): Promise<NamedApiResourceList> {
    return this.baseService.getAll(
      this.baseService.pokeapi.itemsUrl,
      this.baseService.pokeapi.limits.items,
    );
  }

  /**
   * Obtains information of an specific item
   * @param query id or name of an item
   */
  getItemByQuery(query: string): Promise<Item> {
    return this.baseService.getByQuery(
      this.baseService.pokeapi.itemsUrl,
      query,
    );
  }
}
