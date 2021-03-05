import { Controller, Get, Param } from '@nestjs/common';
import { NamedApiResourceList } from '../../interfaces';
import { Pokemon } from '../interfaces';
import { PokemonService } from '../providers/pokemon.service';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  getAll(): Promise<NamedApiResourceList> {
    return this.pokemonService.getAllPokemon();
  }

  @Get('/:idName')
  getByQuery(@Param('idName') query: string): Promise<Pokemon> {
    return this.pokemonService.getPokemonByQuery(query);
  }
}
