import { Test, TestingModule } from '@nestjs/testing';
import { PokemonService } from '../providers/pokemon.service';
import { PokemonController } from './pokemon.controller';
import {
  namedAPIResourceListMock,
  pokemonMock,
} from '../../mocks/pokemon.mock';
import { NamedApiResourceList } from '../../entities';
import { ConfigModule } from '@nestjs/config';
import configuration from '../../../config/configuration';
import { Pokemon } from '../entities';
import { BaseServiceModule } from '../../base.service.module';

describe('PokemonController', () => {
  let controller: PokemonController;
  let service: PokemonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        BaseServiceModule,
        ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
      ],
      controllers: [PokemonController],
      providers: [PokemonService],
    }).compile();

    controller = module.get<PokemonController>(PokemonController);
    service = module.get<PokemonService>(PokemonService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getAll', () => {
    it('should call pokemonService.getAllPokemon to obtain every pokemon', async () => {
      const mockResult: NamedApiResourceList = { ...namedAPIResourceListMock };

      const spy = jest
        .spyOn(service, 'getAllPokemon')
        .mockImplementation(async () => mockResult);

      const result = await controller.getAll();

      expect(spy).toBeCalled();
      expect(result).toEqual(mockResult);
    });
  });

  describe('getByQuery', () => {
    it('should call pokemonService.getPokemonByQuery to obtain an specific pokemon', async () => {
      const mockResult: Pokemon = { ...pokemonMock };

      const spy = jest
        .spyOn(service, 'getPokemonByQuery')
        .mockImplementation(async () => mockResult);

      const result = await controller.getByQuery('1');

      expect(spy).toBeCalled();
      expect(result).toEqual(mockResult);
    });
  });
});
