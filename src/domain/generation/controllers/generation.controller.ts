import { Controller, Get, Param } from '@nestjs/common';
import { NamedApiResourceList } from 'src/domain/interfaces';
import { Generation } from '../interfaces';
import { GenerationService } from '../providers/generation.service';

@Controller('generations')
export class GenerationController {
  constructor(private readonly generationService: GenerationService) {}

  @Get()
  getAll(): Promise<NamedApiResourceList> {
    return this.generationService.getAllGenerations();
  }

  @Get('/:idName')
  getByQuery(@Param('idName') query: string): Promise<Generation> {
    return this.generationService.getGenerationByQuery(query);
  }
}
