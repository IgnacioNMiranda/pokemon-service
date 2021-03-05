import { HttpModule, HttpService } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { of } from 'rxjs';
import configuration from '../config/configuration';
import { BaseService } from './base.service';
import { getResponseMock } from './mocks/axios.mock';

describe('BaseService', () => {
  let service: BaseService;
  let http: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        HttpModule,
        ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
      ],
      providers: [BaseService],
    }).compile();

    service = module.get<BaseService>(BaseService);
    http = module.get<HttpService>(HttpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAll', () => {
    it('should retrieve specific resource based on path', async () => {
      const mockResult = { ...getResponseMock };

      jest.spyOn(http, 'get').mockReturnValue(of(mockResult));
      const result = await service.getAll(service.pokeapi.pokemonUrl);

      expect(result).toEqual(mockResult.data);
    });
  });

  describe('getByQuery', () => {
    it('should call getAllPokemon.getPokemonByQuery to obtain an specific pokemon', async () => {
      const mockResult = { ...getResponseMock };

      jest.spyOn(http, 'get').mockReturnValue(of(mockResult));
      const result = await service.getByQuery(service.pokeapi.pokemonUrl, '1');

      expect(result).toEqual(mockResult.data);
    });
  });
});
