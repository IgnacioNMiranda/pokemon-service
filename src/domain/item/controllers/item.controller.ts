import { Controller, Get, Param } from '@nestjs/common';
import { ItemService } from '../providers/item.service';

@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get()
  getAll() {
    return this.itemService.getAllItems();
  }

  @Get('/:idName')
  getByQuery(@Param('idName') query: string) {
    return this.itemService.getItemByQuery(query);
  }
}
