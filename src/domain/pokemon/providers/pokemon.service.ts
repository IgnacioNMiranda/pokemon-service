import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/domain/base.service';
@Injectable()
export class PokemonService extends BaseService {
  /**
   * Obtains information of every pokemon
   */
  async getAllPokemon(): Promise<any> {
    return this.getAll(this.pokeapi.pokemonUrl, this.pokeapi.limits.pokemon);
  }

  /**
   * Obtains information of an specific pokemon
   * @param query id or name of a pokemon
   */
  async getPokemonByQuery(query: string): Promise<any> {
    return this.getByQuery(this.pokeapi.pokemonUrl, query);
  }
}
