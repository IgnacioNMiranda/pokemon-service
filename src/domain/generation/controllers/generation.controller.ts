import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import {
  ApiBody,
  ApiInternalServerErrorResponse,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { NamedApiResourceList } from '../../entities';
import { Generation } from '../entities';
import { GenerationService } from '../providers/generation.service';

@Controller('generations')
export class GenerationController {
  constructor(private readonly generationService: GenerationService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Obtains a list with every generation and its endpoint',
  })
  @ApiResponse({
    status: 200,
    description: 'OK!',
    type: NamedApiResourceList,
  })
  @ApiInternalServerErrorResponse({
    description: 'Unexpected error has occurred',
  })
  getAll(): Promise<NamedApiResourceList> {
    return this.generationService.getAllGenerations();
  }

  @Get('/:idName')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Obtains an specific generation based on name or id',
  })
  @ApiResponse({
    status: 200,
    description: 'OK!',
    type: Generation,
  })
  @ApiBody({
    description: 'Name or id to search specific item',
    type: String,
    required: true,
  })
  @ApiInternalServerErrorResponse({
    description: 'Unexpected error has occurred',
  })
  getByQuery(@Param('idName') query: string): Promise<Generation> {
    return this.generationService.getGenerationByQuery(query);
  }
}
