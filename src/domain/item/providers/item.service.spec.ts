import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import configuration from '../../../config/configuration';
import { BaseServiceModule } from '../../base.service.module';
import { ItemService } from './item.service';
import { BaseService } from '../../base.service';

describe('ItemService', () => {
  let service: ItemService;
  let baseService: BaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        BaseServiceModule,
        ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
      ],
      providers: [ItemService],
    }).compile();

    service = module.get<ItemService>(ItemService);
    baseService = module.get<BaseService>(BaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAllItems', () => {
    it('should call baseService.getAll to obtain every item', async () => {
      const spy = jest
        .spyOn(baseService, 'getAll')
        .mockImplementation(async () => {});

      await service.getAllItems();
      expect(spy).toBeCalled();
    });
  });

  describe('getItemByQuery', () => {
    it('should call baseService.getByQuery to obtain an specific item', async () => {
      const spy = jest
        .spyOn(baseService, 'getByQuery')
        .mockImplementation(async () => {});

      await service.getItemByQuery('1');
      expect(spy).toBeCalled();
    });
  });
});
