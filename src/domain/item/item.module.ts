import { Module } from '@nestjs/common';
import { BaseServiceModule } from '../base.service.module';
import { ItemController } from './controllers/item.controller';
import { ItemService } from './providers/item.service';

@Module({
  imports: [BaseServiceModule],
  controllers: [ItemController],
  providers: [ItemService],
})
export class ItemModule {}
