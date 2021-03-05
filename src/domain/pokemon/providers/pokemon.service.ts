import { Injectable } from '@nestjs/common';
import { BaseService } from '../../base.service';
import { NamedApiResourceList } from '../../interfaces';
import { Pokemon } from '../interfaces';
@Injectable()
export class PokemonService {
  constructor(private readonly baseService: BaseService) {}

  /**
   * Obtains information of every pokemon
   */
  async getAllPokemon(): Promise<NamedApiResourceList> {
    return this.baseService.getAll(
      this.baseService.pokeapi.pokemonUrl,
      this.baseService.pokeapi.limits.pokemon,
    );
  }

  /**
   * Obtains information of an specific pokemon
   * @param query id or name of a pokemon
   */
  async getPokemonByQuery(query: string): Promise<Pokemon> {
    return this.baseService.getByQuery(
      this.baseService.pokeapi.pokemonUrl,
      query,
    );
  }
}
