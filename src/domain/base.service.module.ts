import { HttpModule, Module } from '@nestjs/common';
import { BaseService } from './base.service';

@Module({
  imports: [HttpModule],
  providers: [BaseService],
  exports: [BaseService],
})
export class BaseServiceModule {}
