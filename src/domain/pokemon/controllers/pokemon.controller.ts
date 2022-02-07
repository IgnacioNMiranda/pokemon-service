import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import {
  ApiBody,
  ApiInternalServerErrorResponse,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { NamedApiResourceList } from '../../entities';
import { Pokemon } from '../entities';
import { PokemonService } from '../providers/pokemon.service';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Obtains a list with every pokemon and its endpoint',
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
    return this.pokemonService.getAllPokemon();
  }

  @Get('/:idName')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Obtains an specific pokemon based on name or id' })
  @ApiResponse({
    status: 200,
    description: 'OK!',
    type: Pokemon,
  })
  @ApiBody({
    description: 'Name or id to search specific pokemon',
    type: String,
    required: true,
  })
  @ApiInternalServerErrorResponse({
    description: 'Unexpected error has occurred',
  })
  getByQuery(@Param('idName') query: string): Promise<Pokemon> {
    return this.pokemonService.getPokemonByQuery(query);
  }
}
