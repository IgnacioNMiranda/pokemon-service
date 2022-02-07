import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import {
  generationMock,
  namedAPIResourceListMock,
} from '../../mocks/generation.mock';
import configuration from '../../../config/configuration';
import { BaseServiceModule } from '../../base.service.module';
import { GenerationService } from '../providers/generation.service';
import { GenerationController } from './generation.controller';
import { NamedApiResourceList } from '../../entities';

describe('GenerationController', () => {
  let controller: GenerationController;
  let service: GenerationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        BaseServiceModule,
        ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
      ],
      controllers: [GenerationController],
      providers: [GenerationService],
    }).compile();

    controller = module.get<GenerationController>(GenerationController);
    service = module.get<GenerationService>(GenerationService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getAll', () => {
    it('should call generationService.getAllGenerations to obtain every generation', async () => {
      const mockResult = { ...namedAPIResourceListMock };

      jest
        .spyOn(service, 'getAllGenerations')
        .mockImplementation(async () => mockResult);

      const result: NamedApiResourceList = await controller.getAll();
      expect(result).toEqual(mockResult);
    });
  });

  describe('getByQuery', () => {
    it('should call generationService.getGenerationByQuery to obtain an specific generation', async () => {
      const mockResult = { ...generationMock };

      jest
        .spyOn(service, 'getGenerationByQuery')
        .mockImplementation(async () => mockResult);

      const result = await controller.getByQuery('1');
      expect(result).toEqual(mockResult);
    });
  });
});
