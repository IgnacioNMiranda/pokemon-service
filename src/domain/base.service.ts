import { HttpService, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { map } from 'rxjs/operators';

@Injectable()
export class BaseService {
  pokeapi: any;

  constructor(
    private readonly configService: ConfigService,
    private httpService: HttpService,
  ) {
    this.pokeapi = this.configService.get('pokeapi');
  }

  /**
   * Obtains every resource related to the resource path
   * @param resourcePath url that defines the resource that would be retrieved
   * @param limit of the retrieved resources
   */
  async getAll(resourcePath: string, limit = '20'): Promise<any> {
    return new Promise((resolve, reject) => {
      const path = `${this.pokeapi.baseUrl}${resourcePath}/?limit=${limit}`;

      this.httpService
        .get(path)
        .pipe(map((response) => response.data))
        .toPromise()
        .then(resolve)
        .catch(reject);
    });
  }

  /**
   * Obtains information of an specific resource based on an id or name
   * @param query id or name of the resource
   */
  async getByQuery(resourcePath: string, query: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const path = `${this.pokeapi.baseUrl}${resourcePath}/${query}`;

      this.httpService
        .get(path)
        .pipe(map((response) => response.data))
        .toPromise()
        .then(resolve)
        .catch(reject);
    });
  }
}
