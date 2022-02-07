import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import configuration from '../../../config/configuration';
import { BaseServiceModule } from '../../base.service.module';
import { ItemService } from '../providers/item.service';
import { ItemController } from './item.controller';
import { itemMock, namedAPIResourceListMock } from '../../mocks/item.mock';

describe('ItemController', () => {
  let controller: ItemController;
  let service: ItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        BaseServiceModule,
        ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
      ],
      controllers: [ItemController],
      providers: [ItemService],
    }).compile();

    controller = module.get<ItemController>(ItemController);
    service = module.get<ItemService>(ItemService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getAll', () => {
    it('should call generationService.getAllItems to obtain every item', async () => {
      const mockResult = { ...namedAPIResourceListMock };

      jest
        .spyOn(service, 'getAllItems')
        .mockImplementation(async () => mockResult);

      const result = await controller.getAll();
      expect(result).toEqual(mockResult);
    });
  });

  describe('getByQuery', () => {
    it('should call generationService.getItemByQuery to obtain an specific item', async () => {
      const mockResult = { ...itemMock };

      jest
        .spyOn(service, 'getItemByQuery')
        .mockImplementation(async () => mockResult);

      const result = await controller.getByQuery('1');
      expect(result).toEqual(mockResult);
    });
  });
});
