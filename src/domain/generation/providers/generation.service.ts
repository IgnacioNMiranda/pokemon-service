import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/domain/base.service';

@Injectable()
export class GenerationService extends BaseService {
  /**
   * Obtains information of every generation
   */
  getAllGenerations(): Promise<any> {
    return this.getAll(this.pokeapi.generationUrl);
  }

  /**
   * Obtains information of an specific generation
   * @param query id or name of a generation
   */
  getGenerationByQuery(query: string): Promise<any> {
    return this.getByQuery(this.pokeapi.generationUrl, query);
  }
}
