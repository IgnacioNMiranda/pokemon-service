import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import configuration from '../../../config/configuration';
import { BaseService } from '../../base.service';
import { BaseServiceModule } from '../../base.service.module';
import { PokemonService } from './pokemon.service';

describe('PokemonService', () => {
  let service: PokemonService;
  let baseService: BaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        BaseServiceModule,
        ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
      ],
      providers: [PokemonService],
    }).compile();

    service = module.get<PokemonService>(PokemonService);
    baseService = module.get<BaseService>(BaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAllPokemon', () => {
    it('should call baseService.getAll to obtain every pokemon', async () => {
      const spy = jest
        .spyOn(baseService, 'getAll')
        .mockImplementation(async () => {});

      await service.getAllPokemon();
      expect(spy).toBeCalled();
    });
  });

  describe('getPokemonByQuery', () => {
    it('should call baseService.getByQuery to obtain an specific pokemon', async () => {
      const spy = jest
        .spyOn(baseService, 'getByQuery')
        .mockImplementation(async () => {});

      await service.getPokemonByQuery('1');
      expect(spy).toBeCalled();
    });
  });
});
