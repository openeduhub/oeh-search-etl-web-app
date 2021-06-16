import { Test, TestingModule } from '@nestjs/testing';
import { RunLogService } from './run-log.service';

describe('RunLogService', () => {
  let service: RunLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RunLogService],
    }).compile();

    service = module.get<RunLogService>(RunLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
