import { TestBed } from '@angular/core/testing';

import { SpecialPaymentsService } from './special-payments.service';

describe('SpecialPaymentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpecialPaymentsService = TestBed.get(SpecialPaymentsService);
    expect(service).toBeTruthy();
  });
});
