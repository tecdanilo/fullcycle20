import { Test, TestingModule } from '@nestjs/testing';
import { CoursemodulesController } from './coursemodules.controller';

describe('CoursemodulesController', () => {
  let controller: CoursemodulesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoursemodulesController],
    }).compile();

    controller = module.get<CoursemodulesController>(CoursemodulesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
