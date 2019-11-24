import { TestBed } from '@angular/core/testing';

import { DailyPaymentsService } from './daily-payments.service';

describe('DailyPaymentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DailyPaymentsService = TestBed.get(DailyPaymentsService);
    expect(service).toBeTruthy();
  });
});
