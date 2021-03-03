import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/domain/base.service';

@Injectable()
export class ItemService extends BaseService {
  /**
   * Obtains information of every item
   */
  getAllItems(): Promise<any> {
    return this.getAll(this.pokeapi.itemsUrl, this.pokeapi.limits.items);
  }

  /**
   * Obtains information of an specific item
   * @param query id or name of an item
   */
  getItemByQuery(query: string): Promise<any> {
    return this.getByQuery(this.pokeapi.itemsUrl, query);
  }
}
