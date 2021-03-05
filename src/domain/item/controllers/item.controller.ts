import { Controller, Get, Param } from '@nestjs/common';
import { NamedApiResourceList } from 'src/domain/interfaces';
import { Item } from '../interfaces';
import { ItemService } from '../providers/item.service';

@Controller('items')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get()
  getAll(): Promise<NamedApiResourceList> {
    return this.itemService.getAllItems();
  }

  @Get('/:idName')
  getByQuery(@Param('idName') query: string): Promise<Item> {
    return this.itemService.getItemByQuery(query);
  }
}
