import { Injectable } from '@nestjs/common';
import { BaseService } from '../../base.service';
import { NamedApiResourceList } from '../../interfaces';
import { Generation } from '../interfaces';

@Injectable()
export class GenerationService {
  constructor(private readonly baseService: BaseService) {}

  /**
   * Obtains information of every generation
   */
  getAllGenerations(): Promise<NamedApiResourceList> {
    return this.baseService.getAll(this.baseService.pokeapi.generationUrl);
  }

  /**
   * Obtains information of an specific generation
   * @param query id or name of a generation
   */
  getGenerationByQuery(query: string): Promise<Generation> {
    return this.baseService.getByQuery(
      this.baseService.pokeapi.generationUrl,
      query,
    );
  }
}
