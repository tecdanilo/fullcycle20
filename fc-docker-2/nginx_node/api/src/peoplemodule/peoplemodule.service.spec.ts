import { Test, TestingModule } from '@nestjs/testing';
import { PeoplemoduleService } from './peoplemodule.service';

describe('CoursemodulesService', () => {
  let service: PeoplemoduleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PeoplemoduleService],
    }).compile();

    service = module.get<PeoplemoduleService>(PeoplemoduleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
