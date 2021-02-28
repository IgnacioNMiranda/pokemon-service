import { Controller, Get, Param } from '@nestjs/common';
import { PokemonService } from '../providers/pokemon.service';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  getAll() {
    return this.pokemonService.getAllPokemon();
  }

  @Get('/:idName')
  getByQuery(@Param('idName') query: string) {
    return this.pokemonService.getPokemonByQuery(query);
  }
}
