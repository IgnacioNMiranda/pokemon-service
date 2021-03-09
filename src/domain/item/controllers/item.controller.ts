import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import {
  ApiBody,
  ApiInternalServerErrorResponse,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { NamedApiResourceList } from 'src/domain/entities';
import { Item } from '../entities';
import { ItemService } from '../providers/item.service';

@Controller('items')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Obtains a list with every item and its endpoint' })
  @ApiResponse({
    status: 200,
    description: 'OK!',
    type: NamedApiResourceList,
  })
  @ApiInternalServerErrorResponse({
    description: 'Unexpected error has occurred',
  })
  getAll(): Promise<NamedApiResourceList> {
    return this.itemService.getAllItems();
  }

  @Get('/:idName')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Obtains an specific item based on name or id' })
  @ApiResponse({
    status: 200,
    description: 'OK!',
    type: Item,
  })
  @ApiBody({
    description: 'Name or id to search specific item',
    type: String,
    required: true,
  })
  @ApiInternalServerErrorResponse({
    description: 'Unexpected error has occurred',
  })
  getByQuery(@Param('idName') query: string): Promise<Item> {
    return this.itemService.getItemByQuery(query);
  }
}
