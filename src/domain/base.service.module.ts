import { HttpModule, Module } from '@nestjs/common';
import { BaseService } from './base.service';

@Module({
  imports: [HttpModule],
  providers: [BaseService],
  exports: [HttpModule],
})
export class BaseServiceModule {}
