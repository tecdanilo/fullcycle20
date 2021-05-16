import { Test, TestingModule } from '@nestjs/testing';
import { PeoplemoduleController } from './peoplemodule.controller';

describe('CoursemodulesController', () => {
  let controller: PeoplemoduleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PeoplemoduleController],
    }).compile();

    controller = module.get<PeoplemoduleController>(PeoplemoduleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
