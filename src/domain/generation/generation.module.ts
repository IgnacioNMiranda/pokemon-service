import { Module } from '@nestjs/common';
import { BaseServiceModule } from '../base.service.module';
import { GenerationController } from './controllers/generation.controller';
import { GenerationService } from './providers/generation.service';

@Module({
  imports: [BaseServiceModule],
  controllers: [GenerationController],
  providers: [GenerationService],
})
export class GenerationModule {}
