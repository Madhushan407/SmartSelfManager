import { TestBed } from '@angular/core/testing';

import { IncomeRecordsService } from './income-records.service';

describe('IncomeRecordsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IncomeRecordsService = TestBed.get(IncomeRecordsService);
    expect(service).toBeTruthy();
  });
});
