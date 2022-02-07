import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import configuration from '../../../config/configuration';
import { GenerationService } from './generation.service';
import { BaseService } from '../../base.service';
import { BaseServiceModule } from '../../base.service.module';

describe('GenerationService', () => {
  let service: GenerationService;
  let baseService: BaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        BaseServiceModule,
        ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
      ],
      providers: [GenerationService],
    }).compile();

    service = module.get<GenerationService>(GenerationService);
    baseService = module.get<BaseService>(BaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAllGenerations', () => {
    it('should call baseService.getAll to obtain every generation', async () => {
      const spy = jest
        .spyOn(baseService, 'getAll')
        .mockImplementation(async () => {});

      await service.getAllGenerations();
      expect(spy).toBeCalled();
    });
  });

  describe('getGenerationByQuery', () => {
    it('should call baseService.getByQuery to obtain an specific pokemon', async () => {
      const spy = jest
        .spyOn(baseService, 'getByQuery')
        .mockImplementation(async () => {});

      await service.getGenerationByQuery('1');
      expect(spy).toBeCalled();
    });
  });
});
