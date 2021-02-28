import { Module } from '@nestjs/common';
import { ItemController } from './controllers/item.controller';
import { ItemService } from './providers/item.service';

@Module({
  controllers: [ItemController],
  providers: [ItemService],
})
export class ItemModule {}
