import { Test, TestingModule } from '@nestjs/testing';
import { CoursemodulesService } from './coursemodules.service';

describe('CoursemodulesService', () => {
  let service: CoursemodulesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoursemodulesService],
    }).compile();

    service = module.get<CoursemodulesService>(CoursemodulesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
