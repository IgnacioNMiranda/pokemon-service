import { Controller, Get, Param } from '@nestjs/common';
import { GenerationService } from '../providers/generation.service';

@Controller('generation')
export class GenerationController {
  constructor(private readonly generationService: GenerationService) {}

  @Get()
  getAll() {
    return this.generationService.getAllGenerations();
  }

  @Get('/:idName')
  getByQuery(@Param('idName') query: string) {
    return this.generationService.getGenerationByQuery(query);
  }
}
